import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Footer from "@/components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="w-full flex justify-center items-center border-2 p-2">
        <Navbar />
      </div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Bloginary</h1>
          <p>Discover amazing courses about tech and engineering</p>
          <Link href="/courses" passHref>
            <Button variant="hero">Explore Courses</Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
