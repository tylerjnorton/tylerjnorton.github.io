import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Workflow, Zap, Blocks, ArrowLeft } from 'lucide-react';

function Achievement({ icon, title, metric, description }: { 
  icon: React.ReactNode; 
  title: string; 
  metric: string; 
  description: string; 
}) {
  return (
    <div className="p-8 bg-white border-2 border-indigo-900 rounded-lg hover:border-purple-600 transition-colors duration-300">
      <div className="mb-6 text-indigo-900">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{metric}</p>
      <p className="text-zinc-600">{description}</p>
    </div>
  );
}

function UnqorkCase() {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">UNQORK</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-2xl font-light mb-8">
                Leading the transformation of enterprise no-code development through innovative design systems and team leadership.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-indigo-300 mb-2">Role</p>
                  <p className="text-xl">Design Services Lead</p>
                </div>
                <div>
                  <p className="text-indigo-300 mb-2">Timeline</p>
                  <p className="text-xl">2020 - 2022</p>
                </div>
              </div>
            </div>
            <div className="aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
                alt="Unqork Office"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">KEY ACHIEVEMENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Achievement
              icon={<Users className="w-8 h-8" />}
              title="Team Growth"
              metric="300%"
              description="Expansion of design services team to support enterprise clients"
            />
            <Achievement
              icon={<Workflow className="w-8 h-8" />}
              title="Process Efficiency"
              metric="+85%"
              description="Improvement in design delivery timelines through standardization"
            />
            <Achievement
              icon={<Zap className="w-8 h-8" />}
              title="Client Success"
              metric="95%"
              description="Client satisfaction rate across enterprise implementations"
            />
            <Achievement
              icon={<Blocks className="w-8 h-8" />}
              title="Component Library"
              metric="200+"
              description="Enterprise-grade components created and documented"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-8">CHALLENGE</h2>
              <p className="text-xl mb-12">
                Unqork needed to scale its design services to support rapid enterprise adoption while maintaining consistency across complex no-code implementations. The challenge was to build and lead a team capable of handling enterprise-scale projects while developing a comprehensive design system.
              </p>
              
              <h2 className="text-4xl font-bold mb-8">APPROACH</h2>
              <div className="space-y-6 mb-12">
                <p className="text-xl">
                  1. Built and scaled a design services team from 5 to 20 members
                </p>
                <p className="text-xl">
                  2. Developed standardized design processes for enterprise implementations
                </p>
                <p className="text-xl">
                  3. Created a comprehensive component library for no-code development
                </p>
                <p className="text-xl">
                  4. Established design governance frameworks for enterprise clients
                </p>
              </div>

              <h2 className="text-4xl font-bold mb-8">RESULTS</h2>
              <div className="space-y-6">
                <p className="text-xl">
                  • Reduced design implementation time by 85% through standardization
                </p>
                <p className="text-xl">
                  • Achieved 95% client satisfaction rate across enterprise projects
                </p>
                <p className="text-xl">
                  • Created 200+ enterprise-grade components and patterns
                </p>
                <p className="text-xl">
                  • Successfully scaled team by 300% while maintaining quality
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Innovations</h3>
                <ul className="space-y-2">
                  <li>Enterprise Design System</li>
                  <li>No-Code Component Library</li>
                  <li>Design Governance Framework</li>
                  <li>Implementation Playbooks</li>
                  <li>Client Success Metrics</li>
                </ul>
              </div>

              <div className="bg-zinc-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Team Structure</h3>
                <ul className="space-y-2">
                  <li>Design Directors</li>
                  <li>Implementation Leads</li>
                  <li>UX Engineers</li>
                  <li>Visual Designers</li>
                  <li>Design Systems Specialists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto">
          <Link to="/case-study/rocketreach" className="block group">
            <p className="text-xl mb-4">Next Project</p>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold">RocketReach</h2>
              <ArrowLeft className="w-8 h-8 rotate-180 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default UnqorkCase;