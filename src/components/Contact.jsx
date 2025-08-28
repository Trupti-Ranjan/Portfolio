import React from 'react';
import Whatsapp from '../assets/icons/Whatsapp';
import Gmail from '../assets/icons/Gmail';

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto scroll-mt-20 p-4 sm:flex sm:max-w-[1200px] sm:flex-col sm:px-0"
    >
      {/* Title Section of Contact */}
      <div className="mb-10 flex w-full flex-col items-start justify-center gap-5 md:flex-row md:items-center md:justify-start">
        <h2 className="text-[28px] font-medium text-white md:text-[32px]">
          <span className="text-primary">#</span>contacts
        </h2>
        <div className="bg-primary h-[1px] w-[240px] md:w-[239px]"></div>
      </div>

      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <p className="text-gray font-medium md:w-[520px]">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="text-gray border-gray flex w-fit flex-col gap-3 border p-4">
          <h2 className="font-semibold">message me here</h2>
          <a
            href="https://wa.me/916372748322?text=Hello%20Trupti,%20I%20saw%20your%20portfolio%20and%20want%20to%20connect."
            target="_blank"
            className="flex w-fit items-center justify-center gap-2"
          >
            <span>
              <Whatsapp />
            </span>
            whatsapp
          </a>
          <a
            href="mailto:truptiranjan272@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center justify-center gap-2"
          >
            <span>
              <Gmail className="h-6 w-6" />
            </span>
            mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
