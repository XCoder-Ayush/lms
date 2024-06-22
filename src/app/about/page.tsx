"use client";
import * as React from "react";
import Footer from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

function page() {
  return (
    <>
      <div className="h-[100vh] flex flex-col">
        <div className="w-full flex justify-center items-center border-2 p-4">
          <Navbar />
        </div>
        <section className="about wrapper py-10 md:py-20 2xl:h-[calc(100vh-6rem)] flex-grow">
          <div className="flex flex-col items-center text-center gap-1 ">
            <div className="overflow-hidden">
              <p
                data-aos="slide-down"
                data-aos-duration={1000}
                className="uppercase text-sm font-bold tracking-widest aos-init aos-animate"
              >
                About
              </p>
            </div>
            <div className="overflow-hidden">
              <h2
                data-aos="slide-down"
                data-aos-delay={400}
                data-aos-duration={1000}
                className="text-3xl aos-init aos-animate"
              >
                Empowering Learning Through Online Courses
              </h2>
            </div>
            <div className="overflow-hidden w-3/5">
              <p
                data-aos="slide-up"
                data-aos-delay={600}
                data-aos-duration={1000}
                className="text-center text-gray-500 aos-init aos-animate"
              >
                Discover the story behind our mission to empower learners
                worldwide through high-quality online courses.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-10 mt-10 h-5/6 px-16">
            <div className="w-full lg:w-1/2 space-y-2 overflow-hidden ">
              <div
                data-aos="fade-right"
                data-aos-delay={700}
                data-aos-duration={1000}
                className="aos-init aos-animate"
              >
                <p className="text-lg">
                  We are a passionate community of educators, learners, and
                  innovators dedicated to transforming knowledge sharing and
                  acquisition. With a focus on quality, accessibility, and user
                  experience, we provide a seamless learning environment for
                  individuals to discover, explore, and master new skills.
                </p>
                <p className="text-lg">
                  Our team of expert instructors curates and designs courses
                  that are not only informative but also engaging and practical.
                  Whether you&aposre a beginner or an advanced learner, our
                  diverse range of courses caters to different interests and
                  learning styles, ensuring there&aposs something for everyone.
                </p>
                <p className="text-lg">
                  We believe in the transformative power of education. Through
                  interactive lessons, real-world projects, and personalized
                  feedback, we empower learners to apply their knowledge and
                  develop tangible skills. Join our inclusive community to
                  connect, collaborate, and grow together on a journey of
                  continuous learning.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 overflow-hidden h-full">
              <div
                data-aos="fade-left"
                data-aos-delay={700}
                data-aos-duration={1000}
                className="flex justify-center w-full h-full aos-init aos-animate"
              >
                <img
                  alt="A girl stands with a book and thinks about education"
                  fetchPriority="high"
                  decoding="async"
                  data-nimg={1}
                  className="w-full h-full object-contain"
                  src="https://www.ascian.in/creatives/wp-content/uploads/blog.jpg"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="justify-end">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default page;
