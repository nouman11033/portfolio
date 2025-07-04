import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';
import React from 'react';

// Enhanced project content array with all projects
export const PROJECT_CONTENT = [
  {
    title: 'ITC Projects Summary',
    description:
      'During my internship at ITC Limited, PSPD, I contributed to 11 impactful projects within the Industry 4.0 Centre of Excellence (ICoE) Team. Each project provided unique learning experiences and allowed me to apply theoretical knowledge to practical industrial scenarios. My 10-week internship (Jan–May 2025) at the ICoE Industry 4.0 Centre of Excellence, ITC PSPD - BCM Unit, focused on AI and computer vision-based solutions for operational challenges, blending technical development, data analysis, and cross-functional collaboration to enhance efficiency and quality in paper manufacturing.',
    techStack: [
      'YOLO',
      'EfficientNet',
      'B7',
      'Flask',
      'Django',
      'React',
      'Tailwind CSS',
      'AWS SageMaker',
      'PostgreSQL',
      'Historians',
      'SAP',
      'SCM',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/Picture1.png',
        alt: 'ITC Internship Summary',
        style: { height: '120px', width: '180px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
      },
    ],
  },
  {
    title: 'SCM Dispatch Planning Tool',
    description: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Overview</h3>
          <p>
            A two-part web-based tool that automates daily clearance generation and truck load mapping across all 8 regions. It applies region-specific business rules in seconds, with dedicated pages for each region and a central analytics dashboard for real-time and historical insights.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Benefits</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><b>Massive Time Savings:</b> Reduced regional clearance planning from over 40 hours daily to under 1 minute.</li>
            <li><b>Desk-Agnostic Operation:</b> Any desk manager can operate any region's clearance logic without region-specific training.</li>
            <li><b>Integrated Pipeline:</b> Created seamless linkage between clearance and truck load planning.</li>
            <li><b>Adaptability:</b> Designed for future constraints and business rule changes without architectural overhauls.</li>
            <li><b>AI + Human Synergy:</b> Combines rule-based logic with AI reasoning for downstream RCA and planning.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Master Roster - Location Sets</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li>User sees all available cities after data upload.</li>
            <li>Cities are organized into sets (e.g., Maharashtra Set 1, Gujarat Set 2, Destinations).</li>
            <li>Drag-and-drop interface lets users move cities between sets visually.</li>
            <li>User clicks "Save" to store the sets.</li>
            <li>Sets are sent to the backend and saved as a DataFrame in the session.</li>
            <li>These sets define how trucks will be built in the next step.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Master Roster - Truck Build</h3>
          <p className="mb-2">The feature is the heart of the logistics optimization. It takes the defined location sets and assigns line items (orders) to trucks, following all operational constraints and truck building standards.</p>
          <div className="overflow-x-auto">
            <table className="min-w-[400px] text-sm border-collapse border border-neutral-300 dark:border-neutral-700 mb-2">
              <thead>
                <tr className="bg-neutral-100 dark:bg-neutral-800">
                  <th className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Build Mode</th>
                  <th className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 font-semibold">Auto</td>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Fast, simple grouping</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 font-semibold">Greedy</td>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Fills each truck as much as possible</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 font-semibold">Best</td>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Tries to find the most optimal grouping (may be slower)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>For each set:
              <ul className="list-disc pl-6">
                <li>Data is filtered for cities in that set.</li>
                <li>Data is split into "Identify" (priority) and "Non-Identify".</li>
                <li>Further split by customer for better grouping.</li>
                <li>Trucks are built with these constraints:
                  <ul className="list-disc pl-6">
                    <li>Weight: 16,000kg or 21,000kg (±5%).</li>
                    <li>Max 5 pickups per truck.</li>
                    <li>Prefer single-customer trucks, but can club two if needed.</li>
                    <li>For "Destinations" set, don't club destinations in a truck.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Built trucks are shown in the UI.</li>
            <li>Each truck has a <b>Freeze</b> button: Freezing locks the truck (line items can't be reassigned). "Freeze All" is available for batch freezing.</li>
            <li>Leftover line items (not assigned to a truck) are shown separately.</li>
            <li>User can export frozen trucks and leftovers as Excel files.</li>
          </ul>
        </div>
      </div>
    ),
    techStack: ['Node.js', 'HTML5', 'Tailwind CSS', 'React', 'Zustand', 'Django', 'Python'],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/scm3.png',
        alt: 'SCM Dashboard Overview',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'SCM Dashboard Overview',
      },
    ],
    sliderImages: [
      {
        src: '/Projects/ITC/scm1.png',
        alt: 'SCM Tool Screenshot 1',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'SCM Tool Screenshot 1',
      },
      {
        src: '/Projects/ITC/scm2.png',
        alt: 'SCM Tool Screenshot 2',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'SCM Tool Screenshot 2',
      },
    ],
  },
  {
    title: 'Blister Detection & Rating SYS',
    description: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Overview</h3>
          <p>
            Developed an automated blister detection system to replace manual inspection of 10x5 cm Prubeau-Samples, eliminating subjectivity and inter-lab variability. The system uses a Basler industrial camera to capture high-resolution images without requiring the strip to be folded, with a custom U-instrument setup inside a blackbox.<br/>
            <br/>
            A Django-based web application allows users to either upload images or connect camera feed.<br/>
            Two core processing methods were implemented:<br/>
            1. First using Segmentation & HOGs techniques (erosion, dilation, and contouring) to segment & quantify blisters.<br/>
            2. The system outputs blister count, total area, and a standardized quality grade (1, 3, or 9).
          </p>
        </div>
      </div>
    ),
    techStack: [
      'Django',
      'Python',
      'OpenCV',
      'Basler Camera',
      'Segmentation',
      'HOGs',
      'Image Processing',
      'Web Application',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/blister.png',
        alt: 'Blister Detection Main',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Blister Detection Main',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/blister3.png',
        alt: 'Blister Detection Standalone 2',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Blister Detection Standalone 2',
        height: 320,
        width: 700,
      },
    ],
    sliderImages: [
      {
        src: '/Projects/ITC/blister1.png',
        alt: 'Blister Detection Slider 1',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
      },
      {
        src: '/Projects/ITC/blister2.png',
        alt: 'Blister Detection Slider 2',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
      },
    ],
    video: '/Projects/ITC/blistervid.mp4',
    customMedia: true,
    skipDefaultGallery: true,
  },
  {
    title: 'Ink Marker Detection & Logging System',
    description: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Overview</h3>
          <p>
            Developed a real-time Ink Marker Counting System for a high-speed printing process involving a 300 FPS camera and a 300ms roll of jumbo paper. The objective was to accurately detect and count ink markers at extremely high speeds with minimal latency.<br/>
            Trained YOLO model on labeled image data to detect and track ink markers reliably under challenging motion and lighting conditions. The model was optimized for rapid inference to ensure accurate detection without bottlenecks in the live feed & excel Logging.
          </p>
        </div>
      </div>
    ),
    techStack: [
      'Streamlit',
      'Roboflow',
      'Python',
      'Flask',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/ink1.png',
        alt: 'Ink Marker Detection Main',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Ink Marker Detection Main',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/ink.png',
        alt: 'Ink Marker Detection Flow',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Ink Marker Detection Flow',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/scm4.png',
        alt: 'NDA',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'NDA',
        height: 320,
        width: 700,
      },
    ],
    skipDefaultGallery: true,
  },
  {
    title: 'Ink Penetration Detection & Logging System',
    description: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Overview</h3>
          <p>
            Developed a real-time ink penetration detection system using a Flask web application integrated with a U-Net deep learning model. The application is designed to assist lab instructors in monitoring ink penetration through paper samples.<br/>
            <br/>
            The user interface allows input of a sample name, after which a live camera feed is displayed. This feed is processed in real time, with a U-Net segmentation model identifying and highlighting the areas of ink penetration, specifically focusing on blue pixels. A percentage overlay on the video feed shows the proportion of the image affected by ink.
          </p>
        </div>
      </div>
    ),
    techStack: [
      'Flask',
      'U-Net',
      'Deep Learning',
      'Python',
      'OpenCV',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/pen.png',
        alt: 'Ink Penetration Detection Main',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Ink Penetration Detection Main',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/pen1.png',
        alt: 'Ink Penetration Detection Flow',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Ink Penetration Detection Flow',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/scm4.png',
        alt: 'NDA',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'NDA',
        height: 320,
        width: 700,
      },
    ],
    skipDefaultGallery: true,
  },
  {
    title: 'Truck Coal Unloading Cycle D&L System',
    description: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Overview</h3>
          <p>
            Developed a real-time ink penetration detection system using a Flask web application integrated with a U-Net deep learning model. The application is designed to assist lab instructors in monitoring ink penetration through paper samples.<br/>
            <br/>
            The user interface allows input of a sample name, after which a live camera feed is displayed. This feed is processed in real time, with a U-Net segmentation model identifying and highlighting the areas of ink penetration, specifically focusing on blue pixels. A percentage overlay on the video feed shows the proportion of the image affected by ink.
          </p>
        </div>
      </div>
    ),
    techStack: [
      'Flask',
      'U-Net',
      'Deep Learning',
      'Python',
      'OpenCV',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/truck.png',
        alt: 'Truck Coal Unloading Cycle Main',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Truck Coal Unloading Cycle Main',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/truck1.png',
        alt: 'Truck Coal Unloading Cycle Flow',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Truck Coal Unloading Cycle Flow',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/scm4.png',
        alt: 'NDA',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'NDA',
        height: 320,
        width: 700,
      },
    ],
    skipDefaultGallery: true,
  },
  {
    title: 'Agentic GPT & AMS',
    description: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Overview</h3>
          <p>
            Designed and developed a Prompt Retrieval System with robust Access Management to streamline interaction with ITC's internally hosted GPT model.<br/>
            1. The frontend was built using Next.js and React.js, styled with Tailwind CSS for a clean and responsive UI.<br/>
            2. The backend was developed with Node.js and Express.js, integrating PostgreSQL via Prisma for structured prompt storage and role-based user data.<br/>
            3. JWT-based authentication ensures secure access and session handling, maintaining system integrity.<br/>
            <br/>
            A secure API layer connects the frontend to the internally deployed ITC GPT model, enabling real-time prompt processing and AI response retrieval. An Access Management System with Role-Based Access Control (RBAC) was implemented to define user permissions and restrict features accordingly. Admins can manage users and monitor prompt activity via a dedicated dashboard.
          </p>
        </div>
      </div>
    ),
    techStack: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'JWT Authentication',
      'RBAC',
      'API Layer',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/ai.png',
        alt: 'Agentic GPT & AMS Main',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Agentic GPT & AMS Main',
        height: 320,
        width: 700,
      },
    ],
    sliderImages: [
      {
        src: '/Projects/ITC/ai1.png',
        alt: 'Agentic GPT & AMS Screenshot 1',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
      },
      {
        src: '/Projects/ITC/ai2.png',
        alt: 'Agentic GPT & AMS Screenshot 2',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
      },
    ],
    customMedia: true,
    skipDefaultGallery: true,
  },
  {
    title: 'Defai',
    description:
      "We Win ETHOXford hackathon by building DEFAI. DEFAI stands for Decentralized Finance Artificial Intelligence. It's an AI-powered chat interface that simplifies on-chain operations on the Avalanche blockchain by allowing users to interact using natural language. This makes complex DeFi operations accessible even for those with limited technical expertise.",
    techStack: [
      'Next.js',
      'TailwindCSS',
      'shadcn-ui',
      'Vercel AI SDK',
      'TypeScript',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://dorahacks.io/buidl/22605',
      },
      {
        name: 'github',
        url: 'https://github.com/toukoum/DEFAI',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7299337190151483392/',
      },
      {
        name: 'Youtube Video',
        url: 'https://www.youtube.com/watch?v=N9O7los4-ng&t=34s&ab_channel=Toukoum',
      }
    ],
    images: [
      {
        src: '/defai1.png',
        alt: 'Landing Page of Defai',
      },
      {
        src: '/defai2.png',
        alt: 'Confirmation popup of Defai',
      },
      {
        src: '/defai3.png',
        alt: 'Chatbot of Defai',
      },
      {
        src: '/defai4.jpeg',
        alt: 'Winner team',
      },
    ],
  },
  {
    title: '3d Pong Game',
    description:
      "Transcendance is the final project of my 42 cursus. It's a 3D pong game with multiplayer capabilities, user authentication, and real-time gameplay. We had to do everything from scratch, so it was pretty challenging and we learned a lot.",
    techStack: ['Django', 'Python', 'JavaScript', 'Websockets', 'PostgreSQL', 'Docker', 'Nginx', 'Web3', 'Solidity'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/Transcendance',
      },
    ],
    images: [
      {
        src: '/trans1.png',
        alt: 'Transcendance landing page',
      },
      {
        src: '/trans2.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans3.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans4.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans5.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans6.png',
        alt: 'Transcendance game',
      }

    ],
  },
  {
    title: 'Minishell',
    description:
      "Minishell is a project that aims to create a simple shell. It's a great introduction to process creation and management in C, offering fundamental Unix command-line functionality. This was a very challenging project, but I learned a lot from it.",
    techStack: ['C', 'Unix', 'Bash'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/Michelle-42',
      },
    ],
    images: [
      {
        src: '/minishell1.png',
        alt: 'Minishell landing page',
      }
    ],
  },
  {
    title: 'Old Portfolio',
    description:
      'My previous traditional portfolio built with vanilla HTML, CSS and JS with GSAP animations for a smooth and interactive user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    date: '2022',
    links: [
      {
        name: 'Website',
        url: 'https://toukoum.github.io/oldPortfolio/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/portfolio',
      },
    ],
    images: [
      {
        src: '/oldport1.png',
        alt: 'Old Portfolio landing page',
      },
      {
        src: '/oldport2.png',
        alt: 'Old Portfolio projects',
      }
    ],
  },
  {
    title: 'Summary',
    description:
      'Welcome to my Deep Learning | AI page! As a Data Science student, I have developed a deep understanding of data and its potential to drive insights. I have a strong foundation in various deep learning architectures, including Auto-Encoders, Transformers, Sequential Models, Reinforcement Learning, and Search Algorithms. This broad experience allows me to tackle a wide range of challenges with confidence.',
    techStack: [
      'Auto-Encoders',
      'Transformers',
      'Sequential Models',
      'Reinforcement Learning',
      'Search Algorithms',
    ],
    date: '2025',
    links: [],
    images: [],
    projects: [
      {
        name: 'Multi-Dense Video Captioning Using Tri Directional Transformer',
        description: 'Tri-Directional Transformer with Proposal Generator (TMT) for dense video captioning using both visual and audio cues. Achieved SOTA on ActivityNet Captions Dataset.',
        techStack: 'PyTorch, Transformers, Audio/Video Processing, ActivityNet Dataset',
      },
      {
        name: 'Digital Twin for 3D Printers - AutoEncoder',
        description: 'Predicts future failures in 3D printing using vibration data and LSTM Autoencoder. GUI built with Azure.',
        techStack: 'Python, LSTM, Autoencoder, Azure, DSP, K-Means',
      },
      {
        name: 'Integrated Hand Gesturing Recognition Software (ASL)',
        description: `An Integrated Hand Gesturing Recognition Software With The ASL (American Sign Language) Manuscript Using LSTM Model.\n\nThe proposed system is a sign language recognition system that uses convolutional neural networks and LSTM to identify hand gestures and give out a sentence for the non-impaired to understand.\n\nThe system works by capturing video, converting it into frames, segmenting the hand pixels, and comparing the resulting images with a pre-trained model. This is expected to lead to more accurate recognition of the sign language letters/words/poses.`,
        techStack: [
          'Python',
          'OpenCV',
          'CNN',
          'LSTM',
          'Video Processing',
          'Image Segmentation',
        ],
      },
      {
        name: 'Automated Dashboard Generation Using LLMs',
        description: 'Framework for real-time, adaptive data visualizations using LLMs for context-aware dashboards.',
        techStack: 'Python, LLMs, Data Visualization, GUI',
      },
    ],
  },
  {
    title: 'Multi-Dense Video Captioning Using Tri Directional Transformer',
    shortTitle: 'TTT Transformer',
    description: `Multi -Dense Video Captioning Using Tri Directional Transformer\n\nIn the domain of dense visual captioning, the integration of audio and visual data within the transformer architecture has emerged as a pivotal research area.\n\nMy Model uses a Tri-Directional Transformer with Proposal Generator (TMT) for dense video captioning.\n\nIt combines two channels of inputs, visual and audio information, to conduct dense video captioning.\n\nBy leveraging both visual and audio cues, TMT achieves state-of-the-art performance on the ActivityNet Captions Dataset, which contains thousands of videos paired with captions associated with certain timeframes.`,
    techStack: [
      'VGGish (audio features)',
      'I3D (visual features)',
      'GloVe (caption tokens)',
      'Bi-modal encoder/decoder',
      'PyTorch',
      'Proposal Generator',
      'ActivityNet Captions Dataset',
      'Ubuntu 16.04/18.04',
      'NVIDIA GPU',
      'Conda',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/nouman11033/V-A-Captioning-Tri-Directional-Transformer-no-changes',
      },
      {
        name: 'Feature Extraction Repo',
        url: 'https://github.com/v-iashin/video_features',
      },
    ],
    images: [
      {
        src: '/Projects/deep learning/ttt2.png',
        alt: 'TTT Transformer architecture',
        style: { height: '420px', width: '900px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'TTT Transformer architecture',
      },
      {
        src: '/Projects/deep learning/ttt1.png',
        alt: 'TTT Transformer results',
        style: { height: '220px', width: '900px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'TTT Transformer results',
      },
    ],
  },
  {
    title: 'Digital Twin for 3D Printers - AutoEncoder',
    shortTitle: '3D Printer Digital Twin',
    description: `This workbook describes a system for predicting future failures in 3D printing using vibration data.\n\nDeep PSD Analysis\n\nMy neural network anomaly analysis is able to flag the upcoming extruder malfunction well in advance of the actual physical bearing failure by detecting when the sensor readings begin to diverge from normal operational values.`,
    highlights: [
      'STEP 1: Data Collection (2 sensors: bed & extruder, 4 cases, infill range 30-100%, 1kHz frequency)',
      'STEP 2: Preprocessing (Base Domains)',
      'STEP 3: DSP (Digital Signal Processing)',
      'STEP 4: K-Means',
      'STEP 5: Preprocessing (Final Domains)',
      'STEP 6: Autoencoder - LSTM',
      'STEP 7: Threshold Based Output',
      'STEP 8: AZURE: GUI INTERFACE'
    ],
    techStack: [
      'STEP 1: DATA COLLECTION (2 vibration sensors, 4 cases, 1kHz frequency)',
      'STEP 2: PREPROCESSING (STAGE 1)',
      'STEP 3: DSP DIGITAL SIGNAL PROCESSING',
      'STEP 4: KMEANS',
      'STEP 5: PREPROCESS 2ND STAGE',
      'STEP 6: MODEL (Autoencoder-LSTM)',
      'STEP 7: LOSS',
      'STEP 8: THRESHOLD OUTPUT',
      'Azure GUI'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/nouman11033/dashboard-digital-twin',
      },
    ],
    images: [
      {
        src: '/Projects/deep learning/dt3.png',
        alt: 'AutoEncoder System Overview',
        style: { height: '440px', width: '900px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'AutoEncoder System Overview'
      },
      {
        src: '/Projects/deep learning/dt2.png',
        alt: 'Vibration Data Analysis',
        style: { height: '440px', width: '900px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Vibration Data Analysis'
      }
    ],
    cover: {
      background: 'black',
      image: '/Projects/deep learning/dt2.png',
      text: 'white'
    }
  },
  {
    title: 'Automated Dashboard Generation Using LLMs',
    shortTitle: 'Automated Dashboard',
    description: `The project focuses on building a framework that can automatically gather, process, and analyze data, providing users with real-time, adaptive visualizations.\n\nThe use of LLMs ensures that the dashboard adapts not only to changing datasets but also to the context and preferences of individual users, offering a highly customized and efficient data analysis experience.\n\nThis is a Streamlit app.`,
    techStack: [
      'Python',
      'Streamlit',
      'Large Language Models (LLMs)',
      'Data Visualization',
      'Real-time Analytics',
      'Adaptive Dashboards'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/nouman11033/dashboard-digital-twin',
      },
    ],
    images: [
      {
        src: '/Projects/deep learning/dash1.png',
        alt: 'Automated Dashboard App',
        style: { height: '640px', width: '500px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Automated Dashboard Streamlit App',
      }
    ],
  },
  {
    title: 'Integrated Hand Gesturing Recognition Software (ASL)',
    description: `An Integrated Hand Gesturing Recognition Software With The ASL (American Sign Language) Manuscript Using LSTM Model.\n\nThe proposed system is a sign language recognition system that uses convolutional neural networks and LSTM to identify hand gestures and give out a sentence for the non-impaired to understand.\n\nThe system works by capturing video, converting it into frames, segmenting the hand pixels, and comparing the resulting images with a pre-trained model. This is expected to lead to more accurate recognition of the sign language letters/words/poses.`,
    techStack: [
      'Python',
      'OpenCV',
      'CNN',
      'LSTM',
      'Video Processing',
      'Image Segmentation',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/nouman11033/asl',
      },
    ],
    images: [
      {
        src: '/Projects/deep learning/ASL-FlowChart.png',
        alt: 'ASL System Flowchart',
        style: { height: '340px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'System Flowchart for ASL Gesture Recognition',
      },
    ],
  },
  {
    title: 'Robotics Summary',
    description: `Welcome to My Robotics Project Cards. As an Engineering student with a passion for innovation, my projects showcase my ability to design and implement advanced robotic systems that solve real-world problems.`,
    highlights: [
      'Underwater ROV / Drone: Exploring aquatic environments with precision and control.',
      'Quadruped 4 Femur-Fibula Joint Bot: Building advanced robotic creatures with a focus on mobility and flexibility.',
      'Animatronic Mouth: Mapping phonics and syllables for realistic speech and interaction.',
      'Animatronic Eyes: Implementing face tracking and visualization for expressive and responsive robotic behavior.'
    ],
    techStack: [],
    date: '2024',
    links: [],
    images: [],
  },
  {
    title: 'Underwater ROV / Drone',
    description: 'To engineer a miniature underwater ROV capable of effectively navigating and operating at substantial depths while maintaining optimal pressure resistance.',
    highlights: [
      'Design Overview:',
      '• The frame contains waterproof casings to hold electronics.',
      '• The frame holds all components in a good relative orientation.',
      '• The frame is hydrodynamic.',
      '• The frame has a good configuration of motors to maintain 5 DOF\'s.',
      '• The frame is neutrally buoyant.'
    ],
    techStack: [],
    date: '2024',
    links: [],
    images: [
      {
        src: '/Projects/robotics/ROV-Methodology.avif',
        alt: 'ROV Methodology',
        style: { height: '520px', width: '900px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'ROV Methodology',
      },
      {
        src: '/Projects/robotics/ROV-me.png',
        alt: 'ROV',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'ROV with Author',
      }
    ],
  },
  {
    title: 'Quadruped 4 Femur-Fibula Joint Bot',
    description: 'This is an ongoing 4-part project. The bot will have the following characteristics: Perceiving & Visualization, Imagination based on Tri-Model Transformer, Auto-Balancing, Animatronic Eyes & Mouth, Reasoning / Decision-Mapping Processes. The ones highlighted are completed and listed down as other projects.',
    highlights: [
      'Perceiving & Visualization',
      'Imagination based on Tri-Model Transformer',
      'Auto-Balancing',
      'Animatronic Eyes & Mouth',
      'Reasoning / Decision-Mapping Processes',
    ],
    techStack: [],
    date: '2024',
    links: [],
    sliderImages: [
      {
        src: '/Projects/robotics/fm1.png',
        alt: 'Quadruped Bot - Frame 1',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Frame 1',
      },
      {
        src: '/Projects/robotics/fm2.jpg',
        alt: 'Quadruped Bot - Frame 2',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Frame 2',
      },
      {
        src: '/Projects/robotics/fm3.png',
        alt: 'Quadruped Bot - Frame 3',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Frame 3',
      },
    ],
    pdfs: ['/Projects/robotics/quad.pdf'],
  },
  {
    title: 'Animatronic Eyes',
    description: `The project is about Implementing face tracking and visualization for expressive and responsive robotic behavior.\n\nEYE-CONTACT MECHANISM:\nThe person sensor detects human and animal movements. Humans emit infrared radiation. When a human comes into the sensing range of the PIR sensor, these changes in radiations are detected by the PIR sensor which causes the output of the sensor to go high. We will not be using a PIR sensor because we cannot position the sensor in an appropriate place for the eyes to take an input.\n\nPERSEPTION MODEL:\nTri - Directional Model (Explained in the DeepLearning section of this portfolio)`,
    highlights: [
      'Face tracking and visualization for expressive and responsive robotic behavior',
      'Eye-contact mechanism using person sensor (not PIR)',
      'Tri-Directional Perception Model (see Deep Learning section)'
    ],
    techStack: [],
    date: '2024',
    links: [],
    images: [
      {
        src: '/Projects/robotics/eyes.avif',
        alt: 'Animatronic Eyes',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Animatronic Eyes',
      },
    ],
  },
  {
    title: 'Animatronic Mouth',
    description: `This project explores the mesmerising world of animatronic systems, specifically focusing on creating an animatronic feline mouth. It merges mechanical engineering and electronics to bring life to inanimate objects.`,
    highlights: [
      'Arduino UNO microcontroller for logical programming in C',
      'Adafruit PWM PCA9685 16-Channel Servo Driver',
      'MG 90S Servo Motors for light linkage motion',
      'MG 996R Servo Motors for Heavy linkage motion',
      'PLA 3D printed design',
    ],
    techStack: [],
    date: '2024',
    links: [],
    video: '/Projects/robotics/mouthvid.mp4',
    pdfs: ['/Projects/robotics/mouth.pdf'],
  },
  {
    category: 'Data Science',
    title: 'HR - Tableau Dashboard',
    description: `I started this project to learn how to maximise visualisations in a small data domain. The Dashboard gives an oriented view of slicers like:
1. Department
2. Job roles
3. Demography (Gender/Age Group/Edu)
4. Survy Scores

vs

1. Recent Attrition
2. Attrition vs Retention

The Dashboard Dataset Consists of:
1. x7 KPI's
2. 17 Trends
3. 15 Demographs
4. 25 Columns
5. 12 Calculated Columns`,
    highlights: [],
    techStack: [],
    date: '2024',
    links: [],
    sliderImages: [
      {
        src: '/Projects/datascience/hr.png',
        alt: 'HR Tableau Dashboard 1',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'HR Dashboard Overview',
      },
      {
        src: '/Projects/datascience/h2.png',
        alt: 'HR Tableau Dashboard 2',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'HR Dashboard Slicers',
      },
    ],
  },
  {
    category: 'Data Science',
    title: 'Friends Dashboard Remake by George Koursaros',
    description: `I tried reimplementing a existing dashboard by George Koursaros from Tableau to PowerBi.\nLearn how multivariate Pie chart can be linked as dot clusters in a line graph\n\nThe graph includes slicers like :\n1. IMDB rating\n2. Viewer-Ship\n3. Appearances\n\nvs\n\n1. Episodes\n2. Seasons\n\n2 images ; friends.png and friends1.png ,,, make the images with the sliders and sizing as in hr dashboard`,
    highlights: [],
    techStack: [],
    date: '2024',
    links: [],
    sliderImages: [
      {
        src: '/Projects/datascience/friends.png',
        alt: 'Friends Dashboard 1',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Friends Dashboard Overview',
      },
      {
        src: '/Projects/datascience/friends1.png',
        alt: 'Friends Dashboard 2',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Friends Dashboard Slicers',
      },
    ],
  },
  {
    category: 'Data Science',
    title: 'Time-series Data Dashboard',
    description: `I have always been curious about hot FFT reverts back to the original signal in time domain.\nIn this project I divided in on how to visualise specific patterns between time & frequency domains.\nImplemented a similar approach in the DSP project in DeepLearning Portfolio`,
    highlights: [],
    techStack: [],
    date: '2024',
    links: [],
    sliderImages: [
      {
        src: '/Projects/datascience/dsp1.png',
        alt: 'Time-series Dashboard 1',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Time-Series Dashboard Overview',
      },
      {
        src: '/Projects/datascience/dsp2.png',
        alt: 'Time-series Dashboard 2',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Time-Series Dashboard Patterns',
      },
    ],
  },
  {
    title: 'Data Science Summary',
    description: 'Welcome to my DataScience Cards. My projects in this domain demonstrate my ability of leveraging data to derive meaningful insights and make informed decisions. By combining my technical skills in data manipulation, visualization, and analysis, I strive to deliver data-driven solutions that empower organizations to make informed decisions and drive growth.',
    techStack: [],
    date: '2025',
    links: [],
    images: [],
  },
  {
    category: 'Data Science',
    title: 'Ink Marker Detection & Logging System',
    description: `Developed a real-time Ink Marker Counting System for a high-speed printing process involving a 300 FPS camera and a 300ms roll of jumbo paper. The objective was to accurately detect and count ink markers at extremely high speeds with minimal latency.\n\nTrained YOLO model on labeled image data to detect and track ink markers reliably under challenging motion and lighting conditions. The model was optimized for rapid inference to ensure accurate detection without bottlenecks in the live feed & excel Logging.`,
    techStack: [
      'Streamlit',
      'Roboflow',
      'Python',
      'Flask',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/ink1.png',
        alt: 'Ink Marker Detection Main',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Ink Marker Detection Main',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/ink.png',
        alt: 'Ink Marker Detection Standalone 2',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Ink Marker Detection Standalone 2',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/scm4.png',
        alt: 'NDA',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'NDA',
        height: 320,
        width: 700,
      },
    ],
    skipDefaultGallery: true,
  },
  {
    category: 'Data Science',
    title: 'Truck Coal Unloading Cycle D&L System',
    description: `Developed a real-time ink penetration detection system using a Flask web application integrated with a U-Net deep learning model. The application is designed to assist lab instructors in monitoring ink penetration through paper samples.\n\nThe user interface allows input of a sample name, after which a live camera feed is displayed. This feed is processed in real time, with a U-Net segmentation model identifying and highlighting the areas of ink penetration, specifically focusing on blue pixels. A percentage overlay on the video feed shows the proportion of the image affected by ink.`,
    techStack: [
      'Flask',
      'U-Net',
      'Deep Learning',
      'Python',
      'OpenCV',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/truck.png',
        alt: 'Truck Coal Unloading Cycle Main',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Truck Coal Unloading Cycle Main',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/truck1.png',
        alt: 'Truck Coal Unloading Cycle Flow',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'Truck Coal Unloading Cycle Flow',
        height: 320,
        width: 700,
      },
      {
        src: '/Projects/ITC/scm4.png',
        alt: 'NDA',
        style: { height: '320px', width: '700px', objectFit: 'contain', borderRadius: '12px', background: 'white', border: '1px solid #e5e7eb' },
        caption: 'NDA',
        height: 320,
        width: 700,
      },
    ],
    skipDefaultGallery: true,
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
  projects?: { name: string; description: string; techStack: string }[];
  highlights?: string[];
  video?: string;
  pdfs?: string[];
  sliderImages?: { src: string; alt: string; style: React.CSSProperties; caption: string }[];
  skipDefaultGallery?: boolean;
}

export const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          {/* Description: string or React element */}
          {typeof projectData.description === 'string' ? (
            <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
              {projectData.description}
            </p>
          ) : (
            projectData.description
          )}

          {/* Custom highlights list for Robotics Summary */}
          {projectData.title === 'Robotics Summary' && Array.isArray(projectData.highlights) && (
            <ul className="mt-4 mb-2 space-y-3">
              {projectData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-base text-neutral-800 dark:text-neutral-200">
                  <span className="mt-1 text-blue-500">🤖</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Custom highlights list for Digital Twin */}
          {projectData.title === 'Digital Twin for 3D Printers - AutoEncoder' && Array.isArray(projectData.highlights) && (
            <ul className="mt-4 mb-2 space-y-3">
              {projectData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-base text-neutral-800 dark:text-neutral-200">
                  <span className="mt-1 text-green-600">🛠️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Custom highlights list for Underwater ROV / Drone */}
          {projectData.title === 'Underwater ROV / Drone' && Array.isArray(projectData.highlights) && (
            <ul className="mt-4 mb-2 space-y-3">
              {projectData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-base text-neutral-800 dark:text-neutral-200">
                  <span className="mt-1 text-blue-500">🚤</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Custom ordered media for SCM Dispatch Planning Tool: main image, secondary image, then slider of scm2 and scm1 */}
      {projectData.title === 'SCM Dispatch Planning Tool' && projectData.images && projectData.images.length > 0 && projectData.sliderImages && projectData.sliderImages.length > 0 && (
        <div className="space-y-8">
          {/* Main image (scm3.png) */}
          {(() => {
            const imagesArr = (Array.isArray(projectData.images) ? projectData.images : []) as { src: string; alt: string; style?: React.CSSProperties; caption?: string }[];
            const image = imagesArr.length > 0 ? imagesArr[0] : undefined;
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}

          {/* Secondary image (scm4.png) */}
          {(() => {
            // Use the same style as scm3.png
            const refImagesArr = (Array.isArray(projectData.images) ? projectData.images : []) as { src: string; alt: string; style?: React.CSSProperties; caption?: string }[];
            const refImage = refImagesArr.length > 0 ? refImagesArr[0] : undefined;
            if (!refImage) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in refImage ? (refImage as any).width + 'px' : (hasStyle(refImage) && refImage.style.width ? refImage.style.width : undefined);
            const height = 'height' in refImage ? (refImage as any).height + 'px' : (hasStyle(refImage) && refImage.style.height ? refImage.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(refImage) ? refImage.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(refImage) ? refImage.style.background : undefined,
                  border: hasStyle(refImage) ? refImage.style.border : undefined,
                  borderRadius: hasStyle(refImage) ? refImage.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={'/Projects/ITC/scm4.png'}
                  alt={'SCM Dashboard Secondary'}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(refImage) ? refImage.style.objectFit : undefined,
                    borderRadius: hasStyle(refImage) ? refImage.style.borderRadius : undefined,
                  }}
                />
                <div className="text-center text-xs text-neutral-600 mt-2">SCM Dashboard Secondary</div>
              </div>
            );
          })()}

          {/* Slider for scm2.png and scm1.png */}
          {(() => {
            // Only use the two images in the slider, in order: scm2.png, scm1.png
            const sliderImages = [
              ...(Array.isArray(projectData.sliderImages) ? projectData.sliderImages.filter(img => img && typeof img === 'object') : []),
            ] as { src: string; alt: string; style?: React.CSSProperties; caption?: string }[];
            const filteredSliderImages = [
              sliderImages.find(img => img.src.includes('scm2.png')),
              sliderImages.find(img => img.src.includes('scm1.png')),
            ].filter(Boolean) as { src: string; alt: string; style?: React.CSSProperties; caption?: string }[];
            if (filteredSliderImages.length === 0) return null;
            // Simple slider logic
            const [current, setCurrent] = React.useState(0);
            const currentImage = filteredSliderImages[current];
            if (!currentImage) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = hasStyle(currentImage) && currentImage.style.width ? currentImage.style.width : undefined;
            const height = hasStyle(currentImage) && currentImage.style.height ? currentImage.style.height : undefined;
            return (
              <div className="flex flex-col items-center my-6">
                <div
                  style={{
                    width,
                    minHeight: height,
                    ...(hasStyle(currentImage) ? currentImage.style : {}),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: hasStyle(currentImage) ? currentImage.style.background : undefined,
                    border: hasStyle(currentImage) ? currentImage.style.border : undefined,
                    borderRadius: hasStyle(currentImage) ? currentImage.style.borderRadius : undefined,
                  }}
                  className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    style={{
                      width,
                      height,
                      objectFit: hasStyle(currentImage) ? currentImage.style.objectFit : undefined,
                      borderRadius: hasStyle(currentImage) ? currentImage.style.borderRadius : undefined,
                    }}
                  />
                  {'caption' in currentImage && currentImage.caption && (
                    <div className="text-center text-xs text-neutral-600 mt-2">{currentImage.caption}</div>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  {filteredSliderImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-neutral-300'}`}
                      aria-label={`Show image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Custom ordered media for Agentic GPT & AMS: main image, then slider of ai1 and ai2 */}
      {projectData.title === 'Agentic GPT & AMS' && projectData.images && projectData.images.length > 0 && projectData.sliderImages && projectData.sliderImages.length > 0 && (
        <div className="space-y-8">
          {/* Main image (ai.png) */}
          {(() => {
            const imagesArr = (Array.isArray(projectData.images) ? projectData.images : []) as { src: string; alt: string; style?: React.CSSProperties; caption?: string }[];
            const image = imagesArr.length > 0 ? imagesArr[0] : undefined;
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}

          {/* Slider for ai1.png and ai2.png */}
          {(() => {
            // Only use the two images in the slider, in order: ai1.png, ai2.png
            const sliderImages = [
              ...(Array.isArray(projectData.sliderImages) ? projectData.sliderImages.filter(img => img && typeof img === 'object') : []),
            ] as { src: string; alt: string; style?: React.CSSProperties; caption?: string }[];
            const filteredSliderImages = [
              sliderImages.find(img => img.src.includes('ai1.png')),
              sliderImages.find(img => img.src.includes('ai2.png')),
            ].filter(Boolean) as { src: string; alt: string; style?: React.CSSProperties; caption?: string }[];
            if (filteredSliderImages.length === 0) return null;
            // Simple slider logic
            const [current, setCurrent] = React.useState(0);
            const currentImage = filteredSliderImages[current];
            if (!currentImage) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = hasStyle(currentImage) && currentImage.style.width ? currentImage.style.width : undefined;
            const height = hasStyle(currentImage) && currentImage.style.height ? currentImage.style.height : undefined;
            return (
              <div className="flex flex-col items-center my-6">
                <div
                  style={{
                    width,
                    minHeight: height,
                    ...(hasStyle(currentImage) ? currentImage.style : {}),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: hasStyle(currentImage) ? currentImage.style.background : undefined,
                    border: hasStyle(currentImage) ? currentImage.style.border : undefined,
                    borderRadius: hasStyle(currentImage) ? currentImage.style.borderRadius : undefined,
                  }}
                  className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    style={{
                      width,
                      height,
                      objectFit: hasStyle(currentImage) ? currentImage.style.objectFit : undefined,
                      borderRadius: hasStyle(currentImage) ? currentImage.style.borderRadius : undefined,
                    }}
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  {filteredSliderImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-neutral-300'}`}
                      aria-label={`Show image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Images gallery (default, but NOT for SCM Dispatch Planning Tool) */}
      {projectData.images && projectData.images.length > 0 && projectData.title !== 'Underwater ROV / Drone' && projectData.title !== 'SCM Dispatch Planning Tool' && !projectData.skipDefaultGallery && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.title === 'Automated Dashboard Generation Using LLMs' && (
              <div className="flex gap-4 overflow-x-auto mt-6">
                <iframe src="/Projects/deep learning/dash.pdf" width="400" height="500" className="rounded-xl border" />
                <iframe src="/Projects/deep learning/research-dash.pdf" width="400" height="500" className="rounded-xl border" />
              </div>
            )}
            {projectData.images.map((image, index) => (
              projectData.title === 'Digital Twin for 3D Printers - AutoEncoder' ? (
                (() => {
                  const hasStyle = (img: any): img is typeof image & { style: React.CSSProperties } => 'style' in img;
                  const hasCaption = (img: any): img is typeof image & { caption: string } => 'caption' in img;
                  const style = hasStyle(image) ? image.style : {};
                  return (
                    <div
                      key={index}
                      style={{
                        width: style.width,
                        minHeight: style.height ? `calc(${style.height} + 32px)` : undefined,
                        ...style,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        background: style.background,
                        border: style.border,
                        borderRadius: style.borderRadius,
                      }}
                      className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: style.width,
                          height: style.height,
                          objectFit: style.objectFit,
                          borderRadius: style.borderRadius,
                        }}
                      />
                      {hasCaption(image) && (
                        <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                      )}
                    </div>
                  );
                })()
              ) : projectData.title === 'Multi-Dense Video Captioning Using Tri Directional Transformer' ? (
                (() => {
                  const hasStyle = (img: any): img is typeof image & { style: React.CSSProperties } => 'style' in img;
                  const hasCaption = (img: any): img is typeof image & { caption: string } => 'caption' in img;
                  const style = hasStyle(image) ? image.style : {};
                  return (
                    <div
                      key={index}
                      style={{
                        width: style.width,
                        minHeight: style.height ? `calc(${style.height} + 32px)` : undefined,
                        ...style,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        background: style.background,
                        border: style.border,
                        borderRadius: style.borderRadius,
                      }}
                      className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: style.width,
                          height: style.height,
                          objectFit: style.objectFit,
                          borderRadius: style.borderRadius,
                        }}
                      />
                      {hasCaption(image) && (
                        <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                      )}
                    </div>
                  );
                })()
              ) : (
                <div
                  key={index}
                  className={
                    projectData.title === 'ITC Projects Summary'
                      ? 'relative h-[370px] w-[910px] mx-auto overflow-hidden rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700'
                      : 'relative aspect-video overflow-hidden rounded-2xl'
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={
                      projectData.title === 'ITC Projects Summary'
                        ? 'object-contain transition-transform'
                        : 'object-cover transition-transform'
                    }
                  />
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Video for any project */}
      {projectData.video && (
        <div className="flex justify-center my-6">
          <video
            controls
            style={{
              width: projectData.title === 'Animatronic Mouth' ? '400px' : '700px',
              height: projectData.title === 'Animatronic Mouth' ? '225px' : undefined,
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              background: 'black',
            }}
          >
            <source src={projectData.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* PDFs for any project */}
      {projectData.pdfs && projectData.pdfs.length > 0 && (
        <div className="flex flex-wrap gap-4 justify-center my-6">
          {projectData.pdfs.map((pdf, idx) => (
            <iframe
              key={idx}
              src={pdf}
              width="350"
              height="500"
              className="rounded-xl border"
              title={`${projectData.title} PDF ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Custom image slider for Underwater ROV / Drone */}
      {projectData.title === 'Underwater ROV / Drone' && projectData.images && projectData.images.length > 0 && (
        <UnderwaterROVSlider images={projectData.images} />
      )}

      {/* Custom image slider for Quadruped 4 Femur-Fibula Joint Bot */}
      {projectData.title === 'Quadruped 4 Femur-Fibula Joint Bot' && projectData.sliderImages && projectData.sliderImages.length > 0 && (
        <UnderwaterROVSlider images={projectData.sliderImages} />
      )}

      {/* Custom image slider for HR - Tableau Dashboard */}
      {projectData.title === 'HR - Tableau Dashboard' && projectData.sliderImages && projectData.sliderImages.length > 0 && (
        <UnderwaterROVSlider images={projectData.sliderImages} />
      )}

      {/* Custom image slider for Friends Dashboard Remake by George Koursaros */}
      {projectData.title === 'Friends Dashboard Remake by George Koursaros' && projectData.sliderImages && projectData.sliderImages.length > 0 && (
        <UnderwaterROVSlider images={projectData.sliderImages} />
      )}

      {/* Custom image slider for Time-series Data Dashboard */}
      {projectData.title === 'Time-series Data Dashboard' && projectData.sliderImages && projectData.sliderImages.length > 0 && (
        <UnderwaterROVSlider images={projectData.sliderImages} />
      )}

      {projectData.projects && (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-[600px] w-full text-sm border-collapse border border-neutral-300 dark:border-neutral-700 mb-2">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-800">
                <th className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Project Name</th>
                <th className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Description</th>
                <th className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">Tech Stack</th>
              </tr>
            </thead>
            <tbody>
              {projectData.projects.map((proj, idx) => (
                <tr key={idx}>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 font-semibold">{proj.name}</td>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">{proj.description}</td>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">{proj.techStack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Custom ordered media for Blister Detection & Rating SYS: main image, video, slider, final image */}
      {projectData.title === 'Blister Detection & Rating SYS' && projectData.images && projectData.images.length > 1 && projectData.sliderImages && projectData.sliderImages.length > 1 && (
        <div className="space-y-8">
          {/* Main image (blister.png) */}
          {(() => {
            const image = projectData.images[0];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
              </div>
            );
          })()}

          {/* Slider for blister1.png and blister2.png */}
          {(() => {
            const sliderImages = [
              projectData.sliderImages[0],
              projectData.sliderImages[1],
            ].filter(Boolean);
            if (sliderImages.length === 0) return null;
            const [current, setCurrent] = React.useState(0);
            const currentImage = sliderImages[current];
            if (!currentImage) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = hasStyle(currentImage) && currentImage.style.width ? currentImage.style.width : undefined;
            const height = hasStyle(currentImage) && currentImage.style.height ? currentImage.style.height : undefined;
            return (
              <div className="flex flex-col items-center my-6">
                <div
                  style={{
                    width,
                    minHeight: height,
                    ...(hasStyle(currentImage) ? currentImage.style : {}),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: hasStyle(currentImage) ? currentImage.style.background : undefined,
                    border: hasStyle(currentImage) ? currentImage.style.border : undefined,
                    borderRadius: hasStyle(currentImage) ? currentImage.style.borderRadius : undefined,
                  }}
                  className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    style={{
                      width,
                      height,
                      objectFit: hasStyle(currentImage) ? currentImage.style.objectFit : undefined,
                      borderRadius: hasStyle(currentImage) ? currentImage.style.borderRadius : undefined,
                    }}
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  {sliderImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-neutral-300'}`}
                      aria-label={`Show image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Final standalone image (blister3.png) */}
          {(() => {
            const image = projectData.images[1];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
              </div>
            );
          })()}

          {/* Video (blistervid.mp4) - moved to end if needed */}
          {/* {projectData.video && (
            <div className="flex justify-center my-6">
              <video
                controls
                style={{
                  width: '700px',
                  height: '320px',
                  borderRadius: '16px',
                  border: '1px solid #e5e7eb',
                  background: 'black',
                }}
              >
                <source src={projectData.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )} */}
        </div>
      )}

      {/* Custom ordered media for Ink Marker Detection & Logging System: main image, secondary image, NDA image */}
      {projectData.title === 'Ink Marker Detection & Logging System' && projectData.images && projectData.images.length > 1 && (
        <div className="space-y-8">
          {/* Main image (ink1.png) */}
          {(() => {
            const image = projectData.images[0];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}
          {/* Secondary image (ink.png) */}
          {(() => {
            const image = projectData.images[1];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}
          {/* Third image (scm4.png, NDA) */}
          {(() => {
            const image = projectData.images[2];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}
        </div>
      )}
      {/* Custom ordered media for Ink Penetration Detection & Logging System: main image, secondary image, NDA image */}
      {projectData.title === 'Ink Penetration Detection & Logging System' && projectData.images && projectData.images.length > 1 && (
        <div className="space-y-8">
          {/* Main image (pen.png) */}
          {(() => {
            const image = projectData.images[0];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}
          {/* Secondary image (pen1.png) */}
          {(() => {
            const image = projectData.images[1];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}
          {/* Third image (scm4.png, NDA) */}
          {(() => {
            const image = projectData.images[2];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}
        </div>
      )}
      {/* Custom ordered media for Truck Coal Unloading Cycle D&L System: main image, secondary image, NDA image */}
      {projectData.title === 'Truck Coal Unloading Cycle D&L System' && projectData.images && projectData.images.length > 1 && (
        <div className="space-y-8">
          {/* Main image (truck.png) */}
          {(() => {
            const image = projectData.images[0];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}
          {/* Secondary image (truck1.png) */}
          {(() => {
            const image = projectData.images[1];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}
          {/* Third image (scm4.png, NDA) */}
          {(() => {
            const image = projectData.images[2];
            if (!image) return null;
            const hasStyle = (img: any): img is { style: React.CSSProperties } => !!img && !!img.style;
            const width = 'width' in image ? (image as any).width + 'px' : (hasStyle(image) && image.style.width ? image.style.width : undefined);
            const height = 'height' in image ? (image as any).height + 'px' : (hasStyle(image) && image.style.height ? image.style.height : undefined);
            return (
              <div
                style={{
                  width,
                  minHeight: height,
                  ...(hasStyle(image) ? image.style : {}),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: hasStyle(image) ? image.style.background : undefined,
                  border: hasStyle(image) ? image.style.border : undefined,
                  borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                }}
                className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width,
                    height,
                    objectFit: hasStyle(image) ? image.style.objectFit : undefined,
                    borderRadius: hasStyle(image) ? image.style.borderRadius : undefined,
                  }}
                />
                {'caption' in image && image.caption && (
                  <div className="text-center text-xs text-neutral-600 mt-2">{image.caption}</div>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'ITC Projects',
    title: 'ITC Projects Summary',
    src: '/Projects/ITC/Picture1.png',
    content: <ProjectContent project={{ title: 'ITC Projects Summary' }} />,
  },
  {
    category: 'Deep Learning',
    title: 'Summary',
    src: '',
    content: <ProjectContent project={{ title: 'Summary' }} />,
  },
  {
    category: 'Startup Project',
    title: 'Synto',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'Synto' }} />,
  },
  {
    category: 'Fun Tool',
    title: 'Rrate',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'Rrate' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Defai',
    src: '/defaipreview.png',
    content: <ProjectContent project={{ title: 'Defai' }} />,
  },
  {
    category: '42 Project',
    title: '3d Pong Game',
    src: '/transcendancepreview.png',
    content: <ProjectContent project={{ title: '3d Pong Game' }} />,
  },
  {
    category: '42 Project',
    title: 'Minishell',
    src: '/minishellpreview.png',
    content: <ProjectContent project={{ title: 'Minishell' }} />,
  },
  {
    category: 'Web Development',
    title: 'Old Portfolio',
    src: '/oldportfoliopreview.png',
    content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  },
  {
    category: 'Data Science',
    title: 'Data Science Summary',
    src: '',
    content: <ProjectContent project={{ title: 'Data Science Summary' }} />,
  },
  {
    category: 'Data Science',
    title: 'HR - Tableau Dashboard',
    src: '',
    content: <ProjectContent project={{ title: 'HR - Tableau Dashboard' }} />,
  },
  {
    category: 'Data Science',
    title: 'Friends Dashboard Remake by George Koursaros',
    src: '',
    content: <ProjectContent project={{ title: 'Friends Dashboard Remake by George Koursaros' }} />,
  },
  {
    category: 'Data Science',
    title: 'Time-series Data Dashboard',
    src: '',
    content: <ProjectContent project={{ title: 'Time-series Data Dashboard' }} />,
  },
];

// Summary cards array for easy access
export const summaryCards = [
  {
    category: 'ITC Projects',
    title: 'ITC Projects Summary',
    src: '/Projects/ITC/Picture1.png',
    content: <ProjectContent project={{ title: 'ITC Projects Summary' }} />,
  },
  {
    category: 'Deep Learning',
    title: 'Summary',
    src: '',
    content: <ProjectContent project={{ title: 'Summary' }} />,
  },
  // Add other summary cards here as you create them
];

function UnderwaterROVSlider({ images }: { images: any[] }) {
  const [current, setCurrent] = React.useState(0);
  const currentImage = images[current];
  const width = (currentImage.style && currentImage.style.width) || '700px';
  const height = (currentImage.style && currentImage.style.height) || '320px';
  return (
    <div className="flex flex-col items-center my-6">
      <div
        style={{
          width,
          minHeight: height,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: currentImage.style?.background,
          border: currentImage.style?.border,
          borderRadius: currentImage.style?.borderRadius,
        }}
        className="mx-auto rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700"
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          style={{
            width,
            height,
            objectFit: currentImage.style?.objectFit || 'contain',
            borderRadius: currentImage.style?.borderRadius,
          }}
        />
        {currentImage.caption && (
          <div className="text-center text-xs text-neutral-600 mt-2">{currentImage.caption}</div>
        )}
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-neutral-300'}`}
            aria-label={`Show image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
