const Item = ({ size, item, priority }) => {
  return <div>111</div>
}

const ThreeItemGrid = () => {
  const list = []
  const [first, second, third] = list
  return (
    // <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">

    <section className="mx-auto grid gap-4 px-4 pb-4">
      <Item size="full" item={first} priority={true} />
    </section>
  )
}
