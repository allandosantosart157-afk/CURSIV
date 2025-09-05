// /app/step25/page.js

"use client"

// 1. Importe o useSearchParams
import { useRouter, useSearchParams } from "next/navigation" 
import Image from "next/image"
import { Menu } from "lucide-react"

export default function CoursivQuizStep25() {
  const router = useRouter()
  // 2. Inicialize o hook para ler os parâmetros da URL
  const searchParams = useSearchParams()

  // 3. Leia o parâmetro 'specialGoal' e defina um valor padrão
  const userGoal = searchParams.get('specialGoal') || 'achieve your goals'

  const handleContinue = () => {
    // Repassa todos os parâmetros existentes para a próxima página
    router.push(`/step26?${searchParams.toString()}`) 
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center p-4 font-sans">
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between py-4">
        <Image
          src="/CURSIV/CURSIV-STEP2/logo.svg"
          alt="Coursiv Logo"
          width={120}
          height={40}
        />
        <Menu className="w-6 h-6 text-gray-600" />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center w-full text-center">
        <div className="w-full max-w-lg mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-black text-balance">
            Your Personal AI-Driven Income Growth Challenge
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Based on your answers, we expect you to gain necessary skills of
          </p>

          <h2 className="text-black text-xl font-semibold mb-6">
            <span className="underline">AI Master by Nov, 2025</span>
          </h2>

          {/* Goal Chip - AGORA DINÂMICO */}
          <div className="mb-6">
            <div className="bg-gray-100 px-4 py-2 rounded-lg inline-block border border-gray-200">
              <span className="text-gray-500 text-sm">Your goal: </span>
              {/* 4. A variável 'userGoal' é usada aqui */}
              <span className="text-black font-semibold">{userGoal}</span>
            </div>
          </div>

          <div className="w-full max-w-sm my-4 mx-auto">
            <Image 
              src="/CURSIV/CURSIV-HOME/chart.png"
              alt="Chart showing progress from Beginner to AI Master"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>

      <footer className="flex justify-center py-8 w-full">
        <div className="w-full max-w-md">
          <button
            onClick={handleContinue}
            className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            CONTINUE
          </button>
        </div>
      </footer>
    </div>
  )
}
