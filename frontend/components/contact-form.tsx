"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Gönderim başarısız")

      toast({
        title: "Mesajınız gönderildi!",
        description: "En kısa sürede size geri dönüş yapacağız.",
      })

      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Hata",
        description: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Ad Soyad *</Label>
        <Input id="name" name="name" required placeholder="Adınız Soyadınız" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-posta *</Label>
        <Input id="email" name="email" type="email" required placeholder="ornek@email.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefon Numarası</Label>
        <Input id="phone" name="phone" type="tel" placeholder="(555) 123 45 67" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Konu *</Label>
        <Input id="subject" name="subject" required placeholder="Nasıl yardımcı olabiliriz?" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mesajınız *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Hukuki ihtiyaçlarınız hakkında bize bilgi verin..."
          rows={6}
          className="resize-none"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
      </Button>
    </form>
  )
}
