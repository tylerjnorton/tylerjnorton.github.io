import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, TrendingUp, Target, Palette } from 'lucide-react';

function Achievement({ icon, title, metric, description }: { 
  icon: React.ReactNode; 
  title: string; 
  metric: string; 
  description: string; 
}) {
  return (
    <div className="p-8 bg-white border border-black">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-4xl font-bold mb-4">{metric}</p>
      <p className="text-zinc-600">{description}</p>
    </div>
  );
}

function RocketReachCase() {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-black text-white">
        <div className="container mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">ROCKETREACH</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-2xl font-light mb-8">
                Transforming a complex B2B SaaS platform into an intuitive, powerful tool for business professionals.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-zinc-400 mb-2">Role</p>
                  <p className="text-xl">Senior Design Lead</p>
                </div>
                <div>
                  <p className="text-zinc-400 mb-2">Timeline</p>
                  <p className="text-xl">2022 - Current</p>
                </div>
              </div>
            </div>
            <div className="aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="RocketReach Office"
                className="w-full h-full object-cover"
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
              title="User Growth"
              metric="2.5M+"
              description="Active users across the platform, with significant growth in enterprise adoption"
            />
            <Achievement
              icon={<TrendingUp className="w-8 h-8" />}
              title="Conversion Rate"
              metric="+127%"
              description="Increase in conversion rate through strategic UX improvements and testing"
            />
            <Achievement
              icon={<Target className="w-8 h-8" />}
              title="User Satisfaction"
              metric="92%"
              description="Positive user feedback on new features and interface improvements"
            />
            <Achievement
              icon={<Palette className="w-8 h-8" />}
              title="Design System"
              metric="100%"
              description="Adoption of new design system across all product teams"
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
                RocketReach needed to evolve from a simple search tool into a comprehensive B2B platform. The challenge was to maintain simplicity while adding powerful features for enterprise users, all while scaling the product organization.
              </p>
              
              <h2 className="text-4xl font-bold mb-8">APPROACH</h2>
              <div className="space-y-6 mb-12">
                <p className="text-xl">
                  1. Established a robust design system to ensure consistency across the platform
                </p>
                <p className="text-xl">
                  2. Implemented a user-centered design process with regular testing and feedback
                </p>
                <p className="text-xl">
                  3. Created a scalable component library that reduced development time by 60%
                </p>
                <p className="text-xl">
                  4. Developed an enterprise-focused feature set without compromising UX
                </p>
              </div>

              <h2 className="text-4xl font-bold mb-8">RESULTS</h2>
              <div className="space-y-6">
                <p className="text-xl">
                  • Increased user base to over 2.5 million active users
                </p>
                <p className="text-xl">
                  • Improved conversion rates by 127% through strategic UX improvements
                </p>
                <p className="text-xl">
                  • Achieved 92% positive user feedback on new features
                </p>
                <p className="text-xl">
                  • Successfully launched enterprise platform with 100% design system adoption
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-100 p-8">
                <h3 className="text-xl font-bold mb-4">Key Features Delivered</h3>
                <ul className="space-y-2">
                  <li>Advanced Search Interface</li>
                  <li>Enterprise Dashboard</li>
                  <li>Chrome Extension</li>
                  <li>API Integration Tools</li>
                  <li>Bulk Processing System</li>
                </ul>
              </div>

              <div className="bg-zinc-100 p-8">
                <h3 className="text-xl font-bold mb-4">Design Process</h3>
                <ul className="space-y-2">
                  <li>User Research</li>
                  <li>Iterative Design</li>
                  <li>A/B Testing</li>
                  <li>Component Library</li>
                  <li>Design System</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto">
          <Link to="/case-study/unqork" className="block group">
            <p className="text-xl mb-4">Next Project</p>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold">Unqork</h2>
              <ArrowLeft className="w-8 h-8 rotate-180 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default RocketReachCase;