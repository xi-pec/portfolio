import { Ellipsis } from "lucide-react"

import { ModeToggle } from '@/components/blocks/mode-toggle'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const sections = [
    { title: "About", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact"  }
]

export function Navbar() {
    return <div className="fixed w-screen left-0 top-0">
			<div className="w-screen absolute top-0 left-0 p-5 grid justify-end h-min">
				<NavigationMenu className="rounded-md border p-1">
					<NavigationMenuList className="space-x-1">
						{
							sections.map((section, key) => (
								<NavigationMenuItem className="hidden sm:block" key={key}>
									<NavigationMenuLink href={`#${section.id}`} className={navigationMenuTriggerStyle()}>{section.title}</NavigationMenuLink>
								</NavigationMenuItem>
							))
						}

						<NavigationMenuItem className="block sm:hidden">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline" size="icon" className="border-none !bg-background transition-none hover:!bg-input">
									<Ellipsis className="h-[1.2rem] w-[1.2rem]" />
									</Button>
								</DropdownMenuTrigger>

								<DropdownMenuContent className="bg-background mt-2 -mr-1" align="end">
									{sections.map((section, key) => (
										<DropdownMenuItem className="text-center" key={key}>
											<a className="w-full" href={`#${section.id}`}>
												<span>{section.title}</span>
											</a>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</NavigationMenuItem>

						<NavigationMenuItem className="utline-none">
							<ModeToggle></ModeToggle>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		{/* </SidebarProvider> */}
    </div>
}