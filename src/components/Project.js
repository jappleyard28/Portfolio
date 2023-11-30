import React, {useState} from 'react'
import Modal from './Modal'

function Project(props) {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div class="border-2 border-black mx-7">
        <Modal name={props.title} description={props.description} open={openModal} onClose={()=> setOpenModal(false)}/>
        <div class="bg-white rounded-lg">
            <div class="border-2 border-red-400 p-4 h-full">
              <div class="flex justify-center font-bold text-xl mb-2">{props.title}</div>
              <p class="flex justify-center font-bold text-base mb-2">{props.tech_stack}</p>
              {/* <p class="text-gray-700 text-base">{props.description}</p> */}
            </div>
            <div class="flex justify-center items-center border-2 border-purple-500 h-50 bottom-0">
              <button onClick={() => setOpenModal(true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
            </div>
          </div>
    </div>
  )
}

export default Project