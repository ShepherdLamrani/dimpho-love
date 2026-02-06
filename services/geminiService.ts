
const staticNotes = [
  "Dimpho, every moment with you is a gift. You are the woman I've always dreamed of, and I want to spend every day showing you how much you mean to me.",
  "Your soul is a rare and beautiful thing, Dimpho. I am honored to know you and even more honored to love you. I want to build a lifetime of memories by your side.",
  "Dimpho, you make the world feel brighter just by existing in it. You aren't just a part of my life—you are the heartbeat of it. I promise to always choose you.",
  "I want to be the one who supports you, cherishes you, and loves you exactly as you are, for all of time. You are my forever, Dimpho.",
  "Dimpho, you carry a light that illuminates everything around you. Being near you makes me want to be a better person every single day."
];

export const generateRomanticNote = async (_prompt: string): Promise<string> => {
  // Simulate a small delay for a "thoughtful" feeling, but no API call is made.
  await new Promise(resolve => setTimeout(resolve, 1000));
  const randomIndex = Math.floor(Math.random() * staticNotes.length);
  return staticNotes[randomIndex];
};
