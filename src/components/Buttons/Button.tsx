import React, { FC } from 'react'

type Props = {
  color:string
  bgColor:string
  text:string
  borderRadius:string
  size: string
}

export const Button: FC<Props> = ({
  color,
  bgColor,
  text,
  borderRadius,
  size,
}) => {
  const a = 1

  return (
    <button
      type="button"
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{ backgroundColor: bgColor, color, borderRadius }}
    >
      {text}
    </button>
  )
}
