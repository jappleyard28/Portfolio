import { ContactUs } from "../components/ContactUs";

const Contact = () => {
    return (
        <div>
            <h1 class='flex justify-center font-sans text-5xl mb-10'>Contact Me</h1>
            <p class='flex justify-center'>Have a question or want to work together?</p>
            {/* contact me form */}
            <ContactUs />
        </div>
    );
};

export default Contact;