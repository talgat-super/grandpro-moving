'use client'
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

type Theme = 'dark' | 'light'

interface ThemeCtxValue {
  theme: Theme | undefined
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeCtxValue>({ theme: undefined, setTheme: () => {} })

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
}: {
  children: React.ReactNode
  defaultTheme?: Theme
}) {
  const [theme, setThemeState] = useState<Theme | undefined>(undefined)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const initial: Theme = stored === 'light' ? 'light' : defaultTheme
    setThemeState(initial)
    applyTheme(initial)
    document.cookie = `theme=${initial}; path=/; max-age=31536000; SameSite=Lax`
  }, [defaultTheme])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    localStorage.setItem('theme', t)
    document.cookie = `theme=${t}; path=/; max-age=31536000; SameSite=Lax`
    applyTheme(t)
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

function applyTheme(theme: Theme) {
  const cl = document.documentElement.classList
  cl.remove('dark', 'light')
  cl.add(theme)
}

export function useTheme() {
  return useContext(ThemeContext)
}
