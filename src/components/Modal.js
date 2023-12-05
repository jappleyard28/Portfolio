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
    // if (name === "Calculator")
    // {
    //     slides = [];
    // }
    if (name === "Chess")
    {
        slides = [knightMov, pawnHigh, pawnMov, rookMov, startingPos];
    }
    // else if (name === "Chess")
    // {
    //     slides = [];
    // }
    else if (name === "Ecommerce Web Scraper")
    {
        slides = [image1, image2]
    }
    // else if (name === "Engineering for People Design Challenge")
    // {
    //     slides = []
    // }
    else if (name === "Gymbulum")
    {
        slides = [gym1, gym2]
    }
    else if (name === "Insurance Calculator")
    {
        slides = [insurCode, insurOutput]
    }
    // else if (name === "JPMorgan Virtual Experience")
    // {
    //     slides = []
    // }
    else if (name === "AI Chatbot")
    {
        slides = [uiPrev1, uiPrev2, uiPrev3];
    }
    // else if (name === "Portfolio Website")
    // {
    //     slides = [];
    // }
    // else if (name === "Racing Game")
    // {
    //     slides = [];
    // }
    // else if (name === "Snake")
    // {
    //     slides = [];
    // }
    

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
    
    const newLocal = " border-2 border-black px-4 text-center max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400";
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'> {/* whole screen */}
        
        
        <div className='flex bg-white min-w-[50%] max-w-[75%] min-h-[75%] m-auto px-4 relative group rounded-lg border-2 border-black align-middle'>
            {/* button */}
            <div className='flex justify-center items-center absolute top-0 right-0 h-16 w-16 m-2'>
                <AiOutlineCloseCircle onClick={onClose} size={50} className='cursor-pointer'/>
            </div>
            {/* image, title and description */}
            <div class="grid max-w-[75%] max-h-[75%] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 border-2 border-red-600 content-center">
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-2xl border-black shadow-2xl overflow-hidden">
                    <img src={slides[currentIndex]} alt={name} class="rounded-lg  border-blue-600" />
                </div>
                {/* title and description */}
                <div class="mr-auto place-self-center lg:col-span-7 border-2 border-black px-4">
                    <h1 class="flex justify-center font-title text-4xl">{name}</h1>
                    <p class={newLocal}>{description}</p>
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