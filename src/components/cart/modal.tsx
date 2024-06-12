import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <ShoppingCartIcon className="h-6 transition-all ease-in-out hover:scale-110 " />
      </button>

      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div
                      className="absolute right-6 top-6 -ml-8 flex sm:-ml-10 sm:pr-4"
                      onClick={() => setIsOpen(false)}
                    >
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span className="absolute -inset-2.5"></span>
                        <span className="sr-only">关闭</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="px-4 sm:px-6">
                      <h2
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="slide-over-title"
                      >
                        购物车
                      </h2>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {!cart || cart.length === 0 ? (
                        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                          <ShoppingCartIcon className="h-16" />
                          <p className="mt-6 text-center text-2xl font-bold">
                            您的购物车空空如也~
                          </p>
                        </div>
                      ) : (
                        <div>111</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CartModal
