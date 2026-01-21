export interface Alien {
  id: number;
  name: string;
  species: string;
  planet: string;
  powers: string[];
  description: string;
  image: string;
  color: string;
}

export const aliensData: Alien[] = [
  {
    id: 1,
    name: "Heatblast",
    species: "Pyronite",
    planet: "Pyros",
    powers: ["Pyrokinesis", "Fire Absorption", "Cryokinesis Immunity", "Flight"],
    description: "Heatblast is a magma-based lifeform whose body is composed of a bright inner magma body covered by dark red or brown rocks.",
    image: "/images/heatblast.png",
    color: "#FF4500"
  },
  {
    id: 2,
    name: "Four Arms",
    species: "Tetramand",
    planet: "Khoros",
    powers: ["Enhanced Strength", "Enhanced Durability", "Sonic Clap", "Enhanced Jumping"],
    description: "Four Arms is a 12-foot tall, four-armed humanoid alien with incredible strength capable of lifting massive objects.",
    image: "/images/four-arms.png",
    color: "#DC143C"
  },
  {
    id: 3,
    name: "XLR8",
    species: "Kineceleran",
    planet: "Kinet",
    powers: ["Enhanced Speed", "Enhanced Agility", "Sharp Claws", "Prehensile Tail"],
    description: "XLR8 is a Kineceleran from the planet Kinet, capable of reaching speeds of over 500 mph.",
    image: "/images/xlr8.png",
    color: "#00BFFF"
  },
  {
    id: 4,
    name: "Diamondhead",
    species: "Petrosapien",
    planet: "Petropia",
    powers: ["Crystalkinesis", "Enhanced Strength", "Enhanced Durability", "Regeneration"],
    description: "Diamondhead is a silicon-based life form with a body composed of extremely durable crystal.",
    image: "/images/diamondhead.png",
    color: "#00FF7F"
  },
  {
    id: 5,
    name: "Wildvine",
    species: "Florauna",
    planet: "Flors Verdance",
    powers: ["Chlorokinesis", "Elasticity", "Regeneration", "Seed Generation"],
    description: "Wildvine is a plant-based alien that can stretch and manipulate plant life.",
    image: "/images/wildvine.png",
    color: "#228B22"
  },
  {
    id: 6,
    name: "Upgrade",
    species: "Galvanic Mechamorph",
    planet: "Galvan B",
    powers: ["Technopathy", "Technology Merging", "Optic Laser", "Regeneration"],
    description: "Upgrade is a technological being made of living machinery that can merge with and upgrade any technology.",
    image: "/images/upgrade.png",
    color: "#00FF00"
  }
];
