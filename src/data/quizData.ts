export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    alienId: number;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you handle a stressful situation?",
    options: [
      { text: "I get fired up and tackle it head-on with passion", alienId: 1 }, // Heatblast
      { text: "I power through with brute force and determination", alienId: 2 }, // Four Arms
      { text: "I think fast and act even faster", alienId: 3 }, // XLR8
      { text: "I stay calm and unbreakable under pressure", alienId: 4 }, // Diamondhead
      { text: "I adapt and find creative solutions", alienId: 5 }, // Wildvine
      { text: "I analyze and use technology to solve it", alienId: 6 }, // Upgrade
    ],
  },
  {
    id: 2,
    question: "What's your ideal weekend activity?",
    options: [
      { text: "Extreme sports or anything with adrenaline", alienId: 1 },
      { text: "Working out at the gym or playing contact sports", alienId: 2 },
      { text: "Racing, running, or anything fast-paced", alienId: 3 },
      { text: "Rock climbing or exploring caves", alienId: 4 },
      { text: "Hiking in nature or gardening", alienId: 5 },
      { text: "Gaming or building tech projects", alienId: 6 },
    ],
  },
  {
    id: 3,
    question: "How would your friends describe you?",
    options: [
      { text: "Intense and passionate about everything", alienId: 1 },
      { text: "The reliable protector of the group", alienId: 2 },
      { text: "Always in a hurry, never slowing down", alienId: 3 },
      { text: "Tough and impossible to break", alienId: 4 },
      { text: "Flexible and able to connect with anyone", alienId: 5 },
      { text: "The tech genius who can fix anything", alienId: 6 },
    ],
  },
  {
    id: 4,
    question: "What superpower would you want most?",
    options: [
      { text: "Control over fire and heat", alienId: 1 },
      { text: "Super strength to lift anything", alienId: 2 },
      { text: "Lightning-fast speed", alienId: 3 },
      { text: "An indestructible body", alienId: 4 },
      { text: "Control over plants and nature", alienId: 5 },
      { text: "Ability to merge with and control technology", alienId: 6 },
    ],
  },
  {
    id: 5,
    question: "What's your approach to teamwork?",
    options: [
      { text: "I lead with energy and inspire others", alienId: 1 },
      { text: "I'm the muscle - I handle the heavy lifting", alienId: 2 },
      { text: "I scout ahead and report back quickly", alienId: 3 },
      { text: "I'm the shield - I protect the team", alienId: 4 },
      { text: "I connect everyone and keep things flexible", alienId: 5 },
      { text: "I optimize our tools and systems", alienId: 6 },
    ],
  },
  {
    id: 6,
    question: "What environment makes you feel most at home?",
    options: [
      { text: "Somewhere hot - I thrive in the heat", alienId: 1 },
      { text: "A gym or arena - where I can show my strength", alienId: 2 },
      { text: "Open roads or tracks - room to run", alienId: 3 },
      { text: "Mountains or rocky terrain", alienId: 4 },
      { text: "Forests and gardens - surrounded by nature", alienId: 5 },
      { text: "Surrounded by gadgets and technology", alienId: 6 },
    ],
  },
];

export const getAlienResult = (answers: number[]): number => {
  const counts: Record<number, number> = {};
  
  answers.forEach((alienId) => {
    counts[alienId] = (counts[alienId] || 0) + 1;
  });
  
  let maxCount = 0;
  let resultAlienId = 1;
  
  Object.entries(counts).forEach(([alienId, count]) => {
    if (count > maxCount) {
      maxCount = count;
      resultAlienId = parseInt(alienId);
    }
  });
  
  return resultAlienId;
};
