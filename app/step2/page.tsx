"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoursivQuizStep2() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col p-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        {/* Espaçador para centralizar a logo */}
        <div className="w-6 h-6" />
        <Image
          src="/CURSIV/CURSIV-STEP1/logo.svg"
          alt="Coursiv Logo"
          width={120}
          height={40}
        />
        <Menu className="w-6 h-6 text-gray-600" />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-8">
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl text-gray-800">
             <span className="font-bold text-[#4F46E5]">"More than 700,000"</span>
          </h1>
          <p className="text-base text-gray-600 mt-2">
            people mastered AI with Coursiv
          </p>
        </div>

        {/* Imagem com Tag */}
        <div className="relative mb-8 w-full max-w-sm">
          <Image
            src="/CURSIV/CURSIV-STEP1/male-1.webp"
            alt="Founder of Coursiv speaking at an event"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          
        </div>
      </main>

      {/* Botão de Continuar */}
      <footer className="flex justify-center py-4">
        <Link href="/step3" className="w-full max-w-md">
          <button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            CONTINUE
          </button>
        </Link>
      </footer>
    </div>
  )
}
