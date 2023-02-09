import React from 'react'

const Curriculum = () => {

    const curriculumUrl = 'https://drive.google.com/file/d/154i5azA2UUkjFvzZvrjdV42dN-Vow3Fo/view?usp=share_link';

  return (
    <div className='container text-center mx-auto px-10 py-10 lg:px-40'>
        <a 
            target="_blank"
            href={curriculumUrl}
            className='text-white title-font font-bold sm:text-4xl text-3xl bg-blue-800 border-0 py-3 px-8 rounded focus:outline-none hover:bg-blue-900' 
            rel="noreferrer noopener"
        >
            Descarga aqui mi Curriculum
        </a>
    </div>
  )
}

export default Curriculum