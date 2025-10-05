"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Globe } from "lucide-react"

export default function LoadingScreen() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-[url('/blurred-urban-cityscape-night.jpg')] bg-cover bg-center opacity-30 blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4">
        {/* Logo */}
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/30">
          <Globe className="h-20 w-20 text-cyan-400" strokeWidth={1.5} />
        </div>

        {/* Main Title with gradient */}
        <h1 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          City Twin LATAM
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 text-center font-light">
          Plataforma de Gemelos Digitales Urbanos
        </p>

        {/* Features */}
        <div className="flex items-center gap-6 text-sm md:text-base text-gray-400">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>SuperMap</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>Glodon 5D</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>IA Urban Lab</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-3 py-8">
          <span className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse [animation-delay:0ms]" />
          <span className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse [animation-delay:150ms]" />
          <span className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse [animation-delay:300ms]" />
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 pt-4">Powered by 51WORLD Technology</p>
      </div>
    </div>
  )
}
