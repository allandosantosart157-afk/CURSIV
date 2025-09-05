"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CoursivQuizStep16() {
  const router = useRouter()

  // Lista de opções de resposta
  const incomeLevels = [
    "$50,000 - $100,000",
    "$100,000 - $300,000",
    "More than $300,000",
  ]

  const handleSelection = (answer: string) => {
    // Navega para o próximo passo, passando a resposta como parâmetro de URL
    router.push(`/step17?incomeGoal=${encodeURIComponent(answer)}`)
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
          <div className="text-gray-600 font-semibold text-sm">12/20</div>
        </div>
        {/* Barra de Progresso */}
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "60%" }} // 12 de 20 é 60%
          ></div>
        </div>
      </header>

      {/* Container principal para conteúdo e imagem */}
      <div className="relative">
        {/* Conteúdo do Quiz */}
        <main className="flex flex-col items-center justify-center py-12 px-4">
          <div className="w-full max-w-md text-center">
            <h1 className="text-3xl font-bold text-black mb-10 text-balance">
              What annual income level do you want to achieve?
            </h1>

            {/* Opções de Resposta */}
            <div className="space-y-4">
              {incomeLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => handleSelection(level)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-4 px-6 rounded-lg text-lg transition-colors"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* Imagem Decorativa */}
        <div className="hidden lg:block absolute top-0 right-0 pointer-events-none -z-10 h-full">
          <Image
            src="/CURSIV/CURSIV-STEP14/man-with-wallet.webp" // SUBSTITUA PELO CAMINHO CORRETO
            alt="Man looking at his wallet"
            width={450}
            height={600}
            className="object-contain object-right-top h-full"
          />
        </div>
      </div>
    </div>
  )
}
