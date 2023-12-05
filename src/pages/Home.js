const Home = () => {
    var name = "jack";

    const handleClick2 = (message) => {
		console.log(message);
	}
    
    return (
        <div>
            <h1 class='flex justify-center text-9xl p-40'>Hi, I'm Jack Appleyard</h1>
            <p class='text-center mb-6 font-light text-gray-500 text-3xl px-64'>I am an enthusiastic and highly motivated individual, and I am a recent Computing Science graduate from the 
            University of East Anglia</p>
            {/* <button onClick={() => handleClick2({name})}>Test button</button> */}
        </div>
    );
};

export default Home;