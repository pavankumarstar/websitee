import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";



interface ContentItem {
  header: string;
  paragraph1: string;
  imageSrc: string;
  paragraph2: string;
  paragraph3: string;
}

const contentData: ContentItem[] = [
  {
    header: "Understanding Negative Energy",
    paragraph1:
      "Negative energy surrounds us due to stress, jealousy, past karma, or spiritual imbalance. In astrology, negative energy is often linked to malefic planetary influences, weak planetary placements, or past karmic imbalances. When left unaddressed, these issues can intensify and affect different aspects of life.",
    imageSrc:
      "/images/service/energy/one1.jpg",
    paragraph2:
      "It can enter our lives through people, environments, or personal thoughts. Saturn is a karmic planet, and its Sade Sati or Dhaiya phases can bring financial troubles, mental stress, and delays in important work. Rahu and Ketu are shadow planets associated with illusions and sudden changes. Their negative influence can lead to confusion, stress, and even obstacles in career and relationships.",
    paragraph3:
      "Awareness is key to identifying its presence and neutralizing it. Negative energy can also accumulate due to incorrect Vastu placements. Rudraksha beads are powerful spiritual tools that protect against negativity and enhance inner peace.",
  },
  {
    header: "How It Affects You",
    paragraph1:
      "It causes tiredness, mental fog, sudden failures, and broken relationships. In astrology, negative energy can manifest in various ways, impacting different aspects of life depending on planetary influences and karmic imbalances.",
    imageSrc:
      "/images/service/energy/one2.jpg",
    paragraph2:
      "You may feel demotivated, constantly unlucky, or face repeated setbacks. Negative energy can manifest as fatigue, chronic pain, sleep disturbances, and weakened immunity. It can cause anxiety, depression, mood swings, and strained relationships.",
    paragraph3:
      "It lowers your vibration and affects your physical and emotional health. Planets like Saturn, Rahu, and Ketu are often associated with negative influences. Planets in unfavorable houses or aspected by malefic planets can amplify negative effects.",
  },
  {
    header: "Astrological Healing",
    paragraph1:
      "Rituals like aura cleansing, Navagraha poojas, and reciting positive mantras help immensely. Astrological healing involves using planetary remedies to cleanse and purify the energy field.",
    imageSrc:
      "https://www.animaastrologer.com/wp-content/uploads/al_opt_content/IMAGE/www.animaastrologer.com/wp-content/uploads/2025/01/negative-energy-.png.bv_resized_desktop.png.bv.webp?bv_host=www.animaastrologer.com",
    paragraph2:
      "Gemstones, rudraksha, and yantras realign your energy with universal harmony. Certain planetary aspects, such as unfavorable Rahu influence, can be addressed through specific remedies like salt rituals and prayers.",
    paragraph3:
      "Regular consultations ensure negative patterns don’t return. Donations, offerings, and meditation with Rudraksha beads can cleanse the aura and promote inner peace.",
  },
  {
    header: "Daily Energy Boosters",
    paragraph1:
      "Burning sage, using essential oils, and listening to spiritual chants uplift your energy. Meditation helps calm the mind, reduce stress, and clear stagnant energy from your aura.",
    imageSrc:
      "/images/service/energy/one3.jpg",
    paragraph2:
      "Practice meditation and gratitude rituals for positive flow. Crystals can enhance energy flow, clear blockages, and protect against negativity. Sound healing can balance and boost your aura.",
    paragraph3:
      "Astrology offers personalized tools to stay balanced and spiritually clean. Aromatherapy with oils like lavender and sandalwood can elevate your aura.",
  },
];

const title = "Negative Energy Removal";
const bannerImage = "/images/services/negative-energy-banner.jpg"; // Update this path as needed

const NegativeEnergy: React.FC = () => {
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

export default NegativeEnergy;
