import React from 'react'

type Props = {
  children: React.ReactNode
}

const HText = ({ children }: Props) => {
  return (
    <h2 className="basis-3/5 font-display text-3xl font-semibold leading-tight text-slate-900 dark:text-zinc-100 md:text-4xl">
      {children}
    </h2>
    )
}

export default HText