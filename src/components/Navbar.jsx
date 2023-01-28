import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-gray-800 md:sticky top-0 z-10' >
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center' >
        <a href="#about" className='ml-3 text-xl' >
          Gomez Maximiliano Ezequiel
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center' >
          <a href="#projects" className='mr-5 hover:text-blue-800'>
            Trabajos anteriores
          </a>
          <a href="#skills" className='mr-5 hover:text-blue-800'>
            Habilidades
          </a>
          <a href="#contact" className='inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus-outline-none  hover:bg-blue-800 hover:text-white rounded text-base mt-4 md: mt-0'>
            ¡Contrátame!
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar