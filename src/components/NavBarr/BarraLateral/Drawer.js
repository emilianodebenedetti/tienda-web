import React from 'react'
import { Link } from 'react-router-dom'

const Drawer = () => {
  return (
    <>
        <div class="drawer">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
            </div> 
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>               
                </ul>
            </div>
        </div>
    </>
  )
}

export default Drawer