import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";



const contentData = [
  {
    header: "What is Evil Eye?",
    paragraph1:
      "The Evil Eye, or “Drishti”, is a harmful gaze that brings misfortune, jealousy, or sickness. In astrology, it’s seen as a negative energy that can disrupt one’s aura and lead to discomfort, misfortune, or even illness. While not a literal eye, it represents the negative energy projected onto someone, potentially impacting their physical, emotional, mental, and even spiritual well-being.",
    imageSrc: "/images/service/eye/six1.jpg",
    paragraph2:
      "It often comes from those who unconsciously or consciously emit negative energy due to envy. Every culture has a different definition of this term. While skeptics may doubt it, many eventually believe due to personal experiences.",
    paragraph3:
      "This ancient belief has roots in many cultures and is recognized in Vedic astrology. Various treatises in Vedic Astrology mention envy and evil eye influences, though interpretations can vary.",
  },
  {
    header: "Symptoms & Impact",
    paragraph1:
      "Common signs include headaches, sudden illness, irritability, or misfortune without reason. Symptoms may range from physical ailments to emotional distress, like fatigue, stomach problems, sleep disturbances, and body pain.",
    imageSrc:
      "/images/service/eye/six2.jpg",
    paragraph2:
      "Children may cry excessively, and adults may feel mentally disturbed. Anxiety, depression, difficulty concentrating, and negativity are also common signs.",
    paragraph3:
      "Prolonged exposure can affect relationships, finances, and career growth, as success and harmony are disrupted.",
  },
  {
    header: "Astrological Remedies",
    paragraph1:
      "Our experts use salt rituals, lemon-chili techniques, and black thread remedies. Symbolic rituals and gemstone recommendations aim to neutralize negative energy.",
    imageSrc:
      "/images/service/eye/six3.jpg",
    paragraph2:
      "Special poojas like Nazar Dosh Nivaran and chanting mantras like Hanuman Chalisa strengthen the aura. Black thread or amulets help deflect negative energy.",
    paragraph3:
      "Small black dots behind the ear for children, Vastu tips like rock salt placement, and lemon-chili hangings are also used.",
  },
  {
    header: "Protective Measures",
    paragraph1:
      "Protective symbols like 'Nazar Battu' or black beads help ward off evil. Protection improves mental clarity, relationships, decision-making, and luck.",
    imageSrc:
      "https://static.toiimg.com/thumb/msid-116366537,imgsize-30312,width-400,resizemode-4/116366537.jpg",
    paragraph2:
      "Daily chanting, spiritual baths, and lighting camphor prevent negativity. Planetary doshas during certain astrological periods can make protection crucial.",
    paragraph3:
      "Protection acts like a spiritual firewall, restoring energetic balance during life transitions such as marriage, career changes, or business ventures.",
  },
];

const title = "Evil Eye Protection";
const bannerImage = "/images/services/evil-eye-banner.jpg"; // Update this path as needed

const EvilEye: React.FC = () => {
  return (
    <div className="bg-white">
      <SectionService
        contentData={contentData}
        title={title}
        bannerImage={bannerImage}
      />
      <div className="mt-2">
        <Faq />
      </div>
    </div>
  );
};

export default EvilEye;
