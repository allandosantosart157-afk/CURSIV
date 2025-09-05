"use client"

// 1. Importe 'useSearchParams' junto com 'useRouter'
import { useRouter, useSearchParams } from "next/navigation" 
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function CoursivQuizStep23() {
  const router = useRouter()
  // 2. Inicialize o hook para poder ler os parâmetros da URL
  const searchParams = useSearchParams() 

  const achievements = [
    { emoji: "🏡", text: "Buy a house" },
    { emoji: "✈️", text: "Vacation" },
    { emoji: "🚗", text: "Buy a car" },
    { emoji: "🥂", text: "Worry-free retirement" },
    { emoji: "👩‍🏫", text: "Children's education" },
    { emoji: "💍", text: "A perfect wedding" },
    { emoji: "👀", text: "Other" },
  ]

  const handleSelection = (answer: string) => {
    // 3. Crie uma nova instância de URLSearchParams para poder modificá-la
    const params = new URLSearchParams(searchParams)
    // Adicione a resposta desta página aos parâmetros
    params.set('specialGoal', answer)
    
    // Agora o redirecionamento funcionará corretamente
    router.push(`/step24?${params.toString()}`)
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
          <div className="text-gray-600 font-semibold text-sm">19/20</div>
        </div>
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "95%" }}
          ></div>
        </div>
      </header>

      {/* Conteúdo do Quiz */}
      <main className="flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-black mb-2 text-balance">
            Is there something special you wish to achieve?
          </h1>
          <p className="text-gray-500 mb-8">
            You're more likely to reach your goal if you have something important to aim for
          </p>

          <div className="space-y-4">
            {achievements.map((item) => (
              <button
                key={item.text}
                onClick={() => handleSelection(item.text)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-4 px-6 rounded-lg text-lg transition-colors flex items-center text-left gap-4"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span>{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
