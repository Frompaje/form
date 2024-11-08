'use client'

import { Clapperboard, House, LogIn, SquareChevronUp } from 'lucide-react'
import { Button } from '../ui/button'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const listNav = [
  {
    name: 'Home',
    icon: <House size={22} />,
    href: '/youtube',
  },
  { name: 'Movies', icon: <Clapperboard size={22} />, href: '/youtube' },
  { name: 'Login', icon: <LogIn size={22} />, href: '/youtube' },
]

export const Header = () => {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  function handleSwitchMenu() {
    setOpen(!open)
  }

  const clickTargetHeader = (e: MouseEvent) => {
    if (
      headerRef.current &&
      !(e.target instanceof Node && headerRef.current.contains(e.target))
    ) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickTargetHeader)
    return () => {
      document.removeEventListener('mousedown', clickTargetHeader)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="bg-neutral-900 text-white font-semibold p-1 relative z-50"
    >
      <nav className="flex justify-between items-center p-1 md:justify-around">
        <Link href={'/'}>
          <h1 className="text-lg font-bold">
            Say<span className="text-emerald-400">Paje</span>
          </h1>
        </Link>
        <Button className="md:hidden" onClick={handleSwitchMenu}>
          <SquareChevronUp
            className={cn(
              'text-emerald-400 rotate-0 ease-in-out duration-300',
              open && '-rotate-180',
            )}
          />
        </Button>

        <ul
          className={cn(
            `md:gap-4  md:flex md:static md:justify-end md:w-auto absolute z-0 w-full bg-neutral-900 border-b-4 border-emerald-500 p-1 top-12 left-0 right-0 opacity-0 duration-300 rounded-md hidden`,
            open && 'block opacity-100  scale-15000 ease-in-out duration-300',
          )}
        >
          {listNav.map((value) => (
            <Link href={value.href} key={value.name}>
              <li className="hover:bg-emerald-500 ease-in-out duration-200 cursor-pointer p-1 rounded flex gap-2 items-center group">
                <span className="group-hover:animate-shake">{value.icon}</span>
                {value.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}
