'use client'
import dynamic from 'next/dynamic';
//import Grid from "@/Components/Grid";
//import WelcomeTitle from "@/Components/WelcomeTitle";
import { FloatingNav } from "@/Components/ui/Navbar";
import { navItems } from "../../Data";  
//import RecentProjects from "@/Components/RecentProjects";
//import Approach from "@/Components/Approach";
//import Footer from "@/Components/Footer";
import './globals.css'

const Grid = dynamic(() => import('@/Components/Grid'), {
  ssr: false, // This disables SSR for this component
});
const WelcomeTitle = dynamic(() => import('@/Components/WelcomeTitle'), {
  ssr: false, // This disables SSR for this component
});
const RecentProjects = dynamic(() => import('@/Components/RecentProjects'), {
  ssr: false, // This disables SSR for this component
});
const Approach = dynamic(() => import('@/Components/Approach'), {
  ssr: false, // This disables SSR for this component
});
const Footer = dynamic(() => import('@/Components/Footer'), {
  ssr: false, // This disables SSR for this component
});
export default function Home() {

  return (
    <main className="bg-black-100 flex justify-center items-center relative flex-col overflow-clip">
      <div className="max-w-7xl w-full text-white">
        <FloatingNav navItems={navItems} />
        <div className="flex flex-col">
        <WelcomeTitle />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
        </div>
      </div>
    </main>
  );
}
