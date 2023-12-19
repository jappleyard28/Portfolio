import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dmmmw5f', 'template_mdxw4nd', form.current, 'TAt3RSIkJ8t2B9Wv-')
      .then((result) => {
          console.log(result.text);
          console.log("message successful")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(); // resets contact form fields to blank after submit button is pressed
  };

  return (
    <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
            <form ref={form} onSubmit={sendEmail}>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">Full Name</label>
                <input type="text" name="from_name" id="name" placeholder="Full Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">Email Address</label>
                <input
                type="email"
                name="from_email"
                id="email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Subject
                </label>
                <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label for="message" class="mb-3 block text-base font-medium text-[#07074D]">Message</label>
                <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
            </div>
            <div>
                <div class="g-recaptcha" data-sitekey="6LdNJDYpAAAAAJMLSdYoruH9nMTVc76R6CI5PrMp"></div>
                <br/>
                <input type='submit' value="Send" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" />
            </div>
            </form>
        </div>
    </div>
  );
};