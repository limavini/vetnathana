import React from "react"
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"

export const Header = () => {
  return (
    <div className="bg-green-100 p-6 px-16 flex justify-between">
      <div>LOGO</div>
      <ul className="flex flex-row space-x-12 > * text-lg items-center">
        <a
          href="https://www.google.com.br"
          className="flex items-center hover:text-green-500"
        >
          <div className="mr-1 hover:text-green-500">
            <FaWhatsapp size={23} />
          </div>
          (13) 981294449
        </a>
        <a className="hover:text-green-500">ATENDIMENTOS</a>
        <a className="hover:text-green-500">SOBRE</a>

        <div className="flex items-center space-x-3 > *">
          <a
            href="https://www.instagram.com/vetnathana"
            target="_blank"
            className="hover:text-green-500"
          >
            <FaInstagram size={23} />
          </a>
          <a
            href="https://www.facebook.com/vetnathana"
            target="_blank"
            className="hover:text-green-500"
          >
            <FaFacebook size={23} />
          </a>
        </div>
      </ul>
    </div>
  )
}
