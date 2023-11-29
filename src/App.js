import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div class='p-20'>
      {/* <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Button</button>
        </div>
      </div> */}
      <Navbar class="navbar" />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
