import React, { useState } from 'react';

function SstTestimonial() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const testimonials = [
    {
      text: "Our aim to spread all information about Sh.Khatu Shayam Dham among the devotees of Shyam baba is cracked after having a versatile....",
      author: "Sanjeev Ratusaria",
    },
    {
      text: "It’s an absolute pleasure to work with the team. Their quality of work and i recive bussiness from diffrent part of country",
      author: "Rakesh Sharma",
    },
    {
      text: "The website has significantly improved our business. It’s user-friendly, andWithin a few days of launching, it started to give positive response to our business.",
      author: "Raj Kamal",
    },
    {
      text: "The team’s expertise and dedication were instrumental in meeting our project these are for thire aspects of improving the some an & when requirement arises",
      author: "Hari Singh",
    },
  ];

  const handleReadMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl font-light text-red-600">Our happy clients say about us....</h2>
            <hr class="w-48 h-1 mx-auto my-4 border-0 rounded  bg-red-600"/>
          </div>
          <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <li key={index}>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg aria-hidden="true" style={{ width: "105", height: "78" }} className="absolute left-6 top-6 fill-slate-100">
                        <path
                          d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                        </path>
                      </svg>
                      <blockquote className="relative">
                        <p className={`text-base tracking-tight text-slate-900 overflow-hidden ${expandedIndex === index ? 'h-auto' : 'h-24'}`}>
                          {testimonial.text}
                        </p>
                      </blockquote>
                      <div className="flex justify-between items-center border-t border-slate-100 pt-6 mt-6">
                        <figcaption className="font-display text-sm font-semibold text-slate-900">
                          {testimonial.author}
                        </figcaption>
                        <button
                          className="text-white bg-gray-700 p-2 rounded-lg text-xs hover:bg-gray-700 hover:text-gray-100"
                          onClick={() => handleReadMoreClick(index)}
                        >
                          {expandedIndex === index ? 'Read Less' : 'Read More'}
                        </button>
                      </div>
                    </figure>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SstTestimonial;
