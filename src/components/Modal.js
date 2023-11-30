import React, {useState} from 'react'
import { createRoot } from 'react-dom/client';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GrClose } from "react-icons/gr";

import knightMov from '../images/Chess/knight movement.png'
import pawnHigh from '../images/Chess/pawn highlighting.png'
import pawnMov from '../images/Chess/pawn movement.png'
import rookMov from '../images/Chess/rook movement.png'
import startingPos from '../images/Chess/starting positions.png'

import uiPrev1 from '../images/Manoshi/ui_prev1.png'
import uiPrev2 from '../images/Manoshi/ui_prev2.png'
import uiPrev3 from '../images/Manoshi/ui_prev3.png'

function Modal({open, onClose, name, description}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if(!open) return null

    var slides = [];
    if (name === "Chess")
    {
        console.log(description)
        slides = [knightMov, pawnHigh, pawnMov, rookMov, startingPos];
    }
    else if (name === "AI Chatbot")
    {
        slides = [uiPrev1, uiPrev2, uiPrev3];
    }

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'> {/* whole screen */}
        <div className='bg-indigo-200 max-w-[1000px] h-[780px] w-full m-auto py-16 px-4 relative group'> {/* carousel outer */}
            {/* close button */}
            <div className='flex justify-center items-center absolute top-0 right-0 h-16 w-16 border-2 border-red-400'>
                <GrClose onClick={onClose} size={50} className='cursor-pointer'/>
            </div>
            <div class="flex justify-center font-bold text-4xl py-5">{name}</div>
            
            {/* images */}
            <div className='border-2 border-red-600 mx-20'>
                <img src={slides[currentIndex]} alt={name} class="w-full h-80 rounded-md object-scale-down" />
                {/* description */}
                <div className='border-2 border-indigo-700 py-5'>
                    <div class="text-center text-xl mb-2">{description}</div>
                </div>
            </div>

            {/* arrows */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <IoIosArrowBack size={50}  onClick={prevSlide} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <IoIosArrowForward size={50} onClick={nextSlide} />
            </div>
        </div>
    </div>
  )
}

export default Modal
