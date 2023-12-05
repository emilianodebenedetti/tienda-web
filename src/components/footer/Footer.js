import React from 'react'

const Footer = () => {
  return (
    <>    
          <div className='static mt-auto'> {/* relative */}
            <footer className="bottom-0 mb-0 footer footer-center p-10 bg-black mt-20 text-black ">{/* absolute inset-x-0 bottom-0 */}
                <div className="grid grid-flow-col gap-4 text-white">
                    <a className="link link-hover" href='https://www.google.com/'>Sobre nosotros</a> 
                    <a className="link link-hover" href='https://api.whatsapp.com/send?phone=59898574847'>Contáctanos</a> 
                </div> 
                <div>
                    <div className="grid grid-flow-col gap-4 text-white">
                      <a href='https://www.instagram.com/universall_fitness_/ ' target="_blank">
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="30"  height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg></button> 
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=59898574847" target="_blank">
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="30" href='https://www.google.com/' height="30" viewBox="0 0 512 512"><path fill="currentColor" fillRule="evenodd" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1ZM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52Zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48Z"/></svg></button>
                      </a>
                    </div>
                </div> 
                <div className="text-white">
                    <p>Copyright © 2023 - Todos los derechos reservados by unifitlove.com.uy</p>
                </div>
            </footer>
          </div>
    </>
  )
}

export default Footer