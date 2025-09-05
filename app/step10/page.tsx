"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CoursivQuizStep10() {
  const router = useRouter()

  const options = [
    "Yes, of course",
    "Not really",
    "I never thought about it",
  ]

  const handleSelection = (answer: string) => {
    router.push(`/step11?needsProgramming=${encodeURIComponent(answer)}`)
  }

  return (
    // Fundo da página e do header alterados para branco
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
          <div className="text-gray-600 font-semibold text-sm">7/20</div>
        </div>
        {/* Barra de Progresso */}
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "35%" }}
          ></div>
        </div>
      </header>

      {/* Container principal */}
      <div className="relative">
        {/* Conteúdo do Quiz */}
        <main className="flex flex-col items-center justify-center py-12 px-4">
          <div className="w-full max-w-md text-center">
            <h1 className="text-3xl font-bold text-black mb-10 text-balance">
              Do you think you need to know programming to learn AI?
            </h1>

            {/* Opções de Resposta */}
            <div className="space-y-4">
              {options.map((optionText) => (
                <button
                  key={optionText}
                  onClick={() => handleSelection(optionText)}
                  // Botões agora em cinza-claro para contrastar com o fundo branco
                  className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-4 px-6 rounded-lg text-lg transition-colors"
                >
                  {optionText}
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* Imagem Decorativa */}
        <div className="hidden lg:block absolute bottom-0 right-0 pointer-events-none -z-10">
          <Image
            src="/CURSIV/CURSIV-STEP8/1-15.webp"
            alt="Man with a cap and laptop smiling"
            width={400}
            height={550}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
