const Education = () => {
    return (
        <div>
            {/* <h1 class='flex justify-center font-sans text-5xl mb-12'>Education</h1> */}
            <h1 class="flex justify-center text-5xl">Education</h1>
            <div class="max-w-2xl mx-auto">
                <ol class="relative border-l border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ml-4">
                        <time class="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2019 - 2022</time>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Second Class Honours (division one) BSc Computer Science, University of East Anglia</h3>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">Key modules:</p>
                        <ul>
                            <li>
                                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">- Web-based programming - 78.50%</p>
                            </li>
                            <li>
                                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">- Software engineering - 65.90%</p>
                            </li>
                            <li>
                                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">- Computing principles - 89.07%</p>
                            </li>
                        </ul>
                    </li>
                    <li class="mb-10 ml-4">
                        <time class="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2016 - 2018</time>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">A Levels, Christleton Sixth Form</h3>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">Key modules:</p>
                        <ul>
                            <li>
                                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">- Spanish - A</p>
                            </li>
                            <li>
                                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">- Mathematics - B</p>
                            </li>
                            <li>
                                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">- Computer Science - C</p>
                            </li>
                            <li>
                                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">- Physics - D</p>
                            </li>
                        </ul>
                    </li>
                    <li class="mb-10 ml-4">
                        <time class="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2015 - 2016</time>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">GCSEs, Christleton High School</h3>
                        <ul>
                            <li>
                                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">10 A* - C - including Mathematics, Triple Science and English</p>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Education;