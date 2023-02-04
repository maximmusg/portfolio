import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center' >
        <div className='lg: flex-frow md:w-1/2 lg: pr-24 md:pr-16 flex flex-col md:items-start'>
          <h1 className='title-font sm:text-4xl text-3xl mb-8 font-bold text-white' >
            Hola, Soy Maxi.
            <br className=' lg: inline-block' /> asg dadadafasfasgdgasfgas aplicaciones web.
          </h1>
          <p className='mb-8 leading-relaxed'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto numquam deserunt beatae. Dolores, molestiae? Debitis commodi assumenda veritatis perspiciatis, esse animi laudantium recusandae iure mollitia porro, corrupti rerum maxime.
          </p>
          <div className='flex justify-center'>
            <a href="#contact" className='inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg'>
              Trabaja Conmigo
            </a>
            <a href="#projects" className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg' >
              Mira mis trabajos y proyectos 
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6' >
          <img 
            className='object-cover object-center rounded'
            src="./auto.png" 
            alt="Mi fotografia" 
          />
        </div>
      </div>
    </section>
  )
}

export default About