"use client"

import { useState } from "react"
import NotifyModal from "@/components/modal"

export default function HomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-10 py-5 bg-[#0a4b4b] text-white font-bold rounded-lg hover:bg-[#083838] transition-all border-2 border-[#f5f2e9] text-xl"
      >
        Quiero que me avisen cuando esté disponible
      </button>

      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

