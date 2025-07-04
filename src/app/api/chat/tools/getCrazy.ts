import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will the craziest thing I've ever done. use it when the user ask someting like : 'What the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "One of my craziest achievements was speaking at TEDx Junior in high school and building a walkable path that generates green renewable electricity using pezosensors. (You can ask me for more stories or I'll update this with a specific adventure soon!)";
  },
});