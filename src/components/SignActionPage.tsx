import React from "react"

interface Props {
  children: React.ReactNode
}

export function SignActionPage({children}: Props) {
  return(
    <main className="h-screen flex justify-center items-center bg-slate-400">
      <section className="w-[90%] max-w-3xl bg-slate-500 p-6 rounded-xl">
        <h1 className="text-center text-white text-4xl font-bold mb-4">QUICK NOTES</h1>
        {children}
      </section>
    </main>
  )
}