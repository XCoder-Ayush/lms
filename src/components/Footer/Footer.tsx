"use client";

import * as React from "react";

function Footer() {
  return (
    <footer
      data-aos="fade"
      data-aos-duration={1000}
      data-aos-once="true"
      className="bg-black pt-20 text-gray-400 aos-init aos-animate px-6"
    >
      <div className="wrapper mx-auto">
        <div className="overflow-hidden">
          <div
            data-aos="slide-up"
            data-aos-delay={500}
            data-aos-once="true"
            data-aos-duration={1000}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-10 items-start w-full pb-10 aos-init aos-animate"
          >
            <div className="company-intro col-span-1 lg:col-span-2">
              <div className="logo mb-4">
                <a className="text-white font-semibold text-xl" href="/">
                  Bloginary
                </a>
              </div>
              <p className="text-gray-400">
                Bloginary is an innovative learning platform that offers a
                diverse selection of courses to help you enhance your skills and
                knowledge. With a wide range of options to explore and easy
                purchasing capabilities, Bloginary empowers you to take control
                of your learning journey and achieve your goals.
              </p>
              <div className="flex mt-5 gap-5">
                <a target="_blank" href="https://www.facebook.com">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:text-white duration-300"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a target="_blank" href="https://www.twitter.com">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:text-white duration-300"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a target="_blank" href="https://www.instagram.com">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:text-white duration-300"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="pages col-span-1 lg:col-span-1">
              <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
              <ul className="text-md font-semibold flex flex-col gap-2">
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/courses"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/faqs"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="col-span-1 lg:col-span-1">
              <h4 className="text-xl font-bold mb-4 text-white">
                Popular Courses
              </h4>
              <ul className="text-md font-semibold flex flex-col gap-2">
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/courses/645d337dd9fa203ea8b4aff0"
                  >
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/courses/645d2ee8d9fa203ea8b4afd6"
                  >
                    Data Entry
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/courses/645d35aed9fa203ea8b4affc"
                  >
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/courses/6470ea5a696e8e5b452be950"
                  >
                    Blockchain
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/courses/6470ed13696e8e5b452be958"
                  >
                    Cyber Security
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/courses/645d31c8d9fa203ea8b4afe3"
                  >
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="col-span-1 lg:col-span-1">
              <h4 className="text-xl font-bold mb-4 text-white">Legal</h4>
              <ul className="text-md font-semibold flex flex-col gap-2">
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="https://merchant.razorpay.com/policy/OQHqcqhulkHaJn/terms"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="/privacy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="https://merchant.razorpay.com/policy/OQHqcqhulkHaJn/refund"
                  >
                    Cancellation and Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white duration-300 hover:underline underline-offset-2"
                    href="https://merchant.razorpay.com/policy/OQHqcqhulkHaJn/shipping"
                  >
                    Shipping and Delivery Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright text-md py-10 border-t border-gray-500 text-center text-gray-400 overflow-hidden">
          <p
            data-aos="fade"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1000}
            data-aos-delay={800}
            data-aos-once="true"
            className="aos-init aos-animate"
          >
            © {/* */}2024{/* */}, Bloginary. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
