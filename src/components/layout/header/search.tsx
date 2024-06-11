import Image from 'next/image'

import panda from '@/images/panda.svg'
import { useSearchParams } from 'next/navigation'

const Header = () => {
  const searchParams = useSearchParams()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const value = e.target
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Search for products..."
        type="text"
        name="search"
        key={searchParams?.get('q')}
        defaultValue={searchParams?.get('q') || ''}
      />
    </form>
  )
}

export default Header
