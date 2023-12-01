import React, {useState} from 'react'
import Modal from './Modal'
import image1 from '../images/EcomWebScrap/image1.png'

function Project(props) {
  const [openModal, setOpenModal] = useState(false)
  return (

    <div class="container mx-auto p-6 grid grid-cols-1 gap-4 border-2 rounded-xl border-black bg-indigo-200">
      <Modal name={props.title} description={props.description} open={openModal} onClose={()=> setOpenModal(false)}/>
      <div class="col-span-1 flex flex-col p-4">
        <h2 class="mb-2 font-bold text-2xl text-center">{props.title}</h2>
        {/* going to use this for tech stack tags which will be a similar shape to the button rn */}
        {/* <div class="flex flex-wrap mt-auto pt-3 text-xs">
          <p class="mr-2 mb-2">Tag #1</p>
          <p class="mr-2 mb-2">Tag #2</p>
        </div> */}
        <p class="text-md">{props.tech_stack}</p>
        <div class="flex justify-center flex-wrap mt-auto pt-3 text-md">
          <button onClick={() => setOpenModal(true)} class="bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-1 px-4 rounded-full mt-auto">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Project