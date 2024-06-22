"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Script from "next/script";
import { LoaderCircle } from "lucide-react";
import axios from "axios";

export default function Checkout() {
  // Don't pass down amount here, Pass donw orderId
  const router = useRouter();
  const pathname = usePathname();
  const courseId: string = pathname.split("/")[2];
  // console.log(courseId);
  const params = useSearchParams();
  // console.log(pathname);
  // console.log(params);

  // const { courseId } = router.query;
  // let amount: Number = Number(params.get("amount"));
  const [pageLoading, setPageLoading] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [amount, setAmount] = React.useState<Number | null>(null);
  const [orderSuccess, setOrderSuccess] = React.useState(false);
  const idRef = React.useRef();

  React.useEffect(() => {
    if (courseId == "") {
      router.replace("/");
    }
    isSignedIn();
  }, []);

  const callToast = () => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };
  const isSignedIn = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/login/success`,
        {
          withCredentials: true,
        }
      );
      fetchCourse();
    } catch (error) {
      // setPageLoading(false);
      // setAmount(0);
      // callToast();
      console.error("Some Problem Occured While Fetching Course : ", error);
      // router.replace("/");
    }
  };
  const fetchCourse = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/course/${courseId}`
      );
      createOrderId(response.data.price);
    } catch (error) {
      console.error("Some Problem Occured While Fetching Course : ", error);
      router.replace("/");
    }
  };
  const createOrderId = async (amount: Number) => {
    // Get Amount From Backend Of The Following Course Id:
    try {
      const response = await fetch("http://localhost:8080/api/v1/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(amount * 100),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const id = data.orderId;
      idRef.current = id;
      setAmount(amount);
      setPageLoading(false);
      return;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    //On Clicking Pay Button
    e.preventDefault();
    setLoading(true);

    const orderId = idRef.current;
    console.log(orderId);

    try {
      const options = {
        key: "rzp_test_jjYAvVxoTUmjSI",
        amount: parseFloat(amount) * 100,
        currency: "INR",
        name: "Bloginary",
        description: "Discover amazing courses about tech and engineering",
        order_id: orderId,
        image: "/Union.png",
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          // console.log("HERE 1");

          // const result = await fetch("http://localhost:8080/api/v1/verify", {
          //   method: "POST",
          //   body: JSON.stringify(data),
          //   headers: { "Content-Type": "application/json" },
          // });
          // console.log("HERE 2");

          // const res = await result.json();
          setOrderSuccess(true);
          alert("Thank You. Our Team Will Contact You In Some Time.");
          //process further request, whatever should happen after request fails
          // if (res.isOk) alert(res.message); //process further request after
          // else {
          //   alert(res.message);
          // }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.on("payment.failed", function (response: any) {
        alert(response.error.description);
      });

      setLoading(false);

      paymentObject.open();
    } catch (error) {
      console.error(error);
    }
  };

  if (orderSuccess)
    return (
      <>
        <h1>Order Successful. Thank You</h1>
      </>
    );
  else if (pageLoading || !amount)
    return (
      <div className="container h-screen flex justify-center items-center">
        <LoaderCircle className=" animate-spin h-20 w-20 text-primary" />
      </div>
    );
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <section className="container h-screen flex flex-col justify-center items-center gap-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
          Checkout
        </h1>
        <Card className="max-w-[25rem] space-y-8  p-8">
          <CardHeader>
            <CardTitle className="my-4">Continue Buying The Course</CardTitle>
            <CardDescription>
              By clicking on pay you will purchase your plan subscription of Rs{" "}
              {String(amount)} for the duration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={processPayment}>
              <Button className="w-full" type="submit">
                {loading ? "...loading" : "Pay"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex">
            <p className="text-sm text-muted-foreground underline underline-offset-4">
              Please read the terms and conditions.
            </p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
