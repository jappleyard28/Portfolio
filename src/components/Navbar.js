import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../images/JackAppleyardCV.pdf'

function Navbar() {
  return (
    <div>
        <nav class='flex flex-wrap text-xl p-5 text-gray-900 place-content-end'>
            <ul className='flex'>
                <li>
                    <Link to="/" class="px-8 hover:text-gray-400">Home</Link>
                </li>
                <li>
                    <Link to="/about" class='px-8 hover:text-gray-400'>About</Link>
                </li>
                <li>
                    <Link to="/education" class='px-8 hover:text-gray-400'>Education</Link>
                </li>
                <li>
                    <Link to="/projects" class='px-8 hover:text-gray-400'>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" class='px-8 hover:text-gray-400'>Contact</Link>
                </li>
                <li>
                    <a href={resume} download="JackAppleyardCV" class='px-8 hover:text-gray-400'>CV</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
