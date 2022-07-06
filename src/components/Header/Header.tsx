import React, { FC } from 'react'

type Props = {
  category: string
  title: string
}

export const Header: FC<Props> = ({
  category,
  title,
}) => {
  const a = 1

  return (
    <div className="mb-10">
      <p className="text-gray-400">
        {category}
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  )
}
