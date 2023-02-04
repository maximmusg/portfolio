import React from 'react'
import { useState } from 'react';

const Contact = () => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id='contact' className='relative' >
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap' >
        <div className='bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex relative' >
          {/* <iframe 
            width="100%"
            height="100%"
            title='map'
            className='absolute inset-0'
            src="https://www.google.com/maps/embed/v1/place?q=mariano+mansilla+1286&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
            frameborder={0}
            marginHeight={0}
            marginWidth={0}
            style ={{filter: "opacity(0.7)"}}
          /> */}
          <div classNancme='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
            <div className='lg: w-full px-6 mt-4 lg:mt-0' >
              <h1 className='font-bold text-white title-font traking-widest text-3xl pb-4'>
                DATOS PERSONALES :
              </h1>

              <h2 className='title-font font-semibold text-white tranking-widest text-xl'>
                NOMBRE Y APELLIDO
              </h2>
              <p className='text-indigo-500 text-l'>
                Gomez Maximiliano Ezequiel
              </p>

              <h2 className='title-font font-semibold text-white traking-widest text-xl mt-4' >
                DNI
              </h2>
              <p className='leading-relaxed text-indigo-500' >38.502.162</p>

              <h2 className='title-font font-semibold text-white traking-widest text-xl mt-4' >
                LUGAR Y FECHA DE NACIMIENTO
              </h2>
              <p className='leading-relaxed text-indigo-500'>
                Cordoba, Argentina - 25 de Octubre de 1994
              </p>

              <h2 className='title-font font-semibold text-white tranking-widest text-xl mt-4'>
                CORREO ELECTRÓNICO
              </h2>
              <a className='text-indigo-500 text-l'>
                mmsg.2594@gmail.com
              </a>

              <h2 className='title-font font-semibold text-white traking-widest text-xl mt-4' >
                NUMERO DE TELÉFONO
              </h2>
              <p className='leading-relaxed text-indigo-500' >351-3740384</p>

              <h2 className='title-font font-semibold text-white tranking-widest text-xl mt-4'>
                DIRECCION
              </h2>
              <a className='text-indigo-500 text-l'>
                Mariano Mansilla 1286, Barrio: Colinas del Cerro
              </a>

              <h2 className='title-font font-semibold text-white traking-widest text-xl mt-4' >
                ESTADO CIVIL
              </h2>
              <p className='leading-relaxed text-indigo-500' >Soltero</p>

              

            </div>
          </div>
        </div>
        <form 
          // netlify
          name='contact'
          onSubmit={handleSubmit}
          className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
            ¡Contrátame!
          </h2>
          <p className='leading-relaxed mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis beatae fugit, sunt non laborum aliquid exercitationem est quis cumque, natus ut saepe minima consequatur officiis perferendis eaque asperiores tempora.
          </p>
          <div className='relative mb-4'>
            <label htmlFor="name" className='leading-7 text-sm text-gray-400'>
              Nombre
            </label>
            <input 
              type="text" 
              id='name' 
              name='name' 
              onChange={(e) => setName(e.target.value)}
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div>
            <label htmlFor="email" className='leading-7 text-sm text-gray-400'>
              Correo electrónico
            </label>
            <input 
              type="email" 
              id='email' 
              name='email' 
              onChange={(e) => setEmail(e.target.value)}
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
          </div>
          <div className='relative mb-4'>
            <label htmlFor="message" className='leading-7 text-sm text-gray-400'>
              Mensaje
            </label>
            <textarea 
              name="message" 
              id="message" 
              onChange={(e) => setMessage(e.target.value)}
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transitions-colors duration-200 ease-in-out '
            />
          </div>
          <button 
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            Enviar
          </button>
        </form>
      
      </div>
    </section>
  )
  }

export default Contact