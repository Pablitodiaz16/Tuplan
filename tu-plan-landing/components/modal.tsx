"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

export default function NotifyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("email")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState({ text: "", type: "" })

  if (!isOpen) return null

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) {
      setMessage({ text: "Por favor, ingresa un correo electrónico válido.", type: "error" })
      return
    }

    setMessage({
      text: `¡Gracias! Te avisaremos al correo ${email} cuando el servicio esté disponible.`,
      type: "success",
    })
    setTimeout(() => {
      onClose()
      setEmail("")
      setMessage({ text: "", type: "" })
    }, 3000)
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone.length < 8) {
      setMessage({ text: "Por favor, ingresa un número de teléfono válido.", type: "error" })
      return
    }

    setMessage({
      text: `¡Gracias! Te avisaremos al número ${phone} cuando el servicio esté disponible.`,
      type: "success",
    })
    setTimeout(() => {
      onClose()
      setPhone("")
      setMessage({ text: "", type: "" })
    }, 3000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 animate-in fade-in slide-in-from-bottom-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Tu Plan Logo" width={32} height={32} />
            <h2 className="text-xl font-bold text-[#0a4b4b]">¿Cómo querés que te avisemos?</h2>
          </div>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>

        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 ${activeTab === "email" ? "border-b-2 border-[#0a4b4b] font-bold text-[#0a4b4b]" : ""}`}
            onClick={() => setActiveTab("email")}
          >
            Vía Email
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "whatsapp" ? "border-b-2 border-[#0a4b4b] font-bold text-[#0a4b4b]" : ""}`}
            onClick={() => setActiveTab("whatsapp")}
          >
            Vía WhatsApp
          </button>
        </div>

        {activeTab === "email" ? (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Tu correo electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#0a4b4b] text-white font-bold rounded-lg hover:bg-[#083838]"
            >
              Enviar
            </button>
            {message.text && (
              <div
                className={`mt-4 p-3 rounded-lg ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {message.text}
              </div>
            )}
          </form>
        ) : (
          <form onSubmit={handleWhatsAppSubmit}>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 font-medium">
                Tu número de WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Ej: 099123456"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#0a4b4b] text-white font-bold rounded-lg hover:bg-[#083838]"
            >
              Enviar
            </button>
            {message.text && (
              <div
                className={`mt-4 p-3 rounded-lg ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {message.text}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}

