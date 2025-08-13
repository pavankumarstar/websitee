import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";


const buttonLabels = [
  "Health and Astrology",
  "Planetary Causes",
  "Healing Remedies",
  "Strengthen Your Health",
];

const contentData = [
  {
    header: "Health and Astrology",
    paragraph1:
      "Astrology reveals hidden health issues through your birth chart. Astrology suggests that planets and their positions in a birth chart can indicate potential health issues. The 6th, 8th, and 12th houses are particularly relevant, with the 6th house associated with diseases and the immune system, the 8th house with longevity and serious health challenges, and the 12th house with mental health and long-term recovery. Planets like the Sun, Moon, Mars, and Saturn are also linked to specific body parts and systems, and their alignments can signal potential health problems.",
    imageSrc:
      "https://www.indastro.com/img/upload/16697213741533895343Medical-Astrolog.jpg",
    paragraph2:
      "Each planet governs parts of the body — affliction leads to specific diseases. Each planet is associated with certain body parts and systems. For example, the Sun governs the heart, the Moon influences mental health, and Mars is linked to blood and muscles.",
    paragraph3:
      "Predictive astrology can help in early diagnosis and prevention. The strength of the ascendant (rising sign) and its ruling planet can indicate overall health and disease resistance.",
  },
  {
    header: "Planetary Causes",
    paragraph1:
      "Malefic Mars causes accidents, Saturn delays healing, Rahu causes addiction. Planetary positions and aspects in one's birth chart are believed to indicate potential health issues. Different planets are associated with specific body parts and systems, and their placement and strength can suggest vulnerabilities or predispositions to certain ailments.",
    imageSrc:
      "https://www.namoastro.com/blog/wp-content/uploads/2024/01/9-Planets-Associated-Diseases-and-Astrological-Remedies-For-Prevention-1200x900.png",
    paragraph2:
      "The 6th, 8th, and 12th houses in your chart reflect chronic health issues. Sun is linked to the heart and vitality, while the Moon is associated with mental health and emotions. Malefic planets like Mars and Saturn are often seen as indicators of potential health challenges, while benefic planets like Jupiter are generally associated with good health.",
    paragraph3:
      "Dasha periods reveal the timing and severity of illness. When a planet is negatively aspected by another planet, it can indicate a weakness or vulnerability in the area of health it governs.",
  },
  {
    header: "Healing Remedies",
    paragraph1:
      "Mantras, yantras, and specific poojas restore health and reduce suffering. If you are facing health issues for a long time and can't discover a cure, or a relative is facing a health problem, these astrological tips can help. By adhering to simple directions, one can achieve physical health along with mental balance.",
    imageSrc:
      "https://astroashram.com//uploads/blog/32120ecb2732b343989e75fa78dd79aa.jpg",
    paragraph2:
      "Rudraksha, fasting, and gemstone therapy balance body and mind energies. The Moon is linked to psychological well-being while the Sun governs physical vitality. Strong or weak positions of these planets influence health.",
    paragraph3:
      "Spiritual healing complements medical treatment for faster recovery. In astrology, the 1st, 2nd, 6th, 7th, 8th, and 11th houses are considered for health, while the 12th house indicates hospitalization.",
  },
  {
    header: "Strengthen Your Health",
    paragraph1:
      "We offer personalized health astrology guidance based on your kundali. Various planetary positions and aspects can indicate potential health issues and remedies for strengthening well-being. Houses like the 6th, 8th, and 12th are key for predictions, while malefic planets like Saturn and Mars can suggest health challenges.",
    imageSrc: "https://iiag.co.in/media/2194/1740725782.webp",
    paragraph2:
      "Know favorable times for surgeries, recovery, or immunity boosts. Health astrology is a unique branch of Vedic astrology linking cosmic energies and planetary positions to a person’s health.",
    paragraph3:
      "Keep your energy strong and chakras aligned for lifelong wellness. Astrology has long acknowledged that cosmic events profoundly influence mental and physical well-being.",
  },
];

const HealthProblem: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50">
      <SectionService buttonLabels={buttonLabels} contentData={contentData} />
      <div className="w-full bg-white py-10">
        <Faq />
      </div>
      
    </div>
  );
};

export default HealthProblem;
