import { ContactUs } from "../components/ContactUs";

const Contact = () => {
    return (
        <div>
            <h1 class='flex justify-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>Contact Me</h1>
            <p class='flex justify-center'>Have a question or want to work together?</p>
            {/* contact me form */}
            <ContactUs />
        </div>
    );
};

export default Contact;