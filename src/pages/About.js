import grad from '../images/grad.jpg'

const About = () => {
    return (
        <div>
            <h1 class="flex justify-center text-5xl">About me</h1>
            <section>
                <h2 class='flex justify-center text-4xl pt-10'>Background</h2>
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo. Dolor morbi non arcu risus quis varius quam. Adipiscing at in tellus integer. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Proin nibh nisl condimentum id venenatis a. Accumsan lacus vel facilisis volutpat. Euismod lacinia at quis risus sed. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames. Integer quis auctor elit sed. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Purus faucibus ornare suspendisse sed nisi. Ultricies tristique nulla aliquet enim tortor.</p>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
                        <img src={grad} alt="Me" class="rounded-lg" />
                    </div>                
                </div>
            </section>
            <section>
                <h2 class='flex justify-center text-4xl pt-10'>Technical skills</h2>
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
                        <img src={grad} alt="Me" class="rounded-lg" />
                    </div> 
                    <div class="ml-auto place-self-center lg:col-span-7">
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
                                <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo. Dolor morbi non arcu risus quis varius quam. Adipiscing at in tellus integer. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Proin nibh nisl condimentum id venenatis a. Accumsan lacus vel facilisis volutpat. Euismod lacinia at quis risus sed. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames. Integer quis auctor elit sed. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Purus faucibus ornare suspendisse sed nisi. Ultricies tristique nulla aliquet enim tortor.</p>
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
                                <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo. Dolor morbi non arcu risus quis varius quam. Adipiscing at in tellus integer. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Proin nibh nisl condimentum id venenatis a. Accumsan lacus vel facilisis volutpat. Euismod lacinia at quis risus sed. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames. Integer quis auctor elit sed. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Purus faucibus ornare suspendisse sed nisi. Ultricies tristique nulla aliquet enim tortor.</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>Gym</h4>
                                <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo. Dolor morbi non arcu risus quis varius quam. Adipiscing at in tellus integer. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Proin nibh nisl condimentum id venenatis a. Accumsan lacus vel facilisis volutpat. Euismod lacinia at quis risus sed. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames. Integer quis auctor elit sed. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Purus faucibus ornare suspendisse sed nisi. Ultricies tristique nulla aliquet enim tortor.</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>Martial arts</h4>
                                <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo. Dolor morbi non arcu risus quis varius quam. Adipiscing at in tellus integer. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Proin nibh nisl condimentum id venenatis a. Accumsan lacus vel facilisis volutpat. Euismod lacinia at quis risus sed. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames. Integer quis auctor elit sed. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Purus faucibus ornare suspendisse sed nisi. Ultricies tristique nulla aliquet enim tortor.</p>
                            </li>
                        </div>
                    </ul>
                    <ul>
                        <li>
                            <h2 class='flex justify-center text-3xl py-10'>Chess</h2>
                        </li>
                        <div className='font-light text-gray-500 dark:text-gray-400'>
                            <li>
                                <h4 className='text-xl'>How it started</h4>
                                <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo. Dolor morbi non arcu risus quis varius quam. Adipiscing at in tellus integer. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Proin nibh nisl condimentum id venenatis a. Accumsan lacus vel facilisis volutpat. Euismod lacinia at quis risus sed. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames. Integer quis auctor elit sed. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Purus faucibus ornare suspendisse sed nisi. Ultricies tristique nulla aliquet enim tortor.</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>Online presence</h4>
                                <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo. Dolor morbi non arcu risus quis varius quam. Adipiscing at in tellus integer. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Proin nibh nisl condimentum id venenatis a. Accumsan lacus vel facilisis volutpat. Euismod lacinia at quis risus sed. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames. Integer quis auctor elit sed. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Purus faucibus ornare suspendisse sed nisi. Ultricies tristique nulla aliquet enim tortor.</p>
                            </li>
                            <li>
                                <h4 className='text-xl pt-5'>Third year project at University</h4>
                                <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo. Dolor morbi non arcu risus quis varius quam. Adipiscing at in tellus integer. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Proin nibh nisl condimentum id venenatis a. Accumsan lacus vel facilisis volutpat. Euismod lacinia at quis risus sed. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames. Integer quis auctor elit sed. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Purus faucibus ornare suspendisse sed nisi. Ultricies tristique nulla aliquet enim tortor.</p>
                            </li>
                        </div>
                    </ul>
                </div>
            </section>
        </div>
    );
};
  
export default About;