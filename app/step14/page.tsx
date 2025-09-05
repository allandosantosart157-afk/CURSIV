"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CoursivQuizStep14() {
  const router = useRouter()

  // Lista de opções para a pergunta sobre o medo de ser substituído por IA
  const fearOptions = [
    { emoji: "😬", text: "Yes, all the time" },
    { emoji: "😥", text: "Yes, sometimes" },
    { emoji: "😉", text: "No, because I know how to use it" },
    { emoji: "😕", text: "I never thought about it" },
  ]

  const handleSelection = (answer: string) => {
    // Navega para o próximo passo, passando a resposta como parâmetro de URL
    router.push(`/step15?afraidOfReplacement=${encodeURIComponent(answer)}`)
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
          <div className="text-gray-600 font-semibold text-sm">11/20</div>
        </div>
        {/* Barra de Progresso */}
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "55%" }} // 11 de 20 é 55%
          ></div>
        </div>
      </header>

      {/* Conteúdo do Quiz */}
      <main className="flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-black mb-10">
            Are you afraid to be replaced by AI?
          </h1>

          {/* Opções de Resposta */}
          <div className="space-y-4">
            {fearOptions.map((option) => (
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
