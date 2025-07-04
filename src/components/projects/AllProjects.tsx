"use client";
import { Card, Carousel } from "@/components/projects/apple-cards-carousel";
import { data, summaryCards, PROJECT_CONTENT, ProjectContent } from "@/components/projects/Data";
import React, { FC } from "react";
type CardType = typeof data[0];

interface ProjectRowProps {
  title: string;
  cards: CardType[];
}

const ProjectRow: FC<ProjectRowProps> = ({ title, cards }) => {
  // Determine if this is the Data Science row
  const isDataScience = title.toLowerCase().includes('data science');
  return (
    <div className="mb-6">
      <h3 className="max-w-7xl mx-auto mt-10 text-lg md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
        {title}
      </h3>
      <Carousel
        items={cards.map((card, index) => (
          <Card key={card.src + index} card={card} index={index} layout={true} isSummary={index === 0} />
        ))}
        {...(isDataScience ? { hideArrows: true } : {})}
      />
    </div>
  );
};

export default function AllProjects() {
  return (
    <div className="w-full h-full pt-8">
      <h2 className="max-w-7xl mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
        My Projects
      </h2>
      <div className="max-w-7xl mx-auto mb-6 px-4 text-base text-neutral-700 dark:text-neutral-300 font-sans">
        <div className="mb-2 text-center italic text-red-500">
          I have made over <strong>50 projects</strong> & I am showcasing my <strong>best 20</strong> here.
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full text-sm border-collapse border border-neutral-300 dark:border-neutral-700 mb-2">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-800">
                <th className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Category</th>
                <th className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Subdomains / Types</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 font-semibold">Deep Learning / AI</td>
                <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Auto-Encoders, RAG, Transformers, Sequential Models, Reinforcement Models, Search Algorithms</td>
              </tr>
              <tr>
                <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 font-semibold">Robotics</td>
                <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Underwater ROVs/Drones, Quadruped Bots, Animatronics</td>
              </tr>
              <tr>
                <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 font-semibold">Data Science</td>
                <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Azure DatabricksPowerBI/Tableau Dashboards, SQL/PL SQL, MapReduce</td>
              </tr>
              <tr>
                <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 font-semibold">At ITC PSPD</td>
                <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Vision Systems, Automation, Analytics, Management Tools</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-2">
          <strong className="text-[#800000] dark:text-[#800000]">How to explore:</strong> Click a summary card for a category overview, or any other card for a deep dive into a specific project.
        </div>
      </div>
      <ProjectRow title="My Deep Learning Projects" cards={deepLearningProjects} />
      <ProjectRow title="My Robotics Projects" cards={roboticsProjects} />
      <ProjectRow title="My Data Science Projects" cards={dataScienceProjects} />
      <ProjectRow title="My Projects at ITC PSPD" cards={itcProjects} />
    </div>
  );
}

// Map PROJECT_CONTENT to the expected card format
const itcProjects = [
  {
    category: 'ITC Projects',
    title: 'ITC Projects Summary',
    src: '/Projects/ITC/Picture1.png',
    content: <ProjectContent project={{ title: 'ITC Projects Summary' }} />,
  },
  {
    category: 'ITC Projects',
    title: 'SCM Dispatch Planning Tool',
    src: '/Projects/ITC/scm3.png',
    content: <ProjectContent project={{ title: 'SCM Dispatch Planning Tool' }} />,
  },
  {
    category: 'ITC Projects',
    title: 'Agentic GPT & AMS',
    src: '/Projects/ITC/ai.png',
    content: <ProjectContent project={{ title: 'Agentic GPT & AMS' }} />,
  },
  {
    category: 'ITC Projects',
    title: 'Blister Detection & Rating SYS',
    src: '/Projects/ITC/blister.png',
    content: <ProjectContent project={{ title: 'Blister Detection & Rating SYS' }} />,
  },
  {
    category: 'ITC Projects',
    title: 'Ink Marker Detection & Logging System',
    src: '/Projects/ITC/ink1.png',
    content: <ProjectContent project={{ title: 'Ink Marker Detection & Logging System' }} />,
  },
  {
    category: 'ITC Projects',
    title: 'Ink Penetration Detection & Logging System',
    src: '/Projects/ITC/pen.png',
    content: <ProjectContent project={{ title: 'Ink Penetration Detection & Logging System' }} />,
  },
  {
    category: 'ITC Projects',
    title: 'Truck Coal Unloading Cycle D&L System',
    src: '/Projects/ITC/truck.png',
    content: <ProjectContent project={{ title: 'Truck Coal Unloading Cycle D&L System' }} />,
  },
];

// Deep Learning projects: summary + 4 sub-projects as cards
const deepLearningProjects = [
  {
    category: 'Deep Learning',
    title: 'Summary',
    src: '',
    content: <ProjectContent project={{ title: 'Summary' }} />,
  },
  {
    category: 'Deep Learning',
    title: 'TTT Transformer',
    src: '/Projects/deep learning/ttt2.png',
    cover: {
      background: 'black',
      image: '/Projects/deep learning/ttt2.png',
    },
    content: <ProjectContent project={{ title: 'Multi-Dense Video Captioning Using Tri Directional Transformer' }} />,
  },
  {
    category: 'Deep Learning',
    title: 'Digital Twin for 3D Printers - AutoEncoder',
    src: '/Projects/deep learning/dt2.png',
    cover: {
      background: 'black',
      image: '/Projects/deep learning/dt2.png',
      text: 'white'
    },
    content: <ProjectContent project={{ title: 'Digital Twin for 3D Printers - AutoEncoder' }} />,
  },
  {
    category: 'Deep Learning',
    title: 'Automated Dashboard Generation Using LLMs',
    src: '',
    cover: {
      background: 'black',
      image: '/Projects/deep learning/cover-dash.png',
      text: 'white',
      size: 'w-16 h-16',
    },
    content: <ProjectContent project={{ title: 'Automated Dashboard Generation Using LLMs' }} />,
  },
  {
    category: 'Deep Learning',
    title: 'Integrated Hand Gesturing Recognition Software (ASL)',
    src: '/Projects/deep learning/ASL-cover.png',
    cover: {
      background: 'black',
      image: '/Projects/deep learning/ASL-cover.png',
      text: 'white',
    },
    content: <ProjectContent project={{ title: 'Integrated Hand Gesturing Recognition Software (ASL)' }} />,
  },
];

// Robotics projects: summary + 4 sub-projects as cards
const roboticsProjects = [
  {
    category: 'Robotics',
    title: 'Summary',
    src: '',
    content: <ProjectContent project={{ title: 'Robotics Summary' }} />,
  },
  {
    category: 'Robotics',
    title: 'Underwater ROV / Drone',
    src: '',
    content: <ProjectContent project={{ title: 'Underwater ROV / Drone' }} />,
  },
  {
    category: 'Robotics',
    title: 'Quadruped 4 Femur-Fibula Joint Bot',
    src: '',
    content: <ProjectContent project={{ title: 'Quadruped 4 Femur-Fibula Joint Bot' }} />,
  },
  {
    category: 'Robotics',
    title: 'Animatronic Eyes',
    src: '',
    content: <ProjectContent project={{ title: 'Animatronic Eyes' }} />,
  },
  {
    category: 'Robotics',
    title: 'Animatronic Mouth',
    src: '',
    content: <ProjectContent project={{ title: 'Animatronic Mouth' }} />,
  },
];

// For now, use slices of the data array as placeholders for each category
const dataScienceProjects = data.filter(card => card.category === 'Data Science');
