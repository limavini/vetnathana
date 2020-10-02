import React from "react"
import { Benefit } from "../Benefit"
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMedicineBox,
} from "react-icons/ai"
import { GiTurtle } from "react-icons/gi"

export const Benefits = () => {
  const color = "#38a169"

  return (
    <div className="bg-white h-screen px-16 py-10">
      <div className="flex justify-center">
        <span className="text-gray-700 flex justify-center text-2xl pb-24 text-center w-6/12">
          Segundo Heidegger, a infinita diversidade da realidade única nos
          obriga à análise das condições epistemológicas e cognitivas exigidas
        </span>
      </div>
      <div className="flex flex-wrap w-full flex-row">
        <Benefit text="Capitais Internacionais">
          <AiOutlineHome size={80} fill={color} />
        </Benefit>
        <Benefit text="Métodos Utilizados ">
          <AiOutlineMedicineBox size={80} fill={color} />
        </Benefit>
        <Benefit text="Avaliações">
          <GiTurtle size={80} fill={color} />
        </Benefit>
        <Benefit text="Mundo">
          <AiOutlineHeart size={80} fill={color} />
        </Benefit>
      </div>
    </div>
  )
}
