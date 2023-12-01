import React, {useState} from 'react'
import { createRoot } from 'react-dom/client';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";

import knightMov from '../images/Chess/knight movement.png'
import pawnHigh from '../images/Chess/pawn highlighting.png'
import pawnMov from '../images/Chess/pawn movement.png'
import rookMov from '../images/Chess/rook movement.png'
import startingPos from '../images/Chess/starting positions.png'

import image1 from '../images/EcomWebScrap/image1.png'
import image2 from '../images/EcomWebScrap/image2.png'

import gym1 from '../images/Gymbulum/image1.png'
import gym2 from '../images/Gymbulum/image2.png'

import insurCode from '../images/Insurance/insur_code.png'
import insurOutput from '../images/Insurance/insur_output.png'

import uiPrev1 from '../images/Manoshi/ui_prev1.png'
import uiPrev2 from '../images/Manoshi/ui_prev2.png'
import uiPrev3 from '../images/Manoshi/ui_prev3.png'


function Modal({open, onClose, name, description}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if(!open) return null

    var slides = [];
    if (name === "Chess")
    {
        slides = [knightMov, pawnHigh, pawnMov, rookMov, startingPos];
    }
    else if (name === "AI Chatbot")
    {
        slides = [uiPrev1, uiPrev2, uiPrev3];
    }
    else if (name === "Insurance Calculator")
    {
        slides = [insurCode, insurOutput]
    }
    else if (name === "Ecommerce Web Scraper")
    {
        slides = [image1, image2]
    }
    else if (name === "Gymbulum")
    {
        slides = [gym1, gym2]
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
        
        
        <div className='bg-white max-w-4xl max-h-min w-full m-auto py-16 px-4 relative group rounded-lg'>
            {/* close button */}
            <div className='flex justify-center items-center absolute top-0 right-0 h-16 w-16 m-2'>
                <AiOutlineCloseCircle onClick={onClose} size={50} className='cursor-pointer'/>
            </div>
            
            {/* image */}
            <img src={slides[currentIndex]} alt={name} class="w-full h-80 rounded-md object-scale-down border-4 border-red-600" />

            {/* title and description */}
            <div className='rounded-lg border-4 border-violet-600'>
                <div class="flex justify-center font-bold text-2xl border-4 border-indigo-600">{name}</div>
                
                <div className='border-2 border-black rounded-lg'>
                    <div class="text-center text-base mb-2">{description}</div>
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
        


        {/* <div class="max-w-xl text-left flex flex-col items-center justify-center md:p-4 md:border border-slate-800 dark:border-slate-600 rounded-xl">
            <div class="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md">
                <img src={slides[currentIndex]} alt={name} class="w-full h-80 rounded-md object-scale-down" />

                <div class="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                    <h1 class="text-left text-sm md:text-lg font-bold leading-normal">Space!</h1>
                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Modal
