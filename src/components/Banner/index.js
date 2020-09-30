import React from "react"
import "./styles.scss"
import { Header } from "../Header/"
import { Wave } from "../Wave"

export const Banner = () => {
  return (
    <>
      <Header />
      <div className="px-16 bg-green-100 relative">
        <div className="bg-green-100 banner relative flex flex-row  flex-shrink-0 overflow-hidden">
          <div className="text pt-10">
            <span className="text-6xl main block font-bold pb-12 leading-snug">
              O que temos que ter sempre em mente é que a adoção de políticas.
            </span>
            <span className="secondary text text-2xl">
              É importante questionar o quanto a contínua expansão de nossa
              atividade ainda não demonstrou convincentemente.
            </span>
            <button
              type="button"
              className="block mt-12 bg-green-600 text-white px-4 py-4"
            >
              AGENDE UMA CONSULTA AGORA
            </button>
          </div>
        </div>
        <Wave />
      </div>
    </>
  )
}
