"use client";
import * as React from "react";

import { Course } from "@/components/Course/Course";
import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { LoaderCircle } from "lucide-react";

type Course = {
  id: string;
  author: string;
  thumbnail: string;
  title: string;
  description: string;
  duration: Number;
  rating: Number;
  enrolled: Number;
  price: Number;
};

function Page() {
  const [courses, setCourses] = React.useState<Course[]>([]);
  const [pageLoading, setPageLoading] = React.useState<Boolean>(true);

  React.useEffect(() => {
    fetchCourses();
  }, []);
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/courses`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setCourses(data);

      return;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  React.useEffect(() => {
    setPageLoading(false);
  }, [courses]);
  if (pageLoading)
    return (
      <div className="container h-screen flex justify-center items-center">
        <LoaderCircle className=" animate-spin h-20 w-20 text-primary" />
      </div>
    );
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

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 w-full px-8 py-4 mt-16">
        {courses.length &&
          courses.map((course) => <Course key={course.id} course={course} />)}
      </div>

      <Footer />
    </>
  );
}

export default Page;
