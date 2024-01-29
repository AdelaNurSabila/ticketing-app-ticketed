import Details from "@/components/Details";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Ticket from "@/components/Ticket";
import Checkout from "@/components/checkout";
import Free from "@/components/free";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Free />
        <Footer />
      </div>
    </>
  );
};

export default Home;
