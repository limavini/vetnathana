import React from "react"
import "./styles.scss"
import dog from "../../images/dog.png"
import { Header } from "../Header/"

export const Banner = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 banner flex flex-row px-16 flex-shrink-0 overflow-hidden items-center">
        <div className="text">
          <span className="text-5xl main block text-green-600 font-bold">
            O que temos que ter sempre em mente é que a adoção de políticas.
          </span>
          <span className="secondary text text-2xl text-green-600">
            É importante questionar o quanto a contínua expansão de nossa
            atividade ainda não demonstrou convincentemente.
          </span>
        </div>
        <div className="dog-container">
          <img src={dog} alt="Dog" className="w-full" />
        </div>
      </div>
    </>
  )
}
