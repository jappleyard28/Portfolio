import React from 'react'

function Modal({open, onClose}) {
    if(!open) return null
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Modal
