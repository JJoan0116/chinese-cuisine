import Image from 'next/image'

import panda from '@/images/panda.svg'

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image width={40} height={40} alt="panda" src={panda} />

        <span className="h-4 ml-2 leading-10">Chinese Cuisine</span>
      </div>
      <div>1</div>

      <div>3</div>
    </nav>
  )
}

export default Header
