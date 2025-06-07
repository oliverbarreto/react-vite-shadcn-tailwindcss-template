import { useState } from 'react'
import './App.css'

import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-fuchsia-950 mt-[100px]">Vite + React + Shadcn UI + Tailwind CSS Initial Templatea </h1>
        <h3 className="text-2xl font-bold my-2">made with ❤️ by Oliver Barreto</h3>
        <Button className="hover:bg-fuchsia-950 text-white mt-4" onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
