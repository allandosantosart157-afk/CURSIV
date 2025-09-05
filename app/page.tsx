"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoursivQuiz() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        {/* Espaçador para centralizar a logo */}
        <div className="w-6 h-6" />
        <Image
          src="/CURSIV/CURSIV-HOME/logo.svg"
          alt="Coursiv Logo"
          width={120}
          height={40}
        />
        <Menu className="w-6 h-6 text-gray-600" />
      </header>

      {/* Badges */}
      <div className="flex flex-row gap-4 justify-center items-stretch mt-8 mb-8">
        {/* Badge 1 com Ícone */}
        <div className="flex-1 border border-gray-200 rounded-lg p-2 sm:p-3 flex items-center justify-center gap-2 sm:gap-3">
          <Image
            src="/CURSIV/CURSIV-HOME/Users-choice.webp"
            alt="Users' Choice Icon"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <div className="text-left">
            <p className="text-xs text-gray-500 font-bold leading-tight">
              700K+ USERS’ CHOICE
            </p>
            <p className="text-sm text-gray-800 font-semibold leading-tight">
              Learned new skills
            </p>
          </div>
        </div>
        {/* Badge 2 com Ícone */}
        <div className="flex-1 border border-gray-200 rounded-lg p-2 sm:p-3 flex items-center justify-center gap-2 sm:gap-3">
          <Image
            src="/CURSIV/CURSIV-HOME/Frame-rated-on-trustpilot.webp"
            alt="Trustpilot Star Icon"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <div className="text-left">
            <p className="text-xs text-gray-500 font-bold leading-tight">
              RATED ON TRUSTPILOT
            </p>
            <p className="text-sm text-gray-800 font-semibold leading-tight">
              4.5 Satisfaction Score
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        {/* Image Section */}
        <div className="relative mb-8 w-full max-w-2xl">
          <img
            src="/CURSIV/CURSIV-HOME/ed-challenge-1.webp"
            alt="Man smiling in front of a 28-day challenge calendar"
            className="w-full h-auto"
          />
        </div>

        {/* Challenge Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 tracking-normal leading-tight">
            28-DAY AI CHALLENGE
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wider">
            HAVE YOU EVER USED AI?
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md">
          <Link href="/step2" className="flex-1">
            <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-5 px-6 rounded-lg text-base sm:text-lg">
              YES ›
            </Button>
          </Link>
          <Link href="/step2" className="flex-1">
            <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold py-5 px-6 rounded-lg text-base sm:text-lg">
              NO ›
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-xs max-w-md">
          <p className="mb-2">
            By proceeding, you agree with{" "}
            <Link href="/terms" className="underline">
              Terms and Conditions
            </Link>
            ,{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            ,{" "}
            <Link href="/subscription" className="underline">
              Subscription Terms
            </Link>
          </p>
          <p>Coursiv Limited, Limassol, Cyprus</p>
        </div>
      </div>
    </div>
  )
}
