"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function CoursivQuizStep19() {
  const router = useRouter()
  const [selectedFields, setSelectedFields] = useState<string[]>([])

  // Lista de campos de interesse para a seleção
  const fields = [
    { icon: "🎨", name: "Graphic Design" },
    { icon: "✏️", name: "Content Creation" },
    { icon: "💻", name: "Web Development" },
    { icon: "🌟", name: "Digital Marketing" },
    { icon: "📱", name: "Social Media Management" },
    { icon: "🎞️", name: "Video Editing" },
    { icon: "📷", name: "Photography" },
    { icon: "🛒", name: "E-commerce" },
    { icon: "💼", name: "Consulting" },
  ]

  // Função para adicionar ou remover um campo da lista de selecionados
  const toggleField = (fieldName: string) => {
    setSelectedFields((prev) =>
      prev.includes(fieldName)
        ? prev.filter((f) => f !== fieldName)
        : [...prev, fieldName]
    )
  }

  const handleNext = () => {
    // Navega para o próximo passo, passando os campos selecionados como parâmetro
    router.push(`/step20?interestedFields=${selectedFields.join(",")}`)
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
          <div className="text-gray-600 font-semibold text-sm">15/20</div>
        </div>
        {/* Barra de Progresso */}
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "75%" }} // 15 de 20 é 75%
          ></div>
        </div>
      </header>

      {/* Conteúdo do Quiz */}
      <main className="flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-black mb-2">
            What other fields would you personally like to try yourself in?
          </h1>
          <p className="text-gray-500 mb-8">Choose all that apply</p>

          {/* Grid de Opções */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {fields.map((field, index) => (
              <button
                key={field.name}
                onClick={() => toggleField(field.name)}
                className={`w-full p-4 rounded-lg text-left flex items-center gap-4 transition-all duration-200 border-2 ${
                  selectedFields.includes(field.name)
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-transparent bg-gray-100 hover:bg-gray-200"
                } ${
                  // Centraliza o último item se o número total for ímpar
                  fields.length % 2 !== 0 && index === fields.length - 1
                    ? "md:col-span-2 md:w-1/2 mx-auto"
                    : ""
                }`}
              >
                <span className="text-2xl">{field.icon}</span>
                <span className="font-medium">{field.name}</span>
              </button>
            ))}
          </div>

          {/* Botão de Próximo Passo */}
          <div className="w-full max-w-md mx-auto">
            <button
              onClick={handleNext}
              className="w-full bg-violet-200 hover:bg-violet-300 text-violet-700 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
