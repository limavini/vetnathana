import React from "react"
import { AiOutlineHome } from "react-icons/ai"

export const Benefit = ({ children, text }) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="pb-3"></div>

      <div>{text}</div>
    </div>
  )
}
