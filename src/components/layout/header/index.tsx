'use client'

import Image from 'next/image'

import panda from '@/images/panda.svg'
import Search from './search'
import Cart from '@/components/cart'

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex">
        <Image width={40} height={40} alt="panda" src={panda} />
        <h1 className="ml-2 leading-10">Chinese Cuisine</h1>
      </div>
      <Search />
      <Cart />
    </nav>
  )
}

export default Header
