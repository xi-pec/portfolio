import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import avatar from "@/assets/avatar.jpg"

export function Landing() {
    return <div id="about" className="grid place-items-center">
        <div className="mt-15 grid grid-cols-[1fr_auto] w-fit gap-10 max-w-4/5">
            <div className="grid place-items-center">
                <div className="pt-5 pb-5 lg:p-15">
                    <Avatar className="size-20 lg:size-50">
                        <AvatarImage src={avatar} />
                        <AvatarFallback>xi_pec</AvatarFallback>
                    </Avatar>

                    <div className="hidden lg:block">
                        <br />
                        <h1 className="w-full text-center text-3xl font-semibold">xi_pec</h1>
                        <h2 className="w-full text-center text-xl text-muted-foreground font-light">he/him</h2>
                    </div>
                </div>
            </div>

            <div className="h-full lg:grid items-center hidden">
                <div>
                    <h1 className="text-4xl font-bold">Hello!</h1>

                    <br />
                    <p>
                        <span>
                            I am a 17 year old student seeking to learn and become a software engineer.
                            I picked up programming as a hobby in 2020 and have continued to develop and hone this skill ever since.
                        </span>
                    
                        <br /><br />

                        <span>
                            Over the course of 5 years, I have learned to create Discord bots using discord.js, create and host
                            backend APIs using NodeJS and heroku, and manage, maintain, and forward my own home server with
                            ngrok and Tailscale. 
                        </span>
                        

                        <br /><br />

                        <span>
                            Currently, I am learning React in order to become a full-stack developer, and this portfolio will
                            be my first complete project using it!
                        </span>
                    </p>
                </div>
            </div>
            
            <div className="grid lg:hidden h-full items-center">
                <div>
                    <h1 className="w-full text-center text-3xl font-semibold">xi_pec</h1>
                    <h2 className="w-full text-center text-xl text-muted-foreground font-light">he/him</h2>
                </div>
            </div>
        </div>

        <div className="lg:hidden mt-5 ml-10 mr-10 sm:ml-15 sm:mr-15">
            <h1 className="text-4xl font-bold w-full text-center">Hello!</h1>

            <br />
            <p>
                <span>
                    I am a 17 year old student seeking to learn and become a software engineer.
                    I picked up programming as a hobby in 2020 and have continued to develop and hone this skill ever since.
                </span>
            
                <br /><br />

                <span>
                    Over the years, I have learned to create Discord bots using discord.js, create and host
                    backend APIs using NodeJS and heroku, and manage, maintain, and forward my own home server with
                    ngrok and Tailscale. 
                </span>
                

                <br /><br />

                <span>
                    Currently looking to learn more and enhance this craft as well as build and finish more Projects
                    in the foreseeable future.
                </span>
            </p>
        </div>
    </div>
    
    return <div id="about" className="h-full w-full grid grid-cols-[2fr_5fr] justify-items-center place-items-center">
        <div className="h-full w-full grid justify-items-end place-items-center">
            <div className="w-2/5 aspect-square mr-10">
                <Avatar className="w-full h-full">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>xi_pec</AvatarFallback>
                </Avatar>

                <br />

                <h1 className="text-3xl font-semibold m-1">xi_pec</h1>
                <h2 className="text-xl text-muted-foreground font-light m-1">he/him</h2>
            </div>
        </div>
            
        <div className="grid justify-items-center place-items-center">
            <div className="text-left ml-30 mr-30">
                <h1 className="text-4xl font-bold">Hello!</h1>

                <p className="pt-5">
                    I am a 17 year old student seeking to learn and become a software engineer.
                    I picked up programming as a hobby in 2020 and have continued to develop and hone this skill ever since.
                </p>

                <p className="pt-5">
                    Over the course of 5 years, I have learned to create Discord bots using discord.js, create and host
                    backend APIs using NodeJS and heroku, and manage, maintain, and forward my own home server with
                    ngrok and Tailscale. 
                </p>

                <p className="pt-5">
                    Currently, I am learning React in order to become a full-stack developer, and this portfolio will
                    be my first complete project using it!
                </p>
            </div>
        </div>
    </div>
}