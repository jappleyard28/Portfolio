import grad from '../images/grad.jpg'

const About = () => {
    return (
        <div>
            {/* <h1 class='flex justify-center font-sans text-5xl mb-10'>About me</h1> */}
            {/* <div class='border-2 border-red-600 h-full'>
                <div>
                    <img src={grad} alt="Me" class="w-full h-80 rounded-md object-scale-down border-2 border-black" />
                </div>
                <p> I am an enthusiastic and highly motivated individual, and I am a recent Computing Science graduate from the University of East Anglia. Since first 
                    encountering Computer Science at GCSE and A Level, I've enjoyed programming projects both independently and as part of coursework.</p>
            </div> */}
            {/* <h2>Interests</h2>
            <h3>Languages</h3>
            <ul>
                <li>English - Fluent</li>
                <li>Spanish - Fluent</li>
                <li>German - Intermediate</li>
                <li>Italian - Beginner</li>
            </ul> */}
            <section>
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="flex justify-center max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">About me</h1>
                        <p class="text-center max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am an enthusiastic and highly motivated individual, 
                        and I am a recent Computing Science graduate from the University of East Anglia. Since first encountering Computer Science at GCSE and A Level, I've enjoyed 
                        programming projects both independently and as part of coursework</p>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
                        <img src={grad} alt="Me" class="rounded-lg" />
                    </div>                
                </div>
            </section>
            <section>
                
            </section>
        </div>
    );
};
  
export default About;