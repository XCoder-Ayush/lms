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
import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
function Page() {
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
            Privacy Policy
          </h2>
        </div>
        <div className="overflow-hidden w-3/5 mt-4">
          <p
            data-aos="slide-up"
            data-aos-delay={600}
            data-aos-duration={1000}
            className="text-center text-gray-500 aos-init aos-animate"
          >
            This privacy policy sets out how Bloginary uses and protects any
            information that you give Bloginary when you visit their website
            and/or agree to purchase from them.
          </p>
        </div>
      </div>

      <div className="p-16">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Some info about us you definitely need to know.
            </AccordionTrigger>
            <AccordionContent>
              <h1>
                Bloginary is committed to ensuring that your privacy is
                protected. Should we ask you to provide certain information by
                which you can be identified when using this website, and then
                you can be assured that it will only be used in accordance with
                this privacy statement.
              </h1>
              <br />
              <h1>
                Bloginary may change this policy from time to time by updating
                this page. You should check this page from time to time to
                ensure that you adhere to these changes.
              </h1>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What information does we obtain ?
            </AccordionTrigger>
            <AccordionContent className="px-2">
              <ul>
                <li>1. Name</li>
                <br />

                <li>2. Contact information including email address</li>
                <br />

                <li>
                  3. Demographic information such as postcode, preferences and
                  interests, if required
                </li>
                <br />

                <li>
                  4. Other information relevant to customer surveys and/or
                  offers
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What do we do with the information we gather ?
            </AccordionTrigger>
            <AccordionContent>
              <h1>
                We require this information to understand your needs and provide
                you with a better service, and in particular for the following
                reasons :
              </h1>
              <br />
              <ul className="px-2">
                <li>1. Internal record keeping.</li>
                <br />

                <li>
                  2. We may use the information to improve our products and
                  services.
                </li>
                <br />

                <li>
                  3. We may periodically send promotional emails about new
                  products, special offers or other information which we think
                  you may find interesting using the email address which you
                  have provided.
                </li>
                <br />

                <li>
                  4. From time to time, we may also use your information to
                  contact you for market research purposes. We may contact you
                  by email, phone, fax or mail. We may use the information to
                  customize the website according to your interests.
                </li>
              </ul>
              <br />

              <h1>
                We are committed to ensuring that your information is secure. In
                order to prevent unauthorized access or disclosure we have put
                in suitable measures.
              </h1>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How do we use cookies ?</AccordionTrigger>
            <AccordionContent>
              <h1>
                A cookie is a small file which asks permission to be placed on
                your computer&apos;s hard drive. Once you agree, the file is
                added and the cookie helps analyze web traffic or lets you know
                when you visit a particular site. Cookies allow web applications
                to respond to you as an individual. The web application can
                tailor its operations to your needs, likes and dislikes by
                gathering and remembering information about your preferences.
              </h1>
              <br />

              <h1>
                We use traffic log cookies to identify which pages are being
                used. This helps us analyze data about webpage traffic and
                improve our website in order to tailor it to customer needs. We
                only use this information for statistical analysis purposes and
                then the data is removed from the system.
              </h1>
              <br />

              <h1>
                Overall, cookies help us provide you with a better website, by
                enabling us to monitor which pages you find useful and which you
                do not. A cookie in no way gives us access to your computer or
                any information about you, other than the data you choose to
                share with us.
              </h1>
              <br />

              <h1>
                You can choose to accept or decline cookies. Most web browsers
                automatically accept cookies, but you can usually modify your
                browser setting to decline cookies if you prefer. This may
                prevent you from taking full advantage of the website.
              </h1>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can you control your personal information ?
            </AccordionTrigger>
            <AccordionContent>
              <h1>
                You may choose to restrict the collection or use of your
                personal information in the following ways :
              </h1>
              <br />
              <ul className="px-2">
                <li>
                  {" "}
                  1. Whenever you are asked to fill in a form on the website,
                  look for the box that you can click to indicate that you do
                  not want the information to be used by anybody for direct
                  marketing purposes.
                </li>
                <br />
                <li>
                  2. If you have previously agreed to us using your personal
                  information for direct marketing purposes, you may change your
                  mind at any time by writing to or emailing us at
                  <em className="ml-1">
                    <strong>bloginary.live@gmail.com</strong>
                  </em>
                </li>
              </ul>
              <br />
              <h1>
                We will not sell, distribute or lease your personal information
                to third parties unless we have your permission or are required
                by law to do so. We may use your personal information to send
                you promotional information about third parties which we think
                you may find interesting if you tell us that you wish this to
                happen.
              </h1>
              <br />
              <h1>
                If you believe that any information we are holding on you is
                incorrect or incomplete, feel free to contact us at{" "}
                <em className=" mr-1">
                  <strong>+91 9874656203</strong>
                </em>{" "}
                or email us at{" "}
                <em className="mr-1">
                  <strong>bloginary.live@gmail.com</strong>
                </em>
                as soon as possible. We will promptly correct any information
                found to be incorrect.
              </h1>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Footer />
    </>
  );
}

export default Page;
