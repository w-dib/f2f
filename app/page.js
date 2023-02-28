/* eslint-disable @next/next/no-img-element */
import {
  ChatBubbleBottomCenterIcon,
  ComputerDesktopIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";

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
    <main className="flex flex-col mx-5 md:mx-auto md:max-w-7xl">
      {/* Title */}
      <div className="mt-7 text-white text-3xl md:text-5xl text-left leading-relaxed">
        <span className="underline decoration-[#21FF7E]">
          Tinder for Founders:
        </span>{" "}
        Founder-2-Founder is MENA&apos;s 1<sup className="">st</sup> Co-founder
        Matchmaking Platform
      </div>
      {/* Subtitle */}
      <div className="mt-5 md:mt-16 text-white text-lg md:text-xl font-thin text-left">
        F2F is a vibrant community made by founders for founders. Find your
        perfect match based on shared values and start building your business
        today.
      </div>
      {/* Login & Signup */}
      <div className="mt-5 md:mt-16">
        <div className="flex justify-between md:justify-start text-white text-3xl font-normal">
          <div
            className={`${p2.className} md:mr-5 px-3 py-2 bg-[#21FF7E] text-black rounded-md text-base hover:bg-[#29a35c] hover:text-white cursor-pointer`}
          >
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
      {/* How it works */}
      <div className="flex flex-col mt-7 md:mt-16">
        <p className="text-white text-center text-2xl">How it works</p>
        <img className="h-32 w-auto mt-3" src="./img/Frame.svg" alt="" />
        <div className="px-2">
          {howItWorks.map((step) => (
            <div
              key={step.id}
              className="flex mt-5 border-b-2 border-dashed border-gray-700 pb-2"
            >
              <div className="mx-auto font-bold my-auto text-white text-lg border rounded-full  px-2 border-[#21FF7e]">
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
          <div key={card.name} className="mt-5 md:mt-0 mx-auto">
            <div className="block p-6 bg-white border md:h-60 border-gray-200 rounded-lg shadow hover:bg-gray-100">
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
    </main>
  );
}
