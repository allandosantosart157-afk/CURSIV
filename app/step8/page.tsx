"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CoursivQuizStep8() {
  const router = useRouter()

  const handleContinue = () => {
    // Navega para a próxima página do quiz
    router.push(`/step9`)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col p-4">
      {/* Header - Apenas a logo centralizada */}
      <header className="w-full">
        <div className="flex items-center justify-center py-4">
          <Image
            src="/CURSIV/CURSIV-STEP2/logo.svg"
            alt="Coursiv Logo"
            width={120}
            height={40}
          />
        </div>
      </header>

      {/* Conteúdo Principal Reordenado */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="w-full max-w-md"> {/* Container para controlar a largura */}
          
          {/* 1. Imagem */}
          <div className="mb-8">
            <Image
              src="/CURSIV/CURSIV-STEP6/Ed1-1.webp"
              alt="Man using a phone in a snowy mountain landscape"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          {/* 2. Título */}
          <h1 className="text-3xl font-bold text-black mb-4">
            Worry no more! We will help you to gain your confidence back
          </h1>
          
          {/* 3. Texto */}
          <p className="text-gray-600 text-base leading-relaxed">
            We helped more than 700,000 of adults to master AI and can help you too. Our challenge is backed by thousands hours of research and content carefully crafted to your needs and skills!
          </p>
        </div>
      </main>

      {/* Botão de Continuar */}
      <footer className="flex justify-center py-8">
        <div className="w-full max-w-md">
          <button
            onClick={handleContinue}
            className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors"
          >
            CONTINUE
          </button>
        </div>
      </footer>
    </div>
  )
}
