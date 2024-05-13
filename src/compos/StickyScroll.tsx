"use client";
import { StickyScroll } from "@/Components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Spaces",
    description:
      "Spaces is a revolutionary project folder concept designed to boost seamless digital collaboration for remote teams of all sizes, while ensuring compliance, data control and security.  Spaces delivers an optimized user experience and significantly reduces admin workload.",
    content: (
     <Image src={'/spaces.png'} height={600} width={500} alt=""/>
    ),
  },
  {
    title: "Secure By Desing",
    description:
      "Infinite Scale incorporates state-of-the-art security standards and best practices to ensure superior data protection and privacy. Infinite Scale is designed as a three-tier architecture separating storage, backend and frontend components communicating through secure, well-defined APIs.",
    content: (
        <Image src={'/SecureByDesign.png'} height={600} width={500} alt=""/>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
