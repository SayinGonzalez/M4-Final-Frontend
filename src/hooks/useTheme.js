//  Hook con la lógica relacionada al cambio de tema claro/oscuro

import { useEffect, useState } from "react";

export default function useTheme() {

  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    )
  })
  console.log(theme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    toggleTheme
  }
}

/* const [theme, setTheme] = useState(() => {
return (
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
)
})

console.log('theme ->', theme)

const toggleDark = () => {
const isDark = document.documentElement.classList.toggle('dark');
console.log('Fn toggleDark isDark ->', isDark)
console.log('Fn toggleDark theme ->', theme)
isDark ? setTheme('dark') : setTheme('light')
} */