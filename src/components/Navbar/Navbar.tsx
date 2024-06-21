"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import axios from "axios";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "IIT JEE",
    href: "/docs/primitives/alert-dialog",
    description: "Coming soon...",
  },
  {
    title: "GATE CS",
    href: "/docs/primitives/hover-card",
    description: "Coming soon...",
  },
  {
    title: "CAT",
    href: "/docs/primitives/progress",
    description: "Coming soon...",
  },
  {
    title: "WBJEE",
    href: "/docs/primitives/scroll-area",
    description: "Coming soon...",
  },
  {
    title: "JECA",
    href: "/docs/primitives/tabs",
    description: "Prepare for the most awaited MCA entrance exam of WB.",
  },
  {
    title: "Interview Preparation",
    href: "/docs/primitives/tooltip",
    description:
      "Prepare for your upcoming coding interviews in the best manner.",
  },
];
type User = {
  id: string;
  googleId: string;
  fullName: string;
  email: string;
  password: string; // Note: Storing passwords in plain text is not recommended in production
  phone: string | null;
  avatar: string;
  createdAt: string;
  updatedAt: string;
};
export function Navbar() {
  const [userData, setUserData] = React.useState<User | null>(null);

  React.useEffect(() => {
    const getUserData = async () => {
      try {
        axios.defaults.withCredentials = true;
        let response = await axios(
          `http://localhost:8080/api/v1/login/success`,
          {
            method: "GET",
            withCredentials: true,
          }
        );
        console.log(response);

        setUserData(response.data);
        console.log(response.data);

        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("userDetails", JSON.stringify(response.data));

        // console.log(JSON.parse(localStorage.getItem('userDetails')));
      } catch (error) {
        console.log("Error Fetching User Data:", error);
      }
    };

    getUserData();
  }, []);

  const logout = async () => {
    try {
      await axios.get(`http://localhost:8080/api/v1/user/logout`, {
        withCredentials: true,
      });

      setUserData(null);

      // window.location.href = "/login";
      window.location.reload();
    } catch (error) {
      console.error("Error Logging Out : ", error);
    }
  };

  const LoginWithGoogle = () => {
    // window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, "_self");
    window.open(`http://localhost:8080/auth/google`, "_self");
  };

  return (
    <div className="w-[100vw] ">
      <div className="flex justify-between items-center w-full px-6">
        <div className="logo w-1/4 flex items-center">
          <Image
            src={"/Union.png"}
            id="brand-logo"
            width={"40"}
            height={"40"}
            alt="Brand Logo"
          ></Image>
          {/* <h1 style={{ marginLeft: 5 }}>Bloginary</h1> */}
        </div>

        <div className="flex items-center justify-center w-1/2">
          <NavigationMenu>
            <NavigationMenuList>
              {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Examinations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <Link href="/courses" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Courses
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faqs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    FAQs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/testimonials" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Testimonials
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <button type="button" className="login-with-google-btn">
                      Sign in with Google
                    </button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {!userData ? (
          <div className="w-1/4 flex items-center justify-end">
            <button
              type="button"
              className="login-with-google-btn"
              onClick={LoginWithGoogle}
            >
              Sign in with Google
            </button>
          </div>
        ) : (
          <div className="w-1/4 flex items-center justify-end">
            <Avatar>
              <AvatarImage src={userData.avatar} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
