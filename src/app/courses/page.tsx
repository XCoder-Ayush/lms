import React from "react";
import { Course } from "@/components/Course/Course";
import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
function page() {
  return (
    <>
      <div className="w-full flex justify-center items-center border-2 p-4">
        <Navbar />
      </div>

      <div className="flex flex-col items-center text-center gap-1 mt-16 mb-6">
        {/* <div className="overflow-hidden mt-4">
          <p
            data-aos="slide-down"
            data-aos-duration={1000}
            className="uppercase text-sm font-bold tracking-widest aos-init aos-animate"
          >
            Courses
          </p>
        </div> */}
        <div className="overflow-hidden">
          <h2
            data-aos="slide-down"
            data-aos-delay={400}
            data-aos-duration={1000}
            className="text-3xl aos-init aos-animate"
          >
            Courses
          </h2>
        </div>
        <div className="overflow-hidden w-3/5 mt-4">
          <p
            data-aos="slide-up"
            data-aos-delay={600}
            data-aos-duration={1000}
            className="text-center text-gray-500 aos-init aos-animate"
          >
            Browse all courses and find the perfect one for you. Whether you
            want to learn a new skill, advance your career, or simply expand
            your knowledge, theres an online course for you.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 w-full px-8 py-4 mt-16">
        <Course title="Operating Systems To The Moon" />
        <Course title="Data Structures And Algorithms In C++" />
        <Course title="Deep Dive Into Apache Kafka And Zookeeper" />
        <Course title="Introduction to Machine Learning with Python" />
        <Course title="Web Development with React and Node.js" />
        <Course title="Ethical Hacking and Cybersecurity Fundamentals" />
      </div>
      <Footer />
    </>
  );
}

export default page;
