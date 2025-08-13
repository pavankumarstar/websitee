// app/services/love-marriage/page.tsx  (or src/pages/services/love-marriage.tsx for pages router)
import Faq from "@/app/components/home/Faq";
import SectionService from "@/app/components/service/SectionService";
import React from "react";


const buttonLabels = [
  "Facing Opposition?",
  "Astrological Conflicts",
  "Solutions We Offer",
  "Strengthen Your Bond",
];

const contentData = [
  {
    header: "Facing Opposition?",
    paragraph1:
      "Are your parents, society, or religion opposing your love marriage? Facing opposition in a love marriage can be emotionally draining, but astrology offers potential solutions by analyzing birth charts and suggesting remedies. Astrologers can identify the root causes of the opposition, such as family disapproval or relationship challenges, and offer guidance through rituals, mantras, or gemstone recommendations.",
    imageSrc:
      "https://omaveda.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flove-marriage-parents-hero.376e35c2.jpg&w=2048&q=75",
    paragraph2:
      "Love marriages often face resistance due to caste, community, or family values. They assess planetary positions and alignments to pinpoint the specific reasons for family or societal opposition, such as incompatibility or negative planetary influences. Your heart sinks as you hear these words from your mother. You've been asking yourself 'will my parents agree for love marriage'.",
    paragraph3:
      "But with divine guidance, true love can overcome all barriers. Astrologers examine the birth charts of both individuals to identify potential obstacles in their love marriage journey.",
  },
  {
    header: "Astrological Conflicts",
    paragraph1:
      "Mangal dosha, Nadi dosha, or mismatched kundalis can delay or block love marriage. Marital life may face ups and downs due to planetary influences. Conflicts, lack of understanding, or extramarital affairs often arise due to Rahu-Ketu, Mercury, Mars or Saturn's negative influence. An experienced love problem solution astrologer can help restore trust and bring happiness to married life.",
    imageSrc:
      "https://astrotalk.com/astrology-blog/wp-content/uploads/2023/05/couple-dawn-dusk-love.jpg",
    paragraph2:
      "Planetary positions like Venus and Moon play key roles in romantic success. Venus is primarily considered the planet most strongly associated with love and romance, and therefore plays a significant role in love marriages. However, other planets like Jupiter and Mars, as well as specific houses in the birth chart, also influence the dynamics of love and marriage.",
    paragraph3:
      "Understanding your charts helps remove relationship struggles before marriage. You can be certain of a love marriage when Venus joins this combination or Planets such as the Moon, Venus or Rahu are placed in the chart. The combination of Mercury-Venus, in signs of Gemini or Scorpio, positively shows Love Marriage in the Prediction.",
  },
  {
    header: "Solutions We Offer",
    paragraph1:
      "We perform poojas, mantra remedies, and planetary strengthening for love marriage. Astrological solutions for love marriage problems can involve analyzing birth charts to identify potential issues and then applying remedies like fasting on specific days, performing rituals, or wearing specific jewelry. These remedies aim to appease planetary influences that may be causing obstacles in the love marriage and to strengthen positive planetary positions.",
    imageSrc:
      "https://www.bengalijyotishcenter.com/wp-content/uploads/2025/06/Love-Marriage-specialist.jpg",
    paragraph2:
      "We guide you with muhurat dates, kundali match correction, and rituals. A detailed horoscope analysis can reveal planetary influences causing obstacles and suggest remedies to ensure a successful love marriage. Remedies, including the use of Rudraksha and Gemstones, can be suggested to reunite with a lost love.",
    paragraph3:
      "Our astrologers support couples in gaining family approval and union. Astrological remedies can help remove negativity and bring acceptance from both families in inter-caste marriages.",
  },
  {
    header: "Strengthen Your Bond",
    paragraph1:
      "Even after marriage, we offer spiritual help to maintain peace and love. To strengthen the bond in a love marriage, astrology suggests various remedies, including pleasing Venus (Shukra), examining birth charts, balancing Mars (Mangal), and appeasing the Moon (Chandra). Specific rituals like moonlit cleansing ceremonies, creating a Venus altar, and incorporating planetary hours can also deepen the emotional connection.",
    imageSrc:
      "https://astropraveenkumar.com/wp-content/uploads/2025/02/Astrology-and-Relationship-Success-Will-Your-Love-Marriage-Last.png",
    paragraph2:
      "Get yantras, gemstone suggestions, or divine protection for your relationship. Examine both partners' birth charts to understand compatibility and potential challenges. Perform cleansing rituals under the moonlight, especially during a full moon, to purify and strengthen the bond.",
    paragraph3:
      "Let astrology bless your marriage with lifelong harmony and happiness. Deep emotional connection, natural compatibility, and respect for autonomy are crucial for a lasting love marriage. Open and honest communication is essential for building trust and understanding.",
  },
];

export default function LoveMarriage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Section Service */}
      <SectionService buttonLabels={buttonLabels} contentData={contentData} />

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Faq />
        </div>
      </section>

      {/* Testimonials Section */}
      
    </div>
  );
}
