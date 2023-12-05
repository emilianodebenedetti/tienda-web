import React from 'react'

const Footer = () => {
  return (
    <>    
          <div className='static mt-auto'> {/* relative */}
            <footer className="bottom-0 mb-0 footer footer-center p-10 bg-black mt-20 text-black ">{/* absolute inset-x-0 bottom-0 */}
                <div className="grid grid-flow-col gap-4 text-white">
                    <a className="link link-hover" href='https://www.google.com/'>Sobre nosotros</a> 
                    <a className="link link-hover" href='https://www.google.com/'>Contáctanos</a> 
                </div> 
                <div>
                    <div className="grid grid-flow-col gap-4 text-white">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg></button> 
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" href='https://www.google.com/' height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></button>
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