import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="bg-[#0B1020]">
      <div 
        className="relative overflow-hidden bg-[#0B1020]"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(34, 211, 238, 0.14), transparent 30%), linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 42px 42px, 42px 42px",
          backgroundPosition: "center, center, center",
        }}
      >
        <Header />
        <section id="home" className="h-[100vh] w-100vw">
          welcome back to hero
        </section>
      </div>
      <section id="projects" className="h-[100vh] w-full bg-blue-400">
        your projects
      </section>
    </div>
  );
}
