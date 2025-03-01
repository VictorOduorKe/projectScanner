import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Home.css'
import Project from '../Project/Project'
const Home = () => {
  return (
    <>
        <NavBar/>
        <div className="home">
        <div className="content">
        <div className="instruction">
            <h1>READ THE INSTRUCTIONS CAREFULLY  BEFORE UPLOADING</h1>
            <ul>
                <li>1. Only jpg, jpeg and png allowed</li>
                <li>2. Only jpg, jpeg and png allowed</li>
                <li>3. Only jpg, jpeg and png allowed</li>
                <li>4. Only jpg, jpeg and png allowed</li>
            </ul>
        </div>
          <Project/>
        </div>
        </div>
       
    </>
  )
}

export default Home