"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CoursivQuizStep17() {
  const router = useRouter()

  // Lista de opções de resposta para a pergunta
  const options = [
    { emoji: "🥰", text: "Yes, I've heard of it" },
    { emoji: "🤓", text: "I'm curious" },
    { emoji: "🧐", text: "No, this is news to me" },
  ]

  const handleSelection = (answer: string) => {
    // Navega para o próximo passo, passando a resposta como parâmetro de URL
    router.push(`/step18?boostKnowledge=${encodeURIComponent(answer)}`)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header com Progresso */}
      <header className="sticky top-0 bg-white z-10">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <button onClick={() => router.back()} aria-label="Voltar">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <Image
            src="/CURSIV/CURSIV-STEP2/logo.svg"
            alt="Coursiv Logo"
            width={100}
            height={30}
          />
          <div className="text-gray-600 font-semibold text-sm">13/20</div>
        </div>
        {/* Barra de Progresso */}
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "65%" }} // 13 de 20 é 65%
          ></div>
        </div>
      </header>

      {/* Conteúdo do Quiz */}
      <main className="flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-black mb-10 text-balance">
            Did you know that AI tools may boost your income potential even further?
          </h1>

          {/* Opções de Resposta */}
          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.text}
                onClick={() => handleSelection(option.text)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-4 px-6 rounded-lg text-lg transition-colors flex items-center text-left gap-4"
              >
                <span className="text-2xl">{option.emoji}</span>
                <span>{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
