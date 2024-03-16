import React from 'react'
import AddProjects from './AddProjects'

function MyProjects() {
  return (
    <div className='card shadow p-3 mt-3'>
      <div className="d-flex">
        <h2>My Projects</h2>
        <div className="ms-auto">
          <AddProjects/>
        </div>
      </div>

      <div className="mt-4">
        {/* collection of projects */}

        <div className="border d-flex align-items-center rounded p-2">
          <h5>Project Title</h5>
          <div className="icon ms-auto">
            <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
            <button className='btn'><i class="fa-brands fa-github"></i></button>
            <button className='btn'><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <p className="text-danger fw-bolder fs-5">No Projects Uploaded Yer !!!</p>
      </div>

    </div>
  )
}

export default MyProjects