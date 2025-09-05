"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CoursivQuizStep11() {
  const router = useRouter()

  const knowledgeLevels = [
    { emoji: "😎", title: "Expert", subtitle: "I have extensive knowledge" },
    { emoji: "😌", title: "Proficient", subtitle: "I am skilled" },
    { emoji: "🤔", title: "Intermediate", subtitle: "I have some knowledge" },
    { emoji: "😬", title: "Novice", subtitle: "I have no experience" },
  ]

  const handleSelection = (answer: string) => {
    router.push(`/step12?knowledge=${encodeURIComponent(answer)}`)
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
          <div className="text-gray-600 font-semibold text-sm">8/20</div>
        </div>
        {/* Barra de Progresso */}
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "40%" }} // 8 de 20 é 40%
          ></div>
        </div>
      </header> {/* <--- CORREÇÃO APLICADA AQUI */}

      {/* Conteúdo do Quiz */}
      <main className="flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-black mb-10">
            Rate your knowledge in AI tools
          </h1>

          {/* Opções de Resposta */}
          <div className="space-y-4">
            {knowledgeLevels.map((level) => (
              <button
                key={level.title}
                onClick={() => handleSelection(level.title)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-black py-4 px-6 rounded-lg transition-colors flex items-center text-left gap-4"
              >
                <span className="text-2xl">{level.emoji}</span>
                <div>
                  <p className="font-semibold">{level.title}</p>
                  <p className="text-sm text-gray-500">{level.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
