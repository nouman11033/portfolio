import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Nouman Jinabade. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Nouman Jinabade, a passionate engineering student specializing in Robotics, Automation, and Data Science. (This section will be updated with my full presentation soon.)",
    };
  },
});
