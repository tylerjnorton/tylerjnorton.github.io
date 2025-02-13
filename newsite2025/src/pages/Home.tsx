import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Quote, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const [activeBox, setActiveBox] = useState<number | null>(null);

  useEffect(() => {
    // Function to trigger random box hover
    const triggerRandomBox = () => {
      const randomIndex = Math.floor(Math.random() * 6);
      setActiveBox(randomIndex);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setActiveBox(null);
      }, 2000);
    };

    // Set interval between 3-5 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 2000) + 3000; // 3000-5000ms
      triggerRandomBox();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const focusBoxes = [
    {
      title: "Hiring Teams",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Design Process",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Mentoring",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Growth Strategy",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Product Leadership",
      gradient: "from-yellow-600 to-amber-600"
    },
    {
      title: "AI Integration",
      gradient: "from-indigo-600 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-[8vw] font-bold leading-none mb-6 relative">
            TYLER J<br />NORTON
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <p className="text-2xl font-light">
              Creative leader and strategist with 15+ years of experience building teams, products, and process.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/tylerjnorton" className="hover:opacity-70 hover:rotate-12 transition-all duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/tylerjnorton" className="hover:opacity-70 hover:-rotate-12 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:tyler.j.norton@gmail.com" className="hover:opacity-70 hover:rotate-12 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Skill Callouts */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {focusBoxes.map((box, index) => (
              <div 
                key={box.title}
                className={`bg-black p-6 transition-all duration-500 ${
                  activeBox === index ? `bg-gradient-to-br ${box.gradient} -translate-y-2` : 'hover:bg-gradient-to-br hover:-translate-y-2 ' + box.gradient
                }`}
              >
                <p className={`text-sm uppercase tracking-wider mb-2 transition-colors duration-500 ${
                  activeBox === index ? 'text-white/70' : 'text-zinc-400 group-hover:text-white/70'
                }`}>Focus</p>
                <h3 className={`text-lg font-bold text-white transition-transform duration-500 ${
                  activeBox === index ? 'translate-x-1' : 'group-hover:translate-x-1'
                }`}>{box.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-12">CASE STUDIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <WorkCard
              title="RocketReach"
              role="Senior Design Lead"
              image="/images/rr.png"
              link="/case-study/rocketreach"
            />
            <WorkCard
              title="Unqork"
              role="Design Services Lead"
              image="/images/uq.png"
              link="/case-study/unqork"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-zinc-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold mb-12">
            <span className="md:hidden">REVIEWS</span>
            <span className="hidden md:block">TESTIMONIALS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <TestimonialCard
              quote="Tyler has been a constant voice of reason as I've moved through he world of UX design, and I have turned to him time and time again. I highly recommend anyone who has the opportunity to work with Tyler to take it!"
              author="Anne-Marie Lloyd"
              role="UX Designer"
            />
            <TestimonialCard
              quote="Tyler has continued to increase the visibility of the design team throughout the broader RocketReach organization. He's a natural leader who leads by example."
              author="Chris Long"
              role="Head of Product, RocketReach"
            />
            <TestimonialCard
              quote="Tyler has the skillset and experience to produce under direction or when given complete creative freedom. He is efficient and extremely communicative."
              author="Chris White"
              role="Small Business Owner"
            />
            <TestimonialCard
              quote="It's been a massive boon to have Tyler join the team and lead from a creative perspective. His insights and ability to level set have been huge for the design voice of the company."
              author="Charles Chen"
              role="Marketing Designer"
            />
          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section className="py-20 px-4 bg-zinc-800 text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold mb-12">SIDE PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a 
              href="https://travelingbostonian.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block bg-zinc-700 p-8 rounded-lg hover-lift"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">The Traveling Bostonian</h3>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-zinc-300">A travel blog chronicling worldwide adventures and cultural experiences through a New Englander's perspective.</p>
            </a>

            <a 
              href="https://hummingbirdnutritiouseats.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block bg-zinc-700 p-8 rounded-lg hover-lift"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Hummingbird Eats</h3>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-zinc-300">A small business restaurant focused on providing nutritious, wholesome meals to the local community.</p>
            </a>

            <a 
              href="https://www.kickstarter.com/projects/tylerjnorton/taskmetro-a-city-exploration-game" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block bg-zinc-700 p-8 rounded-lg hover-lift"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">TaskMetro</h3>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-zinc-300">A city exploration game that turns urban adventures into exciting challenges.</p>
            </a>

            <a 
              href="https://ux-resource.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block bg-zinc-700 p-8 rounded-lg hover-lift"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">UX Resource</h3>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-zinc-300">A curated collection of UX design resources, tools, and best practices for designers and product teams.</p>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <h2 className="text-6xl font-bold mb-8">ABOUT</h2>
              <div className="space-y-8 max-w-3xl">
                <p className="text-xl">
                  Tyler Norton has established himself as a transformative design leader, specializing in building and scaling creative departments from the ground up. His expertise lies in developing robust design systems, implementing efficient creative processes, and fostering design-driven cultures within organizations. Through strategic leadership, he has successfully built and mentored multiple design teams, turning them into high-performing creative powerhouses that drive both product innovation and business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Let's connect</h3>
              <p className="text-zinc-600">tyler.j.norton@gmail.com</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm hover:underline hover:text-blue-600 transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-sm hover:underline hover:text-blue-600 transition-colors duration-300">Github</a>
              <a href="#" className="text-sm hover:underline hover:text-blue-600 transition-colors duration-300">Resume</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WorkCard({ title, role, image, link }: { title: string; role: string; image: string; link: string }) {
  return (
    <Link to={link} className="group block hover-lift">
      <div className="aspect-video mb-4 overflow-hidden bg-zinc-800">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-zinc-400">{role}</p>
        </div>
        <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="p-8 bg-zinc-800 relative hover-lift">
      <Quote className="w-12 h-12 mb-6 text-zinc-600 transition-transform duration-300 group-hover:scale-110" />
      <p className="text-xl mb-8 font-light">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-zinc-400">{role}</p>
      </div>
    </div>
  );
}

export default Home;