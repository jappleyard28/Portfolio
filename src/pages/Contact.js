import { ContactUs } from "../components/ContactUs";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <h1 class='flex justify-center text-5xl pb-5'>Contact Me</h1>
            <div class='grid grid-cols-1 place-items-center'>
                <h1 className="text-2xl pb-5">Have a question or want to work together?</h1>
                {/* contact me form */}
                <ContactUs />
                <h1 className="text-2xl pb-5">Alternatively, contact me at:</h1>
                <div className="grid gap-4 grid-cols-[5%_95%] items-center">
                    <FiPhone size={24} />
                    <p>07544 012518</p>
                    <MdAlternateEmail size={24} />
                    <p>jack.appleyard25@gmail.com</p>
                    <FaLinkedin size={24} />
                    <p>https://www.linkedin.com/in/jack-appleyard-849b711b5/</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;