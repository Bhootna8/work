import LandingPage from "@/compos/LandingPage";
import Navbar from "@/compos/Navbar";
import { MovingBorderDemo } from "@/compos/border";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home">
      <Navbar/>
      <LandingPage/>
    </main>
  );
}
