import { IconBrandGithubFilled } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import iskolar from "@/assets/projects/iskolar.jpg"
import visualNovel from "@/assets/projects/visual-novel.png"

import node from "@/assets/technologies/node.png"
import typescript from "@/assets/technologies/typescript.png"
import express from "@/assets/technologies/express.png"
import postgresql from "@/assets/technologies/postgresql.png"
import pixi from "@/assets/technologies/pixi.png"
import webpack from "@/assets/technologies/webpack.png"
import discordjs from "@/assets/technologies/discordjs.png"

type ProjectData = {
    image: string
    title: string
    year: number
    description: string
    starred?: boolean

    technologies: {
        name: string
        logo: string
        link: string
    }[]

    links: {
        type: "GitHub"
        link: string
        disabled?: boolean
        tooltip?: string
    }[]
}

const icons = {
    "GitHub": <IconBrandGithubFilled/>
}

function ProjectCard(data: ProjectData) {
    return <div className="bg-card/50 w-4/5 h-3/4 rounded-md border text-left grid grid-rows-[40%_60%]">
        <img src={data.image} alt={data.title} className="w-full h-full rounded-t-md object-cover border-b"/>

        <div className="p-5 w-full h-full grid grid-cols-[1fr_min-content] grid-rows-[min-content_1fr_min-content_min-content] gap-5">
            <h1 className="h-full place-content-center text-lg font-semibold">{data.starred && "⭐ "}{data.title}</h1>
            <h2 className="h-full place-content-center text-md font-semibold text-muted-foreground">{data.year}</h2>

            <p className="col-span-2 text-muted-foreground text-balance">{data.description}</p>

            <div className="col-span-2 grid justify-items-center place-items-center">
                <ScrollArea>
                    <div className="flex -space-x-2">
                        {
                            data.technologies.map((technology, key) => {
                                return <Tooltip key={key}>
                                    <TooltipTrigger>
                                        <a target="_blank" href={technology.link}>
                                            <Avatar>
                                                <AvatarImage src={technology.logo} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {technology.name}
                                    </TooltipContent>
                                </Tooltip>
                            })
                        }
                    </div>
                    <ScrollBar orientation="horizontal"></ScrollBar>
                </ScrollArea>
            </div>

            <div className={`col-span-2 grid grid-flow-col auto-cols-fr gap-4`}>
                {
                    data.links.map((linkdata, key) => {
                        if (linkdata.disabled) { 
                            return <Tooltip key={key}>
                                    <TooltipTrigger className="w-full">
                                        <Button className="w-full" key={key} variant="outline" size="sm" disabled>
                                            {icons[linkdata.type]}
                                            <a target="_blank" href={linkdata.link}>{linkdata.type}</a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{linkdata.tooltip}</p>
                                    </TooltipContent>
                            </Tooltip>
                        } else {
                            return <Button key={key} className="w-full" variant="outline" size="sm">
                                {icons[linkdata.type]}
                                <a target="_blank" href={linkdata.link}>{linkdata.type}</a>
                            </Button>
                        }
                    })
                }
                
            </div>
        </div>
    </div>
}

const projects: ProjectData[] = [
    {
        image: iskolar,
        title: "UNLAD Project",
        year: 2024,
        description: "Upcoming PSHS '27 SCALE project. (1 of 4 collaborators)",
        starred: true,

        technologies: [
            {
                name: "NodeJS",
                logo: node,
                link: "https://nodejs.org/"
            },
            {
                name: "Typescript",
                logo: typescript,
                link: "https://www.typescriptlang.org/"
            },
            {
                name: "ExpressJS",
                logo: express,
                link: "https://expressjs.com/"
            },
            {
                name: "PostgreSQL",
                logo: postgresql,
                link: "https://www.postgresql.org/"
            },
        ],

        links: [
            {
                type: "GitHub",
                link: "https://github.com/unlad",
            }
        ]
    },

    {
        image: visualNovel,
        title: "Visual Novel Engine",
        year: 2023,
        description: "Simple visual novel engine using PixiJS. (1 of 2 collaborators)",
        starred: true,

        technologies: [
            {
                name: "NodeJS",
                logo: node,
                link: "https://nodejs.org/"
            },
            {
                name: "Typescript",
                logo: typescript,
                link: "https://www.typescriptlang.org/"
            },
            {
                name: "Webpack",
                logo: webpack,
                link: "https://webpack.js.org/"
            },
            {
                name: "PixiJS",
                logo: pixi,
                link: "https://pixijs.com/"
            },
        ],

        links: [
            {
                type: "GitHub",
                link: "#",
                disabled: true,
                tooltip: "Sorry, this repository is private!"
            }
        ]
    },

    {
        image: iskolar,
        title: "Tunneler",
        year: 2024,
        description: "Simple HTTP API wrapper & discord bot for bore, a free tunneling service.",

        technologies: [
            {
                name: "NodeJS",
                logo: node,
                link: "https://nodejs.org/"
            },
            {
                name: "Typescript",
                logo: typescript,
                link: "https://www.typescriptlang.org/"
            },
            {
                name: "ExpressJS",
                logo: express,
                link: "https://expressjs.com/"
            },
            {
                name: "DiscordJS",
                logo: discordjs,
                link: "https://discord.js.org/"
            },
        ],

        links: [
            {
                type: "GitHub",
                link: "https://github.com/xi-pec/tunneler",
            },
            {
                type: "GitHub",
                link: "https://github.com/xi-pec/tunneler-bot",
            }
        ]
    },
]

export function Projects() {
    return <>
        <div id="projects" className="w-full h-8"></div>

        <div className="h-full w-full">
            <h1 className="w-full text-center text-4xl">My Projects</h1>

            <Carousel className="h-full">
                <CarouselContent>
                    {
                        projects.map((project, key) => <CarouselItem className="md:basis-1/2 lg:basis-1/3 grid justify-items-center place-items-center">
                            <ProjectCard {...project} key={key}></ProjectCard>
                        </CarouselItem>)
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </>
}