"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoursivQuizStep3() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header com Progresso */}
      <header className="sticky top-0 bg-white z-10">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <Link href="/step2">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </Link>
          <Image
            src="/CURSIV/CURSIV-STEP2/logo.svg"
            alt="Coursiv Logo"
            width={100}
            height={30}
          />
          <div className="text-gray-600 font-semibold text-sm">1/20</div>
        </div>
        {/* Barra de Progresso */}
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "5%" }}
          ></div>
        </div>
      </header>

      {/* Container principal para conteúdo e imagem */}
      <div className="relative">
        {/* Conteúdo do Quiz */}
        <main className="flex flex-col items-center justify-center py-12 px-4">
          <div className="w-full max-w-md text-center">
            <h1 className="text-3xl font-bold text-black mb-2">
              What is your age?
            </h1>
            <p className="text-gray-500 mb-8">
              We will personalize your AI challenge based on your answers
            </p>

            {/* Opções de Resposta */}
            <div className="space-y-4">
              {["18-24", "25-34", "35-44", "45+"].map((ageRange) => (
                <Link href="/step4" key={ageRange} className="block">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-4 px-6 rounded-lg text-lg transition-colors">
                    {ageRange}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* Imagem Decorativa */}
        <div className="hidden lg:block absolute bottom-0 right-0 pointer-events-none -z-10">
          <Image
            src="/CURSIV/CURSIV-STEP2/1-19.webp"
            alt="Man smiling and holding a phone"
            width={450}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
