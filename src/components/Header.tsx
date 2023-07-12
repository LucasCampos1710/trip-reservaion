"use client"
import Image from "next/image"
import { signOut, signIn, useSession } from "next-auth/react"
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react"

export const Header = () => {
  const [menusIsOpen, setMenuIsOpen] = useState(false)
  const {status, data} = useSession()
  const handleLoginClick = () => signIn()
  const handleLogoutClick = () => {
    setMenuIsOpen(false)
    signOut()
  }
  const handleMenuClick = () => setMenuIsOpen(!menusIsOpen)

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between">
      <Image 
      width={183}
      height={32}
      src="/Logo.svg"
      alt="Trips Reservation"
      />

      {status === "unauthenticated" && (
        <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>Login</button>
      )}

      {status === "authenticated" && data.user &&(
        <div className="flex items-center gap-5 border-gray-300 border border-solid rounded-full p-2 px-3 relative">
            <AiOutlineMenu size={24} onClick={handleMenuClick} className="cursor-pointer"/>

            <Image height={40} width={40} src={data.user.image!} alt={data.user.name!} className="rounded-full shadow-md"/>

            {menusIsOpen && (
              <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                <button className="text-primary text-sm font-semibold" onClick={handleLogoutClick}>
                  Logout
                </button>
              </div>
            )}
        </div>
      )}
      </div>
  )
}