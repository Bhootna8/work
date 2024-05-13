import Image from "next/image";

export const listOfImgs = [
  {
    title: "Spaces",
    description:
      "Spaces is a revolutionary project folder concept designed to boost seamless digital collaboration for remote teams of all sizes, while ensuring compliance, data control and security.  Spaces delivers an optimized user experience and significantly reduces admin workload.",
    content: <Image src={"/spaces.png"} height={800} width={600} alt="" />,
  },
  {
    title: "Secure By Desing",
    description:
      "Infinite Scale incorporates state-of-the-art security standards and best practices to ensure superior data protection and privacy. Infinite Scale is designed as a three-tier architecture separating storage, backend and frontend components communicating through secure, well-defined APIs.",
    content: (
      <Image src={"/SecureByDesign.png"} height={800} width={600} alt="" />
    ),
  },
  {
    title: "For organizations with high data governance requirements",
    description:
      "Control your data – always, anytime and anywhere. Deploy ownCloud on-premises, in a data center of your choice or in a hybrid setup. Regulations and certifications? Say no more. We keep your back! With multi-factor authentication, encryption and our elaborate file lifecycle management. Looking for 100% data ownership? Let’s get in touch now.",
    content: (
      <Image src={"/cloud1.svg"} height={800} width={600} alt="" />
    ),
  },
  {
    title: "For smaller organizations and private users",
    description:
      "No time for infrastructure management? ownCloud.online is your best choice for data sovereignty and the flexibility of a SaaS solution. Our platform, fully hosted in Germany, lets you start right away. Keep your data safe at any time. Compliant and without any maintenance. It’s just one click away.",
    content: (
      <Image src={"/cloud2.svg"} height={800} width={600} alt="" />
    ),
  },
  {
    title: "Control who can access your data",
    description:
      `Give staff an easy, flexible and secure way to share files and folders. Safely involve contacts outside your organization with select documents. Share public links shielded by passwords and expiration dates.

      Say goodbye to slow VPN connections, unversioned documents attached to emails and shadow IT in public clouds of questionable security.`,
    content: (
      <Image src={"/ControlData-2.png"} height={600} className=" h-[1000px] object-fill" width={600} alt="" />
    ),
  },
];
