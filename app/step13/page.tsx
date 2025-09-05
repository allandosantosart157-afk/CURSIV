"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function CoursivQuizStep13() {
  const router = useRouter()
  const [selectedTools, setSelectedTools] = useState<string[]>([])

  // Lista de ferramentas de IA para a seleção
  const aiTools = [
    { icon: "🤔", name: "I'm new to AI tools" },
    { icon: "🎨", name: "Midjourney" },
    { icon: "💻", name: "Google Gemini" },
    { icon: "🦦", name: "Otter.ai" },
    { icon: "🎧", name: "AIVA" },
    { icon: "👨‍🎨", name: "DALL-E" },
    { icon: "🙂", name: "Jasper" },
    { icon: "👨‍✈️", name: "Copilot" },
    { icon: "🎠", name: "OpenAI Playground" },
  ]

  // Função para adicionar ou remover uma ferramenta da lista de selecionados
  const toggleTool = (toolName: string) => {
    setSelectedTools((prev) =>
      prev.includes(toolName)
        ? prev.filter((t) => t !== toolName)
        : [...prev, toolName]
    )
  }

  const handleNext = () => {
    // Navega para o próximo passo, passando as ferramentas selecionadas como parâmetro
    router.push(`/step14?familiarTools=${selectedTools.join(",")}`)
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
          <div className="text-gray-600 font-semibold text-sm">10/20</div>
        </div>
        {/* Barra de Progresso */}
        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-[#4F46E5] h-1"
            style={{ width: "50%" }} // 10 de 20 é 50%
          ></div>
        </div>
      </header>

      {/* Conteúdo do Quiz */}
      <main className="flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-black mb-2">
            What other AI tools are you already familiar with?
          </h1>
          <p className="text-gray-500 mb-8">Choose all that apply</p>

          {/* Grid de Opções */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {aiTools.map((tool) => (
              <button
                key={tool.name}
                onClick={() => toggleTool(tool.name)}
                className={`w-full p-4 rounded-lg text-left flex items-center gap-4 transition-all duration-200 border-2 ${
                  selectedTools.includes(tool.name)
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-transparent bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-medium">{tool.name}</span>
              </button>
            ))}
          </div>

          {/* Botão de Próximo Passo */}
          <div className="w-full max-w-md mx-auto">
            <button
              onClick={handleNext}
              className="w-full bg-violet-200 hover:bg-violet-300 text-violet-700 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              NEXT STEP
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
