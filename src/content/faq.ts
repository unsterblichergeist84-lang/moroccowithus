export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Are the tours really private?",
    answer:
      "Yes. There are no shared departures and no other travellers joining. You have your own guide and driver, and the itinerary is built for your group alone.",
  },
  {
    question: "Why are there no prices on the site?",
    answer:
      "Because there is no fixed package to price. The cost depends on your dates, the number of travellers, where you stay and how you move around. We give you a full quote once the itinerary is real, so you are only paying for the trip you are actually taking.",
  },
  {
    question: "Can you build a trip that isn't one of these itineraries?",
    answer:
      "That is the usual case. The listed tours are starting points - most trips end up somewhere between two of them, or extend one by a few days. Tell us what you have in mind and we draft from there.",
  },
  {
    question: "How far ahead should I get in touch?",
    answer:
      "Two to three months is comfortable for spring and autumn, which are the busy windows. We can often arrange trips at shorter notice, but the best riads and desert camps fill early.",
  },
  {
    question: "When is the best time to travel?",
    answer:
      "March to May and October to November are the most comfortable overall. Summer is hot, especially in the desert and the southern valleys. Winter is quiet and the light is beautiful, but desert nights are cold and some mountain passes can close briefly after snow.",
  },
  {
    question: "Who will I be travelling with day to day?",
    answer:
      "A private driver for the whole route, and local guides in the cities who know the makers, the back lanes and the quiet hours at the busy sites. In the desert you are handed over to the camp team for the dune transfer and the night.",
  },
  {
    question: "Do you arrange flights?",
    answer:
      "We do not book international or domestic flights, but we will tell you which airports make sense for your route - often flying into one city and out of another saves a day or two of driving.",
  },
];
