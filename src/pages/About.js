import grad from '../images/grad.jpg'
import toby from '../images/toby_computer.jpg'
import ai_chatbot from '../images/ai_chatbot.png'

const About = () => {
    return (
        <div>
            <h1 class="flex justify-center text-5xl pt-10">About me</h1>
            <section>
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h2 class='flex justify-center text-4xl pt-10 pb-5'>Background</h2>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am a dedicated individual with a diverse background 
                        that influences my perspective and work. My Peruvian heritage has instilled in me a deep appreciation for diversity and a unique approach to problem-solving. 
                        My passion for programming is fueled by a profound interest in problem-solving and the boundless creativity involved in developing innovative solutions. With 
                        a disciplined mindset and a focus on innovation, I approach projects with creativity and resilience. Whether navigating complex algorithms or crafting 
                        efficient code, I thrive in the finding a balance between logic and creativity.</p>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
                        <img src={grad} alt="Me" class="rounded-lg" />
                    </div>                
                </div>
            </section>
            <section>
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
                        <img src={ai_chatbot} alt="Me" class="rounded-lg" />
                    </div> 
                    <div class="ml-auto place-self-center lg:col-span-7">
                        <h2 class='flex justify-center text-4xl pb-5'>Technical skills</h2>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I have a proven history of autonomously and 
                        cooperatively creating programming projects, spanning from GCSE to A Level coursework, throughout my university degree, and also undertaking independent 
                        projects during my leisure time. Additionally, I am skilled in programming languages such as Python and C#, among various others, and I am adept at employing 
                        software development tools and methodologies such as Git and unit testing.</p>
                        <p class="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">Technical stack:</p>
                        <ul class="grid grid-cols-2 grid-flow-row auto-rows-max max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            <li>Python</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>Vue.js</li>
                            <li>WPF</li>
                            <li>ASP.NET Core MVC</li>
                            <li>SQL</li>
                            <li>Flutter</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <h2 class='flex justify-center text-4xl pt-10'>Passions and interests</h2>
                <div class='grid grid-cols-2 grid-flow-row auto-rows-max place-items-stretch gap-10'>
                    <ul>
                        <li>
                            <h2 class='flex justify-center text-3xl py-10'>Languages</h2>
                        </li>
                        <div className='font-light text-gray-500 dark:text-gray-400'>
                            <li>
                                <h4 className='text-xl'>English</h4>
                                <p className='text-md'>Native/fluent</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>Spanish</h4>
                                <p className='text-md'>Native/fluent</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>German</h4>
                                <p className='text-md'>Intermediate</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>Italian</h4>
                                <p className='text-md'>Elementary Proficiency</p>
                            </li>
                        </div>
                    </ul>
                    <ul>
                        <li>
                            <h2 class='flex justify-center text-3xl py-10'>Music</h2>
                        </li>
                        <div className='font-light text-gray-500 dark:text-gray-400'>
                            <li>
                                <h4 className='text-xl'>Piano</h4>
                                <p className='text-md'>Over the past 15 years, my dedication to playing the piano has been a transformative journey filled with milestones and personal 
                                growth. Achieving a silver medal, equivalent to grade 6 proficiency, stands as a testament to the dedication and countless hours invested in honing 
                                my skills. Whether performing classical compositions or exploring contemporary pieces, the piano has been my constant companion in moments of joy and 
                                solace. Beyond the structured achievements, playing the piano in my free time is a source of personal fulfillment and an avenue for creative 
                                expression.</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>Guitar</h4>
                                <p className='text-md'>Having received lessons when I was younger, I acquired the foundational skills that have proven invaluable in my recent journey 
                                to rediscovering the guitar. This journey has blended the fundamentals learned during my early lessons with the newfound freedom of self-directed 
                                learning</p>
                            </li>
                        </div>
                    </ul>
                    <ul>
                        <li>
                            <h2 class='flex justify-center text-3xl py-10'>Fitness</h2>
                        </li>
                        <div className='font-light text-gray-500 dark:text-gray-400'>
                            <li>
                                <h4 className='text-xl'>Volleyball</h4>
                                <p className='text-md'>My passion for volleyball originated in Peru, where it served as a cultural expression and a means of connecting with friends 
                                and family. It wasn't until university that I reignited my love for volleyball, diving back into the game with a newfound enthusiasm. Participating in 
                                university tournaments showed me the importance of teamwork, critical thinking and adaptability when working in a team</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>Gym</h4>
                                <p className='text-md'>Embarking on my gym journey in February 2022 has yielded both physical and mental transformations. Not only have I witnessed 
                                improved energy levels and a more defined physique, but the mental benefits are equally significant. Dedication to a regular workout routine has 
                                enhanced my resilience and perseverance, turning challenges into opportunities for personal growth.</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>Martial arts</h4>
                                <p className='text-md'>Six years immersed in Kung Fu led me to attain the prestigious blue sash, while also teaching and guiding junior students. 
                                Exploring Brazilian Jiu-Jitsu in both gi and non-gi contexts expanded my skills and embraced challenges. These experiences not only shaped my physique 
                                but also honed soft skills like discipline and perseverance which furthered my personal growth</p>
                            </li>
                        </div>
                    </ul>
                    <ul>
                        <li>
                            <h2 class='flex justify-center text-3xl py-10'>Chess</h2>
                        </li>
                        <div className='font-light text-gray-500 dark:text-gray-400'>
                            <li>
                                <h4 className='text-xl'>Background</h4>
                                <p className='text-md'>My journey with chess has been a compelling exploration of strategic thinking and personal growth. From my early years, I 
                                immersed myself in the world of chess, where I not only honed my skills but also developed a competitive edge through participating in tournaments. 
                                In sixth form, I took the initiative to establish a chess club, providing a platform for other students to engage in strategic gameplay and foster a 
                                sense of community. This experience not only deepened my understanding of the game but also enhanced my leadership and organizational skills. 
                                At present, I actively broadenen my knowledge while engaging in online matches against other players, ensuring the continual refinement of my skills. 
                                Throughout this journey, chess has cultivated problem-solving skills and adaptability which I believe are essential qualities within programming</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>University project</h4>
                                <p className='text-md'>For my third-year university project, I created a chess implementation using C++ and SDL, utilizing bitboards as opposed to an 
                                array-based solution in order to represent the board in a more efficient manner. The AI opponent was created using the negamax algorithm with 
                                alpha-beta pruning for enhanced efficiency. Additionally, I implemented the nearest neighbor filtering method over bilinear filtering to handle 
                                textures as they are a grid of coloured points rather than a grid of pixels. This decision aimed to enhance the visual representation of the 
                                chessboard, demonstrating a well thought out approach to both algorithmic and visual aspects within game development.</p>
                            </li>
                        </div>
                    </ul>
                </div>
            </section>
        </div>
    );
};
  
export default About;