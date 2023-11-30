import Project from "../components/Project";
import usama from '../images/usama.jpg'

const Projects = () => {
    return (
        <div>
            <h1 class='flex justify-center font-sans text-5xl mb-10'>Projects</h1>
            <div class="grid grid-cols-4 gap-4">
                <Project title="Ecommerce Web Scraper"
                tech_stack="Python, BeautifulSoup"
                description="This is a program that utilises web scraping to compare different products from ebay using user input to decide which types of products should be analysed"
                image={usama} />

                <Project title="AI Chatbot"
                tech_stack="Python, BeautifulSoup, Tensorflow, Tkinter"
                description="This is a program that utilises web scraping to compare different products"
                image={usama} />

                <Project title="Insurance Calculator"
                tech_stack="Python"
                description="Used to calculate multiple types of values for an insurance company including calculating a compound inflation index based between two dates, 
                using linear interpolation, and calculating premiums from an inputted excel file by calculating multiple factors such as the exposure band, cumulative premium
                 from the previous exposure band, etc"
                image={usama} />

                <Project title="Portfolio Website"
                tech_stack="React, Tailwind"
                description="This is my portfolio website that is used to give a better insight into who I am and shows some of the skills I possess through the work I've done"
                image={usama} />
                <Project title="Engineering For People Design Challenge"
                tech_stack="Vue.js, node.js"
                description="Group project to create an educational nutritional website with a quiz among other many other features in order to educate people about some of the vital 
                sustainability issues in Lobitos and Piedritas (Peru). I organised regular meetings with my team to make sure everyone was on track so that we could all complete our
                scheduled work on time."
                image={usama} />
                <Project title="Calculator"
                tech_stack="ASP.NET Core MVC"
                description="Web-based calculator application which converts the button inputs into an expression to be calculated after the equals sign was pressed. It then checks
                to make sure the expression is valid, then calculates the answer and outputts it to the answer box"
                image={usama} />
                <Project title="JPMorgan Virtual Experience"
                tech_stack="React"
                description="I completed JPMorgan Chase's Software Engineering Job Simulation in which I had to create a to set up my dev environment and to build a live graph that displays
                 a data feed for traders to monitor"
                image={usama} />
                <Project title="Gymbulum"
                tech_stack="Flutter, Dart"
                description="description4"
                image={usama} />
                <Project title="Chess"
                tech_stack="C++, SDL"
                description="This is a chess game I created to allow the user to play vs AI on a GUI. In order to accomplish this, I decided to store the pieces using bitboards and create
                validation for where each piece is allowed to move. The AI was coded using Alpha-beta pruning on the negamax algorithm as an improvement in efficiency compared to the standard
                minimax algorithm and the nearest neighbour filtering method was used to extract the colour components"
                image={usama} />
                <Project title="Snake"
                tech_stack="C#, WPF, SQL"
                description="Mathematical variation of the classic snake game that stores high scores into the database and updates them on the leaderboard. It creates different
                types of maths questions to be asked and assignes the correct answer to an answer block from 'A' to 'D' and assigns similar incorrect answers to the other answer 
                blocks. Different types of power ups are picked up and stored into a stack that can be activated by pressing 'p'"
                image={usama} />
                <Project title="Racing Game"
                tech_stack="C++, OpenGL"
                description="This is a racing game created using C++ and SDL"
                image={usama} />
            </div>
        </div>
    );
};

export default Projects;