import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MyBudget - Gestiona tus finanzas personales",
  description: "Una aplicación móvil que te ayuda a controlar tus gastos e ingresos de forma privada y segura.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  )
}
