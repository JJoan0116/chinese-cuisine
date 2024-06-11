import { Suspense } from 'react'

const MobileMenu = () => {
  return (
    <nav className="flex justify-between items-center">
      <Suspense fallback={null}>
        <div>11</div>
      </Suspense>
      <div>2</div>
      <div>3</div>
    </nav>
  )
}

export default MobileMenu
