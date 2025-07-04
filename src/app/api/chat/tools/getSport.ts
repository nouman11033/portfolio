import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos and highlights of Nouman's sports and extracurricular achievements.",
  parameters: z.object({}),
  execute: async () => {
    return "Here are some highlights from my journey: TEDx Junior speaker, science fair winner, green energy innovator, footballer, athlete, MUN and debate champion, and more. Check out the gallery above for photos and stories from these experiences!";
  },
});