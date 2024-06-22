"use client";

import * as React from "react";
import Footer from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            FAQs
          </p>
        </div> */}
        <div className="overflow-hidden">
          <h2
            data-aos="slide-down"
            data-aos-delay={400}
            data-aos-duration={1000}
            className="text-3xl aos-init aos-animate"
          >
            FAQs
          </h2>
        </div>
        <div className="overflow-hidden w-3/5 mt-4">
          <p
            data-aos="slide-up"
            data-aos-delay={600}
            data-aos-duration={1000}
            className="text-center text-gray-500 aos-init aos-animate"
          >
            Get the answers of the most frequently asked questions from our
            users.
          </p>
        </div>
      </div>
      <div className="p-16">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is the course fees refundable?</AccordionTrigger>
            <AccordionContent>
              Refunds are available within 7 days of purchase, provided that you
              have not accessed more than 25% of the course content. Please
              refer to our refund policy for more information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent>
              If you have any questions or need assistance, you can reach our
              customer support team by emailing support@bloginary.com or by
              using the contact form on our website. We strive to respond to all
              inquiries within 24 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can i share the course with others?
            </AccordionTrigger>
            <AccordionContent>
              No, sharing your course account with others is strictly
              prohibited. Each course purchase grants access to a single user
              only. Violation of this policy may result in account suspension.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I access the course materials immediately after purchase?
            </AccordionTrigger>
            <AccordionContent>
              Yes, once your payment is successfully processed, you will gain
              immediate access to the course materials. You can start learning
              right away!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How long do I have access to the course materials?
            </AccordionTrigger>
            <AccordionContent>
              Once you purchase a course, you will have lifetime access to the
              course materials. You can revisit the content at any time and
              learn at your own pace.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I purchase a course?</AccordionTrigger>
            <AccordionContent>
              Browse through the course catalogue and select the course which
              you want to buy and just click on Buy Now, you will be redirected
              to the Payments page.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Which payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept major credit cards, including Visa, Mastercard, and
              American Express. We also support payments through popular online
              payment platforms such as Razorpay.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Footer />
    </>
  );
}

export default page;
