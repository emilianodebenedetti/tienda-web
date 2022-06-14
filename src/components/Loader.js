import React from 'react'

export const Loader = () => {
 
    return (
        <div className="flex items-center justify-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded" role="status">
                <span className="hidden">Loading...</span>
            </div>
        </div>
  )
}

export default Loader