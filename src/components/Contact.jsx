import React from 'react';
import Whatsapp from '../assets/icons/Whatsapp';
import Gmail from '../assets/icons/Gmail';

const Contact = () => {
  return (
    <section id='contact' className=" scroll-mt-20 mx-auto p-4 sm:flex sm:max-w-[1200px] sm:flex-col sm:px-0">
      {/* Title Section of Contact */}
      <div className="mb-10 flex w-full flex-col items-start justify-center gap-5 md:flex-row md:items-center md:justify-start">
        <h2 className="text-[28px] text-white md:text-[32px] font-medium">
          <span className="text-primary">#</span>contacts
        </h2>
        <div className="bg-primary h-[1px] w-[240px] md:w-[239px]"></div>
      </div>

      <div className='flex md:flex-row flex-col justify-between gap-10'>
        <p className="text-gray md:w-[520px] font-medium">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className='text-gray flex flex-col gap-3 border border-gray w-fit p-4'>
          <h2 className='font-semibold'>message me here</h2>
          <a href="#" className="flex w-fit items-center justify-center gap-2">
            <span>
              <Whatsapp />
            </span>
            whatsapp
          </a>
          <a href="#" className="flex w-fit items-center justify-center gap-2">
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
