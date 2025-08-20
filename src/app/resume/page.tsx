import Link from "next/link";
import { Download, Calendar, MapPin, Mail, Phone } from "lucide-react";

import {
  EMAIL,
  LANGUAGES,
  LOCATION,
  NUMBER,
  SOFT_SKILLS,
  TECH_SKILLS,
  TOOLS_OTHERS,
} from "@/constants/constants";
import ResumeHeader from "@/components/resumeInfo/ResumeHeader";
import ResumeInfo from "@/components/resumeInfo/ResumeInfo";


export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Maksym Kostiv</h1>
              <p className="text-xl text-blue-100">Frontend Developer</p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <ResumeHeader icon={<Mail size={16} />} content={EMAIL} />
                <ResumeHeader icon={<Phone size={16} />} content={NUMBER} />
                <ResumeHeader icon={<MapPin size={16} />} content={LOCATION} />
              </div>
            </div>
            <Link
              href="/CV_Maksym Kostiv_Frontend Developer.pdf"
              target="_blank"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </Link>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I am a motivated frontend developer passionate about creating
              responsive and user-friendly web applications. I’ve completed the
              Mate Academy Frontend course, where I gained practical experience
              with HTML, CSS, JavaScript, TypeScript, and React by building
              real-world projects. Currently, I continue to grow my skills
              through personal projects and constant learning.
            </p>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ResumeInfo
                heading="Frontend Technologies"
                skills={TECH_SKILLS}
                styling="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              />
              <ResumeInfo
                heading="Tools & Others"
                skills={TOOLS_OTHERS}
                styling="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
              />
              <ResumeInfo
                heading="Tools & Others"
                skills={SOFT_SKILLS}
                styling="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
              />
              <ResumeInfo
                heading="Languages"
                skills={LANGUAGES}
                styling="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
              />
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Frontend Developer
                    </h3>
                    <p className="text-blue-600 font-medium">Company Name</p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>2024 - 2025</span>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-2 list-disc">
                  <li>
                    Developed and maintained responsive web applications using
                    React and TypeScript
                  </li>
                  <li>
                    Collaborated with design teams to implement pixel-perfect
                    user interfaces,
                  </li>
                  <li>
                    Optimized application performance resulting in 40% faster
                    load times
                  </li>
                  <li>
                    Implemented modern development practices including code
                    reviews and testing
                  </li>
                  <li>
                    Worked with team using Scrum Methodology
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Education
            </h2>
            <div className="border-l-4 border-purple-500 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Bachelor&apos;s Degree in Logistics
                  </h3>
                  <p className="text-purple-600 font-medium">Lviv Polytechnic National University</p>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <Calendar size={14} />
                  <span>2020 - 2024</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
