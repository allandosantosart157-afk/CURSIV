// /app/step24/page.js

"use client"

// 1. Importe o useSearchParams
import { useRouter, useSearchParams } from "next/navigation" 
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function CoursivQuizStep24() {
  const router = useRouter()
  // 2. Inicialize o hook para ler os parâmetros da URL
  const searchParams = useSearchParams() 

  const timeOptions = [
    "5 min/day",
    "10 min/day",
    "15 min/day",
    "20 min/day",
  ]

  const handleSelection = (answer: string) => {
    // 3. Crie uma nova instância para poder modificar os parâmetros
    const params = new URLSearchParams(searchParams)
    // Adicione a resposta desta página
    params.set('timeSpent', answer)
    
    // 4. Redirecione para a próxima página, passando TODOS os parâmetros
    router.push(`/step25?${params.toString()}`)
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
          <div className="text-gray-600 font-semibold text-sm">20/20</div>
        </div>
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "100%" }}
          ></div>
        </div>
      </header>

      {/* Container principal para conteúdo e imagem */}
      <div className="relative">
        <main className="flex flex-col items-center justify-center py-12 px-4">
          <div className="w-full max-w-md text-center">
            <h1 className="text-3xl font-bold text-black mb-10 text-balance">
              How much time are you ready to spend to achieve your goal?
            </h1>
            <div className="space-y-4">
              {timeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelection(option)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-4 px-6 rounded-lg text-lg transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </main>

        <div className="hidden lg:block absolute top-0 right-0 pointer-events-none -z-10 h-full">
          <Image
            src="/CURSIV/CURSIV-STEP20/man-flexing.webp"
            alt="Man smiling and flexing his arm"
            width={450}
            height={600}
            className="object-contain object-right-top h-full"
          />
        </div>
      </div>
    </div>
  )
}
