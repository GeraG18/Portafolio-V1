import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    urls: z.array(z.object({name: z.string(), url: z.string()})),
    technologies: z.array(z.string()),
    image: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    startDate: z.string().or(z.date()),
    endDate: z.string().or(z.date()),
    role: z.string(),
    status: z.string()
  }),
});

export const collections = {
  projects: projectsCollection,
};

/* 
title: Aplicación Cord
technologies: ["ionic", "angular", "tailwind", "sass", "figma", "google-cloud", "apple", "android"]
urls: [
    {
        name: 'PlayStore',
        url: 'https://play.google.com/store/apps/details?id=com.cidtcor.cord&pcampaignid=web_share'
    },
    {
        name: 'AppStore',
        url: 'https://apps.apple.com/mx/app/cord/id6559758124'
    },
]
image: "./images/cord.svg"
startDate: 2024-07-02
endDate: ACTUALIDAD
role: 'Developer, UI Designer'
*/