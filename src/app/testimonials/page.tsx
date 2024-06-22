"use client";

import * as React from "react";
import Footer from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function page() {
  return (
    <>
      <div className="h-[100vh] flex flex-col ">
        <div className="w-full flex justify-center items-center border-2 p-4">
          <Navbar />
        </div>
        <div className="flex flex-col items-center text-center gap-1 mt-16 mb-6 ">
          <div className="overflow-hidden mt-4">
            <p
              data-aos="slide-down"
              data-aos-duration={1000}
              className="uppercase text-sm font-bold tracking-widest aos-init aos-animate"
            >
              Testimonials
            </p>
          </div>
          <div className="overflow-hidden">
            <h2
              data-aos="slide-down"
              data-aos-delay={400}
              data-aos-duration={1000}
              className="text-3xl aos-init aos-animate"
            >
              Hear out the experiences from our past candidates who have
              enrolled in the courses
            </h2>
          </div>
          <div className="overflow-hidden w-3/5 mt-4">
            <p
              data-aos="slide-up"
              data-aos-delay={600}
              data-aos-duration={1000}
              className="text-center text-gray-500 aos-init aos-animate"
            >
              Transparency should be at it&apos;s peak is our core principle
            </p>
          </div>
        </div>

        <div className="w-full  flex justify-center items-center py-16 flex-grow">
          <Carousel className="w-[800px]">
            <CarouselContent>
              {/* {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <img
                    src="/T1.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </CarouselItem>
              ))} */}
              <CarouselItem key={1}>
                <img
                  src="/T1.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </CarouselItem>
              <CarouselItem key={2}>
                <img
                  src="/T2.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </CarouselItem>
              <CarouselItem key={3}>
                <img
                  src="/T3.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </CarouselItem>
              <CarouselItem key={4}>
                <img
                  src="/T4.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </CarouselItem>
              <CarouselItem key={5}>
                <img
                  src="/T5.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </CarouselItem>
              <CarouselItem key={6}>
                <img
                  src="/T6.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="justify-end">
          <Footer />
        </div>
      </div>
    </>
  );
}
