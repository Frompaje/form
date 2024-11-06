'use client'

import { SquareChevronUp } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import Link from 'next/link'
export const Header = () => {
  const [open, setOpen] = useState(false)

  function handleSwitchMenu() {
    setOpen(!open)
  }

  return (
    <header className="bg-neutral-900 text-white font-semibold p-1">
      <nav className="flex justify-between items-center p-1 md:justify-around">
        <Link href={'/'}>
          <h1 className="text-lg font-bold">
            Say<span className="text-emerald-400">Paje</span>
          </h1>
        </Link>

        <Button className="md:hidden" onClick={handleSwitchMenu}>
          {open ? (
            <SquareChevronUp className="rotate-0 ease-in-out duration-300" />
          ) : (
            <SquareChevronUp className="-rotate-180 ease-in-out duration-300" />
          )}
        </Button>
        <ul
          className={`md:gap-4  md:flex md:static md:justify-end md:w-auto absolute z-0 w-full bg-neutral-900 p-1 top-12 left-0 right-0 ${open ? 'block' : 'hidden'}
            `}
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-1 rounded">
            Home
          </li>
          <li className="hover:bg-neutral-950 cursor-pointer p-1 rounded duration-100">
            Movies
          </li>
          <li className="hover:bg-neutral-950 cursor-pointer p-1 rounded duration-100">
            Login
          </li>
        </ul>
      </nav>
    </header>
  )
}
