//rafce
import React from 'react'
// import { CodeIcon } from "@heroicons/react/solid"
import { projects } from '../data'

const Projects = () => {
  return (
    <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'  >
        <div className='flex flex-col w-full mb-20'>
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white' >
            Aplicaciones que he construido
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
          Arranque mis estudios relacionados a la tecnología en la Facultad de matemática, astronomía y física ( FaMAF ) de la Universidad nacional de Córdoba.
          </p>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Pero fue mediante distintas plataformas online (Por ejemplo Youtube, Platzi, FreeCodeCamp, 
            udemy ), que adquiri los conocimientos para realizar los siguientes proyectos:
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="sm:w-1/2 w-100 p-4">
              <div className='flex relative' >
                <img src={project.image} alt="gallery"  className='absolute inset-0 w-full h-full object-cover object-center' />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100' >
                  <h2 className='traking-widest text-m title-font font-medium text-blue-800 mb-1' >
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-xl font-medium text-white mb-3' >
                    {project.title}
                  </h1>
                  <p className='leading-relaxed' >{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects