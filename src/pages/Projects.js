import Project from "../components/Project";

const Projects = () => {
    return (
        <div>
            <h1 class='flex justify-center mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>Projects</h1>
            <div class="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 border-2 border-black px-40">
                <Project title="Ecommerce Web Scraper"
                tech_stack="Python, BeautifulSoup"
                description="This is a program that utilises web scraping to compare different products from ebay using user input to decide which types of products should be 
                analysed. It does this by using the user's query to create a custom URL and different tags are then retrived from that web page. The relevant data is then collected 
                and organised into a list of dictionaries and they are then sorted into the correct order depending on the filters selected by the user. The list of different items 
                is then outputted into a table format on the GUI ready to be viewed by the user"/>

                <Project title="AI Chatbot"
                tech_stack="Python, BeautifulSoup, Tensorflow, Tkinter"
                description="Group project using scrum to develop an Intelligent Chatbot for train services using Python. I Created a Graphical User Interface and utilised web 
                scraping to retrieve relevant ticket data. The project also used a knowledge base, NLP and prediction modelling to answer the user's queries" />

                <Project title="Insurance Calculator"
                tech_stack="Python"
                description="Used to calculate multiple types of values for an insurance company including calculating a compound inflation index based between two dates, 
                using linear interpolation, and calculating premiums from an inputted excel file by calculating multiple factors such as the exposure band, cumulative premium
                 from the previous exposure band, etc" />

                <Project title="Portfolio Website"
                tech_stack="React, Tailwind"
                description="This is my portfolio website that is used to give a better insight into who I am and shows some of the skills I possess through the work I've done" />
                
                <Project title="Engineering For People Design Challenge"
                tech_stack="Vue.js, node.js"
                description="Group project to create an educational nutritional website with a quiz among other many other features in order to educate people about some of the vital 
                sustainability issues in Lobitos and Piedritas (Peru). I organised regular meetings with my team to make sure everyone was on track so that we could all complete our
                scheduled work on time." />
                
                <Project title="Calculator"
                tech_stack="ASP.NET Core MVC"
                description="Web-based calculator application which converts the button inputs into an expression to be calculated after the equals sign was pressed. It then checks
                to make sure the expression is valid, then calculates the answer and outputts it to the answer box" />
                
                <Project title="JPMorgan Virtual Experience"
                tech_stack="React"
                description="I completed JPMorgan Chase's Software Engineering Job Simulation in which I had to create a to set up my dev environment and to build a live graph that 
                displays a data feed for traders to monitor" />

                <Project title="Gymbulum"
                tech_stack="Flutter, Dart"
                description="This app features an intuitive user interface and allows users to effortlessly track workouts, set personalized goals, and monitor progress. Leveraging 
                Dart's language capabilities and Flutter's framework, I implemented efficient data management for a responsive and reliable user experience. " />
                
                <Project title="Chess"
                tech_stack="C++, SDL"
                description="This is a chess game I created to allow the user to play vs AI on a GUI. In order to accomplish this, I decided to store the pieces using bitboards and 
                create validation for where each piece is allowed to move. The AI was coded using Alpha-beta pruning on the negamax algorithm as an improvement in efficiency compared 
                to the standard minimax algorithm and the nearest neighbour filtering method was used to extract the colour components" />
                
                <Project title="Snake"
                tech_stack="C#, WPF, SQL"
                description="Mathematical variation of the classic snake game that stores high scores into the database and updates them on the leaderboard. It creates different
                types of maths questions to be asked and assignes the correct answer to an answer block from 'A' to 'D' and assigns similar incorrect answers to the other answer 
                blocks. Different types of power ups are picked up and stored into a stack that can be activated by pressing 'p'" />

                <Project title="Racing Game"
                tech_stack="C++, OpenGL"
                description="This is a racing game created using C++ and OpenGL" />
            </div>
        </div>
    );
};

export default Projects;