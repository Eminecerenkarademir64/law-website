import React from "react"

type MapProps = {
  query: string
  className?: string
  height?: number
  title?: string
}

export function Map({ query, className, height = 450, title = "Google Map" }: MapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
  return (
    <div className={className ?? "w-full rounded-xl overflow-hidden border border-border"}>
      <iframe
        src={src}
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        aria-label={title}
      />
    </div>
  )
}


