import React from "react"
import { Benefit } from "../Benefit"
import { AiOutlineHome } from "react-icons/ai"
export const Benefits = () => {
  return (
    <div className="bg-white h-screen px-16 py-10">
      <span className="text-gray-700 flex justify-center text-2xl pb-10">
        OFERECEMOS O MELHOR SERVIÇO PARA SEU PET
      </span>

      <div className="flex justify-around">
        <Benefit text="Atendimento a Domicílio">
          <AiOutlineHome size={80} fill="#cbd5e0" />
        </Benefit>
        <Benefit />
        <Benefit />
        <Benefit />
      </div>
    </div>
  )
}
