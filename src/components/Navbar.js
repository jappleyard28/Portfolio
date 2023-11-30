import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../images/JackAppleyardCV.pdf'

function Navbar() {
  return (
    <div>
        <nav class='flex flex-wrap text-xl p-5 text-gray-900 place-content-end'>
            <ul className='flex'>
                <li>
                    <Link to="/" class="home px-8 hover:text-gray-500">Home</Link>
                </li>
                <li>
                    <Link to="/about" class='px-8 hover:text-gray-500'>About</Link>
                </li>
                <li>
                    <Link to="/education" class='px-8 hover:text-gray-500'>Education</Link>
                </li>
                <li>
                    <Link to="/projects" class='px-8 hover:text-gray-500'>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" class='px-8 hover:text-gray-500'>Contact</Link>
                </li>
                <li>
                    <a href={resume} download="JackAppleyardCV" class='px-8 hover:text-gray-500'>CV</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
