import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  ExternalLink
} from "lucide-react";

// Inline SVGs for LeetCode, CodeChef, GFG
const LeetCodeIcon = (props) => (
  <svg viewBox="0 0 1024 1024" width="24" height="24" {...props}>
    <path fill="#FFA116" d="M640 96L320 416l320 320 64-64-256-256 256-256z" />
    <path fill="#000" d="M736 288L608 416l128 128 128-128z" />
  </svg>
);

const CodeChefIcon = (props) => (
  <svg viewBox="0 0 512 512" width="24" height="24" {...props}>
    <path fill="#6d4c41" d="M256 32c-124.6 0-226 101.4-226 226s101.4 226 226 226 226-101.4 226-226S380.6 32 256 32z"/>
    <path fill="#fff" d="M256 112c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144S335.4 112 256 112z"/>
  </svg>
);

const GFGIcon = (props) => (
  <svg viewBox="0 0 122.88 122.88" width="24" height="24" {...props}>
    <path fill="#2f8d46" d="M0 61.44a61.44 61.44 0 1 1 122.88 0 61.44 61.44 0 0 1-122.88 0zm64.65-32.89l5.35 5.35-18.57 18.57h29.44v7.61H51.43l18.57 18.57-5.35 5.35L36.27 61.44l28.38-28.89z"/>
  </svg>
);

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/naveen-podilikuri/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@just_.Naveen",
    icon: Instagram,
    url: "https://www.instagram.com/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "LeetCode",
    displayName: "LeetCode",
    subText: "@Naveen_5p4",
    icon: LeetCodeIcon,
    url: "https://leetcode.com/u/Naveen_5p4/",
    color: "#FFA116",
    gradient: "from-[#FFA116] to-[#FFB84D]"
  },
  {
    name: "CodeChef",
    displayName: "CodeChef",
    subText: "@naveen5p4",
    icon: CodeChefIcon,
    url: "https://www.codechef.com/users/naveen5p4",
    color: "#6d4c41",
    gradient: "from-[#6d4c41] to-[#8d6e63]"
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@NaveenPodilikuri",
    icon: Github,
    url: "https://github.com/NaveenPodilikuri",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "GeeksforGeeks",
    displayName: "GeeksforGeeks",
    subText: "@22r01apc8b",
    icon: GFGIcon,
    url: "https://www.geeksforgeeks.org/user/22r01apc8b/",
    color: "#2f8d46",
    gradient: "from-[#2f8d46] to-[#4CAF50]"
  }
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);
  const [instagram, leetcode, codechef, github, gfg] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn */}
        <SocialCard link={linkedIn} />

        {/* Instagram & LeetCode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[instagram, leetcode].map(link => <SocialCard key={link.name} link={link} />)}
        </div>

        {/* CodeChef & GitHub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[codechef, github].map(link => <SocialCard key={link.name} link={link} />)}
        </div>

        {/* GeeksforGeeks */}
        <SocialCard link={gfg} />
      </div>
    </div>
  );
};

const SocialCard = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`} />
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30" style={{ backgroundColor: link.color }} />
      <div className="relative p-2 rounded-lg">
        <link.icon className="w-5 h-5" style={{ color: link.color }} />
      </div>
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-sm font-bold text-gray-200 group-hover:text-white">{link.displayName}</span>
      <span className="text-xs text-gray-400 truncate group-hover:text-gray-300">{link.subText}</span>
    </div>
    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
  </a>
);

export default SocialLinks;
