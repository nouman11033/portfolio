import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 📅 **Duration**: 6-month internship starting **September 2025**
- 🌍 **Location**: Preferably **San Francisco** or open to global/remote
- 🧑‍💻 **Focus**: AI/ML engineering, Robotics, Data Science, AGI, RAG, full-stack web apps
- 🛠️ **Stack**: Python, Node.js, React/Next.js, TypeScript, .NET, Power BI, Tableau, Azure, SAP, R, C/C++, AGI, RAG, and more
- 💼 **Visa**: Based in India 🇮🇳, open to relocation or remote
- ✅ **What I bring**: Real experience with in-house GPT AGI, RAG pipelines, AI-driven analytics, dashboard automation, and 50+ projects
- 🔥 I move fast, learn faster, and am always hungry for new challenges

📬 **Contact me** via:
- Email: nouman.jinabade@gmail.com
- LinkedIn: [linkedin.com/in/nouman-jinabade-b6a075223](https://www.linkedin.com/in/nouman-jinabade-b6a075223)
- GitHub: [github.com/nouman11033](https://github.com/nouman11033)

Let's build something amazing together ✌️`;
  },
});
