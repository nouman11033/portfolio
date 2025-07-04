'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, PenTool, Users } from 'lucide-react';

// Star icon SVG (filled)
const Star = ({ filled = true, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled ? '#facc15' : 'none'}
    stroke="#facc15"
    className={`inline-block h-3 w-3 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
      d="M10 2.5l2.39 4.85 5.36.78-3.88 3.78.92 5.36L10 14.77l-4.79 2.5.92-5.36-3.88-3.78 5.36-.78L10 2.5z"
    />
  </svg>
);

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: 'HTML 5', score: 5 },
        { name: 'CSS', score: 5 },
        { name: 'JavaScript/TypeScript', score: 4 },
        { name: 'Tailwind CSS', score: 5 },
        { name: 'Bootstrap', score: 4 },
        { name: 'Next.js', score: 5 },
        { name: 'React', score: 4 },
        { name: 'Vercel AI SDK', score: 5 },
        { name: 'Node.js', score: 4 },
        { name: 'Flask | Django', score: 5 },
        { name: 'Firebase', score: 3 },
        { name: 'GraphQL', score: 3 },
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'Backend & Systems',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        { name: 'Python', score: 5 },
        { name: 'C/C++', score: 4 },
        { name: 'Java', score: 4 },
        { name: 'Docker', score: 5 },
        { name: 'PostgreSQL', score: 4 },
        { name: 'GCP', score: 3 },
        { name: '.NET Framework 4.x', score: 3 },
        { name: 'Ansible', score: 3 },
        { name: 'Jira', score: 4 },
        { name: 'Azure DataBricks | Factory', score: 4 },
        { name: 'MongoDB', score: 4 },
        { name: 'NoSQL', score: 4 },
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },
    {
      category: 'Design & Creative Tools',
      icon: <PenTool className="h-5 w-5" />,
      skills: [
        { name: 'Figma' },
        { name: 'Davinci Code' },
        { name: 'Illustrator' },
        { name: 'Power BI' },
        { name: 'Tableau' },
      ],
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
    },
    {
      category: 'Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        { name: 'Communication' },
        { name: 'Problem-Solving' },
        { name: 'Adaptability' },
        { name: 'Learning Agility' },
        { name: 'Teamwork' },
        { name: 'Creativity' },
        { name: 'Focus' },
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
    {
      category: 'AI & Fullstack Engineering',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        { name: 'Agent | Prompt engineering' },
        { name: 'Vector databases (Weaviate, Pinecone)' },
        { name: 'RAG (Retrieval-Augmented Generation)' },
        { name: 'Vercel AI SDK' },
        { name: 'Supabase' },
        { name: 'Prisma, Next.js' },
        { name: 'Azure CLI' },
        { name: 'A/B Testing' },
        { name: 'NN, CNN, RNN, LSTM, Transformers' },
        { name: 'Encoders, Decoders, Self Attention, Cross Attention' },
        { name: 'Transfer Learning' },
        { name: 'Upscaling & Downscaling models' },
        { name: 'Lateral Diffusion' },
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>
        {/* Academic scores tables under the title */}
        <div className="flex flex-row gap-2 mt-1 mb-1">
          <div className="inline-block bg-white border border-gray-300 rounded-xl shadow text-xs font-medium text-gray-900 overflow-hidden" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
            <table>
              <tbody>
                <tr>
                  <td className="px-2 py-1 font-bold text-gray-700">SIT</td>
                  <td className="px-2 py-1 whitespace-nowrap">CGPA 8.1</td>
                  <td className="px-2 py-1 whitespace-nowrap">GPA 10.0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="inline-block bg-white border border-gray-300 rounded-xl shadow text-xs font-medium text-gray-900 overflow-hidden" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
            <table>
              <tbody>
                <tr>
                  <td className="px-2 py-1 font-bold text-gray-700">MIT</td>
                  <td className="px-2 py-1 whitespace-nowrap">LAST 96%</td>
                  <td className="px-2 py-1 whitespace-nowrap">AVG 91%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skillObj, idx) => {
                    const skill = typeof skillObj === 'string' ? skillObj : skillObj.name;
                    const score = typeof skillObj === 'object' && 'score' in skillObj ? skillObj.score : undefined;
                    // For these categories, render plain badge (no score, no divider)
                    const plainBadgeSections = [
                      'Design & Creative Tools',
                      'Soft Skills',
                      'AI & Fullstack Engineering',
                    ];
                    if (plainBadgeSections.includes(section.category) || !score) {
                      return (
                        <motion.div
                          key={idx}
                          variants={badgeVariants}
                          whileHover={{
                            scale: 1.04,
                            transition: { duration: 0.2 },
                          }}
                          className="relative"
                        >
                          <Badge className="border px-3 py-1.5 font-normal min-w-[70px]">
                            {skill}
                          </Badge>
                        </motion.div>
                      );
                    }
                    // Badge with name, divider, and numeric score (3-5 only)
                    let color = '';
                    let style: React.CSSProperties = {};
                    if (score === 5) {
                      color = '#ffd700'; // gold
                      style = { color, textShadow: '0 0 8px #fff, 0 0 16pxrgb(219, 215, 192), 0 0 24pxrgb(235, 233, 226), 0 0 32px #fff200' };
                    } else if (score === 4) {
                      color = '#ffd700'; // gold
                      style = { color };
                    } else {
                      color = '#f1d9ac'; // orange
                      style = { color };
                    }
                    return (
                      <motion.div
                        key={idx}
                        variants={badgeVariants}
                        whileHover={{
                          scale: 1.04,
                          transition: { duration: 0.2 },
                        }}
                        className="relative"
                      >
                        <Badge className={`border px-3 py-1.5 font-normal flex items-center min-w-[70px]`}>
                          <span className="text-left flex-1 pr-2">{skill}</span>
                          <span className="h-4 w-px bg-gray-200 mx-2" />
                          <span className="text-xs font-bold" style={style}>{score}</span>
                        </Badge>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
