import React from 'react'
import "./Project.css"
const Project = () => {
  return (
    <>
    <div className="project">
        <h2>Upload your Project</h2>
        <div className="form-area">
        <form action="">
            <div className="upload-area">
            <label htmlFor="project">Upload Project</label>
            <input type="file" id='project' />
            </div>
            <button>Convert</button>
        </form>
        <div className="display">
            <img src="" alt="" />
            <button>Download PDF</button>
        </div>
        </div>
       
    </div>
    </>
  )
}

export default Project