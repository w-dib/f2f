/* eslint-disable @next/next/no-img-element */
{
  /* <p className={inter.className}></p> */
}

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
      "Get matched with like-minded co-founders based on shared interests, goals, and values, and collaborate on your next big idea.",
    icon: LinkIcon,
  },
  {
    name: "Co-founder Events and Networking Opportunities",
    description:
      "Attend meetups, hackathons, and other events to connect with other entrepreneurs and build your professional network.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Member-Only Discounts and Special Offers",
    description:
      "Save on essential business services, such as cloud hosting, software subscriptions, and more, and maximize your startup's budget.",
    icon: ComputerDesktopIcon,
  },
];

export default function Home() {
  return (
    <main>
      <div className="flex flex-col mx-5">
        {/* Title */}
        <div className="mt-7 text-white text-3xl text-center leading-relaxed">
          Founder-2-Founder: MENA&apos;s 1<sup className="">st</sup> Co-founder
          Matchmaking Platform
        </div>
        {/* Subtitle */}
        <div className="mt-5 text-white text-lg font-thin text-center">
          Join a vibrant community of startup founders and find your perfect
          match based on shared values, vision, and goals, and start building
          your business today.
        </div>
        {/* Login & Signup */}
        <div className="mt-5">
          <div className="flex justify-between text-white text-3xl font-normal">
            <div
              className={`${p2.className} px-10 py-2 bg-[#21FF7E] text-black rounded-md text-lg hover:bg-[#29a35c] cursor-pointer`}
            >
              <a href="/signup">Sign up</a>
            </div>
            <div
              className={`${p2.className} px-10 py-2 border-2 border-[#21FF7E] text-white rounded-md text-lg cursor-pointer hover:bg-[#29a35c] hover:border-[#29a35c]`}
            >
              <a href="/login">Log in</a>
            </div>
          </div>
        </div>
        {/* Landing fold */}
        <div className="mt-5 h-40 flex justify-around relative">
          <img
            className="h-24 w-auto my-auto z-10"
            src="./img/LookRight.svg"
            alt=""
          />
          <img
            className="h-32 w-auto absolute left-1/3 bottom-2 z-0"
            src="./img/Chat.svg"
            alt=""
          />
          <img
            className="h-24 w-auto my-auto z-10"
            src="./img/LookLeft.svg"
            alt=""
          />
        </div>

        {/* How it works */}
        {cards.map((card) => (
          <div key={card.name} className="mt-5 mx-auto">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
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
