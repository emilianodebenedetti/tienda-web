import React from 'react'

const Loader = () => {
 
    return (
        <div class="flex items-center justify-center">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded" role="status">
                <span class="hidden">Loading...</span>
            </div>
        </div>
  )
}

export default Loader