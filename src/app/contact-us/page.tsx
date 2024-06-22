"use client";
import Footer from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import { toast } from "sonner";

function page() {
  const [formData, setFormData] = React.useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert("Query Posted Successfully");
      toast("Query Posted Successfully", {
        description: `${Date.now()}`,
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    } catch (error) {
      console.error("There was a problem posting your query : ", error);
      alert("Query Posting Failed. Please Try Again In Some Time.");

      toast("Failed to send message. Please try again later.", {
        description: `${Date.now()}`,
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
  };
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-center items-center border-2 p-4">
        <Navbar />
      </div>

      <section className="contact wrapper py-10 md:py-20 2xl:h-[calc(100vh-2rem)] overflow-hidden">
        <div className="flex flex-col items-center text-center gap-1">
          <div className="overflow-hidden">
            <p
              data-aos="slide-down"
              data-aos-duration={1000}
              className="uppercase text-sm font-bold tracking-widest aos-init aos-animate"
            >
              Contact
            </p>
          </div>
          <div className="overflow-hidden">
            <h2
              data-aos="slide-down"
              data-aos-delay={400}
              data-aos-duration={1000}
              className="text-3xl aos-init aos-animate"
            >
              Get in Touch
            </h2>
          </div>
          <div className="overflow-hidden w-3/5">
            <p
              data-aos="slide-up"
              data-aos-delay={600}
              data-aos-duration={1000}
              className="text-center text-gray-500 aos-init aos-animate"
            >
              Have a question or need assistance? Feel free to reach out to us
              using the contact form below. We are here to help!
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-10  px-10">
          <div
            data-aos="zoom-out"
            data-aos-delay={800}
            data-aos-duration={1000}
            className="w-full lg:w-1/2 flex justify-center p-5 aos-init aos-animate"
          >
            <img
              alt="Some man are connected on call in call center"
              fetchPriority="high"
              decoding="async"
              data-nimg={1}
              className="w-full object-contain rounded-lg"
              src="https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534536281715-e28d76689b4d%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dcontact%252Bus%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Y29udGFjdCUyMHVzfGVufDB8fHx8MTcxODgxOTI2OXww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="w-full lg:w-1/2 overflow-hidden">
            <form
              className="contact-form flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <div className="row grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden">
                <div className="overflow-hidden">
                  <div
                    data-aos="fade-right"
                    data-aos-delay={1000}
                    data-aos-duration={1000}
                    className="form-control w-full flex flex-col gap-2 aos-init aos-animate"
                  >
                    <label htmlFor="name" className="cursor-pointer">
                      Name
                    </label>
                    <input
                      className="name border border-gray-300 focus:border-gray-600 px-4 py-3 rounded-lg outline-none duration-300"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Sarah Parker"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div
                    data-aos="fade-left"
                    data-aos-delay={1000}
                    data-aos-duration={1000}
                    className="form-control flex flex-col gap-2 aos-init aos-animate"
                  >
                    <label htmlFor="number" className="cursor-pointer">
                      Phone Number
                    </label>
                    <input
                      className="number border border-gray-300 focus:border-gray-600 px-4 py-3 rounded-lg outline-none duration-300"
                      type="tel"
                      name="number"
                      id="number"
                      placeholder="+88 01XXXXXXXXX"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-hidden email-ctrl">
                <div
                  data-aos="fade-down"
                  data-aos-delay={1000}
                  data-aos-duration={1000}
                  className="form-control flex flex-col gap-2 aos-init aos-animate"
                >
                  <label htmlFor="email" className="cursor-pointer ">
                    Email Address
                  </label>
                  <input
                    className="email border border-gray-300 focus:border-gray-600 px-4 py-3 rounded-lg outline-none duration-300"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="sara@example.com"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="overflow-hidden message-ctrl">
                <div
                  data-aos="fade-down"
                  data-aos-duration={1000}
                  data-aos-delay={1000}
                  className="form-control flex flex-col gap-2 aos-init aos-animate"
                >
                  <label htmlFor="message" className="cursor-pointer">
                    Message
                  </label>
                  <textarea
                    className="message border border-gray-300 focus:border-gray-600 h-32 rounded-xl outline-none py-3 px-4 resize-none duration-300"
                    placeholder="Type your message here..."
                    name="message"
                    id="message"
                    rows={1}
                    cols={50}
                    required
                    spellCheck="false"
                    defaultValue={""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay={1000}
                data-aos-duration={1000}
                type="submit"
                className="submit px-4 py-4 rounded-xl text-white bg-black hover:bg-gray-700 duration-300 flex items-center justify-center gap-2 overflow-hidden aos-init aos-animate"
              >
                Send Message
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="justify-end">
        <Footer />
      </div>
    </div>
  );
}

export default page;
