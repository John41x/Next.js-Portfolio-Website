"use client";

import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

const AnalyticsPlatformProjectDetails = () => {
  const features = [
    {
      title: "Natural Language Queries",
      description: "Built agentic AI system enabling intuitive natural language queries on 10M+ data rows, reducing time-to-insight by 40%",
      icon: "/grid.svg"
    },
    {
      title: "Real-time Anomaly Detection",
      description: "Implemented advanced anomaly detection algorithms with real-time monitoring and alerting capabilities",
      icon: "/b4.svg"
    },
    {
      title: "Knowledge Graph Workflow",
      description: "Deployed Palantir Ontology-based knowledge graph workflow, reducing LLM hallucinations by 40%+",
      icon: "/b5.svg"
    },
    {
      title: "Semantic Search Integration",
      description: "Integrated semantic search agent with RAG workflow for company policies from SharePoint, delivering actionable insights 3x faster",
      icon: "/grid.svg"
    }
  ];

  const techStack = [
    { name: "Palantir Foundry", icon: "/Palantir.svg" },
    { name: "Snowflake", icon: "/Snowflake.png" },
    { name: "OpenAI", icon: "/OpenAI.png" },
    { name: "Python", icon: "/python.svg" },
    { name: "PostgreSQL", icon: "/Postgresql.png" }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="pb-20 pt-36">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-custom-sage font-bold font-heading max-w-80">
              <TextGenerateEffect words="SWE Internship Capstone Project" />
            </p>

            <h1 className="font-display text-center text-[50px] md:text-6xl lg:text-7xl uppercase tracking-[0.15em] text-custom-darkOlive leading-tight mt-5 mb-2 font-bold">
              <TextGenerateEffect words="CBRE Analytics Engine" />
            </h1>

            <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl font-body text-custom-olive font-medium">
              <TextGenerateEffect words="Leveraging Palantir Foundry with Snowflake integration for enterprise-grade AI analytics" />
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
              <a href="#demo">
                <MagicButton
                  title="View Demo"
                  icon={<FaExternalLinkAlt />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section id="overview" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading text-custom-darkOlive font-bold text-center mb-10">
                Project <span className="text-custom-lightOlive font-bold">Overview</span>
              </h2>
              <div className="space-y-4 text-custom-olive">
                <p className="text-lg">
                  Designed and built an agentic AI-powered analytics platform from scratch in Palantir Foundry with Snowflake integration, 
                  enabling natural language queries and real-time anomaly detection on 10M+ rows.
                </p>
                <p className="text-lg">
                  The platform leverages cutting-edge AI technologies to transform how enterprises interact with their data, 
                  providing intelligent insights and automated anomaly detection capabilities.
                </p>
                <p className="text-lg">
                  Key achievements include reducing time-to-insight by 40%, decreasing LLM hallucinations by 40%+, 
                  and delivering actionable insights 3x faster through semantic search integration.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 bg-custom-darkOlive rounded-3xl p-4">
                <div className="w-full h-full bg-custom-olive/20 rounded-2xl flex flex-col items-center justify-center">
                  <p className="text-custom-darkOlive font-bold text-xl mb-2">Analytics Dashboard</p>
                  <p className="text-custom-olive text-sm text-center">Interactive data visualization interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="heading text-custom-darkOlive font-bold text-center mb-10">
            Key <span className="text-custom-lightOlive font-bold">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-custom-darkOlive mb-3">{feature.title}</h3>
                <p className="text-custom-olive">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="heading text-custom-darkOlive font-bold text-center mb-10">
            Live <span className="text-custom-lightOlive font-bold">Demo</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-custom-darkOlive mb-4">Experience CBRE Analytics Engine</h3>
              <p className="text-custom-olive mb-6">
                Get a hands-on experience with the AI-powered analytics platform and powerful features. 
                The demo showcases real-world scenarios and demonstrates how the system simplifies 
                complex data analytics tasks with natural language queries and anomaly detection.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-custom-lightOlive rounded-full mr-3"></div>
                  <span className="text-custom-olive">Interactive Dashboard Interface</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-custom-lightOlive rounded-full mr-3"></div>
                  <span className="text-custom-olive">Natural Language Query Processing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-custom-lightOlive rounded-full mr-3"></div>
                  <span className="text-custom-olive">Real-time Anomaly Detection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-custom-lightOlive rounded-full mr-3"></div>
                  <span className="text-custom-olive">Knowledge Graph Visualization</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 bg-custom-darkOlive rounded-3xl p-4">
                <div className="w-full h-full bg-custom-olive/20 rounded-2xl flex flex-col items-center justify-center">
                  <p className="text-custom-darkOlive font-bold text-xl mb-2">Live Demo Video</p>
                  <p className="text-custom-olive text-sm text-center mb-4">Placeholder for CBRE Analytics Engine demo video<br/>showing AI-powered insights and Palantir integration</p>
                  <div className="w-16 h-16 bg-custom-lightOlive rounded-full flex items-center justify-center mx-auto">
                    <FaExternalLinkAlt className="text-custom-darkOlive text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech-stack" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="heading text-custom-darkOlive font-bold text-center mb-10">
            Technology <span className="text-custom-lightOlive font-bold">Stack</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                  <Image src={tech.icon} alt={tech.name} width={32} height={32} />
                </div>
                <span className="text-custom-darkOlive font-semibold text-sm text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/#projects">
              <MagicButton
                title="Back to Projects"
                icon={<FaLocationArrow />}
                position="left"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-custom-olive/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-custom-olive text-sm mb-4">
            A Next.js Website by yours truly ©
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/john-luke-52012235a/" target="_blank" rel="noopener noreferrer" className="text-custom-olive hover:text-custom-darkOlive transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/John41x" target="_blank" rel="noopener noreferrer" className="text-custom-olive hover:text-custom-darkOlive transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:John.Luke8054@gmail.com" className="text-custom-olive hover:text-custom-darkOlive transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457l12 9 12-9z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AnalyticsPlatformProjectDetails;
