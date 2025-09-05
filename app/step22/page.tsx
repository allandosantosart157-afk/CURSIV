"use client"

import { useRouter, useSearchParams } from "next/navigation" // 1. Importe o useSearchParams
import Image from "next/image"

// 2. Corrigido: Adicionado () para definir a função corretamente
export default function CoursivQuizStep22() { 
  const router = useRouter()
  const searchParams = useSearchParams() // 3. Inicialize o hook para ler os parâmetros da URL

  const handleContinue = () => {
    // 4. Corrigido: Navega para a próxima página, passando todos os parâmetros JÁ EXISTENTES
    // A função toString() converte todos os parâmetros (ex: ?age=25-34&goal=...) em uma string
    router.push(`/step23?${searchParams.toString()}`)
  }

  // O resto do seu código permanece o mesmo
  const profileData = [
    { 
      icon: "/CURSIV/CURSIV-STEP16/migrated_d14fbcf1p6wyzn_v3_quiz_profile_1.webp", 
      label: "Motivation", 
      value: "High" 
    },
    { 
      icon: "/CURSIV/CURSIV-STEP16/migrated_d14fbcf1p6wyzn_v3_quiz_profile_2.webp", 
      label: "Potential", 
      value: "High" 
    },
    { 
      icon: "/CURSIV/CURSIV-STEP16/migrated_d14fbcf1p6wyzn_v3_quiz_profile_3.webp", 
      label: "Focus", 
      value: "Limited" 
    },
    { 
      icon: "/CURSIV/CURSIV-STEP16/migrated_d14fbcf1p6wyzn_v3_quiz_profile_4.webp", 
      label: "AI Knowledge", 
      value: "Low" 
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center p-4 font-sans">
      {/* Header */}
      <header className="w-full">
        <div className="flex items-center justify-center py-6">
          <Image
            src="/CURSIV/CURSIV-STEP2/logo.svg"
            alt="Coursiv Logo"
            width={120}
            height={40}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-black mb-8">
          Here's Your AI-Driven Income Growth Profile
        </h1>

        {/* Profile Card */}
        <div className="relative w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-lg p-6 overflow-hidden">
          
          {/* Readiness Score Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-semibold text-gray-800">Readiness score</h2>
              <span className="border border-gray-300 rounded-md px-3 py-1 text-sm font-medium">
                Result: Perfect
              </span>
            </div>
            
            <div className="relative mt-8 mb-4">
              <div className="absolute bottom-full left-[60%] -translate-x-1/2 mb-2">
                <div className="bg-gray-700 text-white text-sm rounded-md px-3 py-1">
                  Moderate
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-700" />
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full"></div>
              <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-4 border-gray-200"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 font-bold">
              <span>LOW</span>
              <span>INTERMEDIATE</span>
              <span>HIGH</span>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-start gap-4 my-6 mb-20">
            <span className="text-2xl mt-1">👍</span>
            <div>
              <h3 className="font-bold text-gray-900">Impressive score to succeed in AI</h3>
              <p className="text-gray-600 text-sm">
                A recent study by PWC in 2024 revealed that professionals in AI-related roles earn, on average, 25% more in the United States than their peers in similar positions without AI expertise.
              </p>
            </div>
          </div>

          {/* Attributes List com Imagens */}
          <div className="space-y-4 z-10 relative">
            {profileData.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-indigo-100">
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  <p className="font-bold text-black">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Overlapping Image */}
          <div className="absolute bottom-0 right-[-30px] w-64 h-80 z-0">
            <Image
              src="/CURSIV/CURSIV-STEP16/Ed.webp"
              alt="Coursiv representative on the phone"
              width={256}
              height={320}
              className="object-contain object-bottom"
            />
          </div>
          
        </div>

        {/* Continue Button agora está fora do card */}
        <div className="w-full max-w-xl mt-8">
           <button
              onClick={handleContinue}
              className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              CONTINUE
            </button>
        </div>
      </main>
      
      <footer className="py-4"></footer>
    </div>
  )
}
