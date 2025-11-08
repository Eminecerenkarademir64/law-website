"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [practiceArea, setPracticeArea] = useState("")
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      practice_area: practiceArea,
      preferred_date: formData.get("preferred_date"),
      preferred_time: formData.get("preferred_time"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to submit")

      toast({
        title: "Appointment requested!",
        description: "We'll contact you shortly to confirm your consultation.",
      })

      e.currentTarget.reset()
      setPracticeArea("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to schedule appointment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input id="name" name="name" required placeholder="John Doe" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required placeholder="john@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="practice_area">Practice Area *</Label>
        <Select value={practiceArea} onValueChange={setPracticeArea} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a practice area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="corporate">Corporate Law</SelectItem>
            <SelectItem value="litigation">Litigation</SelectItem>
            <SelectItem value="employment">Employment Law</SelectItem>
            <SelectItem value="real-estate">Real Estate</SelectItem>
            <SelectItem value="intellectual-property">Intellectual Property</SelectItem>
            <SelectItem value="estate-planning">Estate Planning</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="preferred_date">Preferred Date *</Label>
          <Input id="preferred_date" name="preferred_date" type="date" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferred_time">Preferred Time *</Label>
          <Input id="preferred_time" name="preferred_time" type="time" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Brief Description *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Please briefly describe your legal matter..."
          rows={4}
          className="resize-none"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? "Submitting..." : "Request Consultation"}
      </Button>
    </form>
  )
}
