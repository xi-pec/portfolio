import './App.css'

import { ThemeProvider } from "@/components/blocks/theme-provider"

import { Navbar } from '@/components/custom/Navbar'
import { Landing } from '@/components/custom/Landing'
import { Skills } from '@/components/custom/Skills'
import { Projects } from '@/components/custom/Projects'
import { Contact } from '@/components/custom/Contact'

function App() {
	return <div className="w-full h-full p-4 lg:max-w-[1280px] m-auto">
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="fixed right-0 top-0">
				<h1 className="absolute right-0 scale-100 sm:scale-0">wtf</h1>
				<h1 className="absolute right-0 scale-0 sm:scale-100 md:scale-0">sm</h1>
				<h1 className="absolute right-0 scale-0 md:scale-100 lg:scale-0">md</h1>
				<h1 className="absolute right-0 scale-0 lg:scale-100 xl:scale-0">lg</h1>
				<h1 className="absolute right-0 scale-0 xl:scale-100 2xl:scale-0">xl</h1>
				<h1 className="absolute right-0 scale-0 2xl:scale-100">2xl</h1>
				{/* <h1 className="absolute right-0 top-[1rem]">{document.documentElement.clientWidth / parseFloat(getComputedStyle(document.documentElement).fontSize)}</h1> */}
			</div>
			<Navbar></Navbar>
			<Landing></Landing>
			{/* <Skills></Skills>
			<Projects></Projects>
			<Contact></Contact> */}
		</ThemeProvider>
	</div>
}

export default App
