import { useSearchParams } from 'next/navigation'

const Search = () => {
  const searchParams = useSearchParams()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const val = e.target as HTMLFormElement
    const search = val.search as HTMLInputElement

    const params = new URLSearchParams(searchParams.toString())
    if (search.value) {
      params.set('q', search.value)
    } else {
      params.delete('q')
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-max-[550px]">
      <input
        placeholder="回车搜索"
        type="text"
        name="search"
        key={searchParams?.get('q')}
        defaultValue={searchParams?.get('q') || ''}
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
    </form>
  )
}

export default Search
