// Project data for backend/frontend use (no JSX, only serializable fields)
export const PROJECTS = [
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
      },
    ],
  },
  {
    title: 'SCM Dispatch Planning Tool',
    description:
      'A two-part web-based tool that automates daily clearance generation and truck load mapping across all 8 regions. It applies region-specific business rules in seconds, with dedicated pages for each region and a central analytics dashboard for real-time and historical insights. Reduced regional clearance planning from over 40 hours daily to under 1 minute. Desk-agnostic operation, integrated pipeline, adaptable for future changes, and combines rule-based logic with AI reasoning.',
    techStack: ['Node.js', 'HTML5', 'Tailwind CSS', 'React', 'Zustand', 'Django', 'Python'],
    date: '2025',
    links: [],
    images: [
      {
        src: '/Projects/ITC/scm3.png',
        alt: 'SCM Dashboard Overview',
      },
    ],
    sliderImages: [
      {
        src: '/Projects/ITC/scm1.png',
        alt: 'SCM Tool Screenshot 1',
      },
      {
        src: '/Projects/ITC/scm2.png',
        alt: 'SCM Tool Screenshot 2',
      },
      {
        src: '/Projects/ITC/scm4.png',
        alt: 'NDA',
      },
    ],
  },
  {
    title: 'Blister Detection & Rating SYS',
    description:
      'Developed an automated blister detection system to replace manual inspection of 10x5 cm Prubeau-Samples, eliminating subjectivity and inter-lab variability. The system uses a Basler industrial camera to capture high-resolution images without requiring the strip to be folded, with a custom U-instrument setup inside a blackbox. A Django-based web application allows users to either upload images or connect camera feed. Two core processing methods were implemented: 1) Segmentation & HOGs techniques (erosion, dilation, and contouring) to segment & quantify blisters. 2) The system outputs blister count, total area, and a standardized quality grade (1, 3, or 9).',
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
      },
      {
        src: '/Projects/ITC/blister3.png',
        alt: 'Blister Detection Standalone 2',
      },
    ],
    sliderImages: [
      {
        src: '/Projects/ITC/blister1.png',
        alt: 'Blister Detection Slider 1',
      },
      {
        src: '/Projects/ITC/blister2.png',
        alt: 'Blister Detection Slider 2',
      },
    ],
  },
  // ... Add the rest of your projects here, following the same pattern ...
]; 