import React from "react"
import "./styles.scss"

export const Benefit = ({ children, text }) => {
  return (
    <div className="flex justify-center flex-col items-center pb-3 item px-3">
      {children}
      <div className="pt-8 text-gray-900 font-semibold pb-3 text-center ">
        {text.toUpperCase()}
      </div>
      <div className="text-gray-500 text-center lg:px-12 sm:p-0">
        É imperioso ressaltar que o princípio suscetível que serve de base vela
        a enunciação sem que isso impeça a extração de gozo.
      </div>
    </div>
  )
}
