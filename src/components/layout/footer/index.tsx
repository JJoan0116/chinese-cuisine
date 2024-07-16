const Footer = () => {
  const copyrightName = 'Joan'
  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 py-6 text-sm">
      <div className="mx-auto w-full px-6 flex justify-between items-center flex-row">
        <p>&copy; {copyrightName} 保留所有权利</p>
        <p>Designed in Joan</p>
      </div>
    </footer>
  )
}

export default Footer
