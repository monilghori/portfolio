import Grid from "@/Components/Grid";
import WelcomeTitle from "@/Components/WelcomeTitle";
import { FloatingNav } from "@/Components/ui/Navbar";
import { navItems } from "../../Data";
import RecentProjects from "@/Components/RecentProjects";
import Approach from "@/Components/Approach";
import Footer from "@/Components/Footer";
export default function Home() {
  const isBrowser = typeof document !== 'undefined';
  return (
    <main className="bg-black-100 flex justify-center items-center relative flex-col overflow-clip">
      <div className="max-w-7xl w-full text-white">
        <FloatingNav navItems={navItems} />
        <div className="flex flex-col">
        {isBrowser && <WelcomeTitle />}
        {isBrowser && <Grid />}
        {isBrowser &&  <RecentProjects />}
        {isBrowser &&  <Approach />}
        {isBrowser &&  <Footer />}
        </div>
      </div>
    </main>
  );
}
