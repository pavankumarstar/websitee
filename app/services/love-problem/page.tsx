import Faq from '@/app/components/home/Faq';
import SectionService from '@/app/components/service/SectionService';
import React from 'react';



const contentData = [
  {
    header: 'Common Love Issues',
    paragraph1:
      'Breakups, misunderstandings, loss of spark, or interference from third parties. Common love problems that astrology can address include communication breakdowns, lack of interest, frequent arguments, family objections, inter-caste marriage issues, long-distance relationship challenges, one-sided love, and compatibility issues. Astrology analyzes planetary positions, particularly Venus, Mars, and the 7th house, to understand the root causes of these problems and offer remedies.',
    imageSrc:
      'https://astrotalk.com/astrology-blog/wp-content/uploads/2023/07/shutterstock_323647400.jpg',
    paragraph2:
      'Love problems can create emotional distress and confusion. Poor communication can lead to misunderstandings and emotional distance. Mercury, the planet of communication, is often cited as a key factor. Its placement and aspects in the birth chart can reveal potential communication challenges.',
    paragraph3:
      'They often arise unexpectedly and require delicate resolution. A partner losing interest can stem from various factors, including a lack of passion or a decline in the initial attraction. Venus, the planet of love and beauty, is crucial here. Its placement can indicate the level of devotion and passion in a relationship.',
  },
  {
    header: 'Astrological Reasons',
    paragraph1:
      'Unfavorable Venus or Mars, Mangal dosha, or Rahu-Ketu influence can cause love turbulence. Astrology suggests that planetary positions and aspects in one’s birth chart can reveal potential reasons for love and relationship problems. These can include issues like delayed marriage, relationship conflicts, or even attracting unhealthy relationships. Specific planetary placements, such as Saturn’s influence on the 5th or 7th house, Mars’s position in certain houses, or the influence of Rahu or Ketu, can indicate potential challenges.',
    imageSrc:
      '/images/service/love/four1.jpg',
    paragraph2:
      'Your 5th and 7th house reveal deep insights into your love destiny. This condition arises when Mars is placed in certain houses in the birth chart and can lead to conflicts and disagreements in relationships. The positions and aspects of planets like Venus (love, relationships), Mars (passion, energy), Saturn (delays, obstacles), and Rahu/Ketu (illusion, karmic influences) can significantly impact romantic life.',
    paragraph3:
      'Kundali mismatches or bad transits also impact relationships. Reciting mantras, particularly those related to Venus, can attract positive energy and strengthen relationships. Specific actions like wearing gemstones, performing pujas (rituals), or making donations can appease malefic planets and improve relationships.',
  },
  {
    header: 'Spiritual Remedies',
    paragraph1:
      'We offer love problem solutions through mantra chanting, yantras, and relationship rituals. Astrology offers several spiritual remedies for love problems, including mantra recitation, worship of deities, and fasting, all aimed at attracting positive energy and resolving relationship issues. Analyzing planetary positions in one’s birth chart can reveal the root cause of problems like lack of communication, misunderstandings, or family interference, and suggest appropriate remedies.',
    imageSrc:
      '/images/service/love/four2.jpg',
    paragraph2:
      'Performing the right pooja at the right time can remove obstacles in love. Worshipping deities like Shiva-Parvati, Lakshmi-Vishnu, or Radha-Krishna is recommended to enhance love and relationships. Chanting specific mantras, particularly those related to Venus (the planet of love) or deities associated with love, can attract positive energy and blessings.',
    paragraph3:
      'Customized remedies are created after detailed chart analysis. If these planets are negatively influencing your relationship, it can lead to aggression, arguments, or family objections. Remedies may include donating red items on Tuesdays or seeking blessings from Lord Hanuman.',
  },
  {
    header: 'Rekindle Your Love',
    paragraph1:
      'With astrological support, you can rebuild trust, harmony, and affection. Astrology can offer insights and remedies for rekindling love and resolving love-related problems by examining planetary positions, particularly Venus, and other relevant houses in a birth chart. It can help understand compatibility, identify potential obstacles, and suggest personalized solutions to improve relationships.',
    imageSrc:
      'https://i.pinimg.com/736x/3c/27/4f/3c274f86d413a77e7a23e923e9e8d79a.jpg',
    paragraph2:
      'Get guidance to reunite with your partner or attract new love. Astrological remedies can be used to overcome obstacles and reunite with a lost love by understanding the influence of planets like Venus and Mars. Specific planetary combinations and placements can highlight potential obstacles in a relationship, such as communication issues, lack of intimacy, or external influences.',
    paragraph3:
      'We help you move from heartbreak to healing using divine wisdom. An astrologer can provide tailored advice based on an individual’s birth chart, offering insights into relationship patterns and suggesting personalized solutions for improvement.',
  },
];

const title = "Love Problem Solutions";
const bannerImage = "/images/services/love-problem-banner.jpg"; // Update this path as needed

const LoveProblem = () => {
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

export default LoveProblem;
