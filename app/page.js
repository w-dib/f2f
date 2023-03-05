/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SignUp from "@/components/SignUp";
import {
  ChatBubbleBottomCenterIcon,
  ComputerDesktopIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { Press_Start_2P } from "next/font/google";

const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const cards = [
  {
    name: "Curated Co-founder Matches Based on Compatibility",
    description:
      "Get matched with like-minded co-founders based on interests, skills, and location, and collaborate on your next big idea.",
    icon: LinkIcon,
  },
  {
    name: "Safe Space to Grow Ideas and Build your Network",
    description:
      "Attend meetups, hackathons, and other events to connect with other entrepreneurs and build your professional network.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Meet Pre-vetted Founders",
    description:
      "Our vetting process ensures that you only meet founders who are serious about building their business",
    icon: ComputerDesktopIcon,
  },
];

const howItWorks = [
  {
    id: 1,
    description:
      "Build your profile by telling us about yourself and your ideal co-founder preferences.",
  },
  {
    id: 2,
    description:
      "Get matched with profiles that align with your preferences and have been pre-screened by F2F.",
  },
  {
    id: 3,
    description: "Connect with your matches and see if its a good fit.",
  },
  {
    id: 4,
    description:
      "Once you find the right match, we recommend starting with a trial project to test your compatibility and ensure a successful partnership.",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col mx-5 md:mx-auto md:max-w-4xl">
        {/* Title */}
        <div className="mt-7 text-white text-3xl md:text-5xl text-left leading-relaxed">
          <span className="underline decoration-[#21FF7E]">
            Tinder for Founders
          </span>
          : Founder-2-Founder is MENA&apos;s 1<sup className="">st</sup>{" "}
          Co-founder Matchmaking Platform
        </div>
        {/* Subtitle */}
        <div className="mt-5 md:mt-16 text-white text-lg md:text-xl font-thin text-left">
          F2F is a vibrant community made by founders for founders. Find your
          perfect match based on shared values and start building your business
          today.
        </div>
        {/* Login & Signup */}
        <SignUp />
        {/* How it works */}
        <div className="p-6 text-lg md:text-xl">
          <p className="text-2xl md:text-3xl text-center font-bold text-white">
            How it works
          </p>
          <img
            className="py-7 h-40 md:h-52 w-auto mx-auto"
            src="./img/Frame.svg"
            alt=""
          />
          <div className="mx-auto mt-5 space-y-4 md:max-w-prose">
            {howItWorks.map((step) => (
              <div
                key={step.id}
                className="flex flex-row flex-nowrap gap-4 md:gap-8 "
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#21FF7e] text-white md:h-16 md:w-16">
                  {step.id}
                </div>
                <p className="ml-3 text-white text-lg md:text-xl font-thin text-left">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Features */}
        <div className="flex flex-col md:flex-row md:space-x-2 md:mt-16">
          {cards.map((card) => (
            <div key={card.name} className="mt-5 md:mt-0 mx-auto md:h-72">
              <div className="block p-6 bg-white border md:h-full border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex flex-none h-8 w-8 border rounded-full border-[#21FF7E] items-center justify-center">
                  <card.icon className="h-6 w-6" />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {card.name}{" "}
                </h5>
                <p className="font-normal text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
