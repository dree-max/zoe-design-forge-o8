'use client';

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Process & Timeline",
    questions: [
      {
        q: "What is your design process?",
        a: "We begin with an in-depth discovery phase to understand your vision, goals, and constraints. Our multi-disciplinary team collaborates from the start, ensuring that architectural vision, structural feasibility, MEP efficiency, and site conditions are integrated from the beginning. This approach typically results in better outcomes and fewer conflicts during construction."
      },
      {
        q: "How long does a typical project take?",
        a: "Timelines vary significantly based on project scope and complexity. A residential renovation might take 4-6 months for design, while a large commercial project could require 12-18 months. We provide detailed schedules during the initial scope phase and maintain clear communication throughout all phases."
      },
      {
        q: "Do you provide construction administration?",
        a: "Yes, we offer comprehensive construction administration services including site visits, review of contractor submittals, review of shop drawings, and coordination with the construction team to ensure the design is faithfully executed."
      },
      {
        q: "Can we start with just preliminary designs?",
        a: "Absolutely. Many clients prefer to develop preliminary design concepts and feasibility studies before committing to full design development. We can structure our engagement to meet your budget and timeline needs."
      }
    ]
  },
  {
    category: "Services & Scope",
    questions: [
      {
        q: "What services do you provide?",
        a: "We offer architectural design, structural engineering, MEP (mechanical, electrical, plumbing) engineering, civil engineering, interior design, and landscape architecture. We can provide these services individually or as an integrated team approach, which we recommend for optimal results."
      },
      {
        q: "Do you work on renovations or only new construction?",
        a: "We work on both new construction and renovation projects. Renovations often present unique challenges and opportunities that our experience makes us well-suited to address. Our multi-disciplinary approach is particularly valuable in renovation work."
      },
      {
        q: "What is the minimum project size?",
        a: "We don't have a strict minimum size, but we typically focus on projects where our multi-disciplinary approach adds value. We're happy to discuss your project regardless of scale."
      },
      {
        q: "Do you work with sustainability certifications like LEED?",
        a: "Yes, we have extensive experience with sustainable design practices and LEED certification. Sustainability is integrated into our design process as a core value rather than an afterthought."
      }
    ]
  },
  {
    category: "Working with Us",
    questions: [
      {
        q: "How are project fees structured?",
        a: "We typically use a combination of lump-sum fees for defined phases and hourly rates for additional services or project phases that are harder to estimate upfront. We provide detailed fee proposals after the initial consultation and design scope discussion."
      },
      {
        q: "Do you work in our region?",
        a: "We are based in Uganda and work throughout East Africa. We have experience with local building codes, construction practices, and material availability. We can discuss specific location and site considerations during an initial consultation."
      },
      {
        q: "How do we get started?",
        a: "Contact us to schedule an initial consultation. We'll discuss your project, goals, timeline, and budget. If there's a good fit, we'll provide a proposal outlining our approach and fees for the next phase of work."
      },
      {
        q: "What if we're unsure about our project requirements?",
        a: "That's common. We often help clients clarify their needs through a preliminary planning phase or feasibility study. We can guide you through important decisions about scope, approach, and budget."
      }
    ]
  },
  {
    category: "Our Approach",
    questions: [
      {
        q: "Why does having all disciplines in one firm matter?",
        a: "When your architect, structural engineer, MEP specialist, and other disciplines collaborate from the start rather than handing off sequentially, better ideas emerge. Early coordination prevents costly conflicts, reduces waste, and often leads to more innovative solutions."
      },
      {
        q: "How is your work different from other design firms?",
        a: "Our core difference is our truly integrated multi-disciplinary approach. Rather than coordinating separate specialists, we have all disciplines as part of our studio. We also place strong emphasis on understanding how spaces will be inhabited and experienced by users."
      },
      {
        q: "What types of projects do you most enjoy?",
        a: "We're drawn to projects that present interesting challenges, that will meaningfully impact their users or communities, and where we can explore new approaches to design. We enjoy working with clients who are thoughtful, collaborative, and ambitious."
      },
      {
        q: "Can you share portfolio work or references?",
        a: "Of course. We're proud of our work and happy to share examples of completed projects, discuss case studies, and provide references from previous clients."
      }
    ]
  }
];

type ExpandedState = {
  [key: string]: boolean;
};

export default function FAQPage() {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const toggleExpanded = (id: string) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-reveal-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our process, services, and how we work with clients. Can't find what you're looking for? Get in touch—we're always happy to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqs.map((section, sectionIndex) => (
            <div 
              key={sectionIndex}
              className="animate-reveal-up"
              style={{ animationDelay: `${sectionIndex * 100}ms` }}
            >
              <h2 className="text-3xl font-light mb-8 pb-4 border-b border-border">
                {section.category}
              </h2>
              
              <div className="space-y-4">
                {section.questions.map((faq, qIndex) => {
                  const id = `faq-${sectionIndex}-${qIndex}`;
                  const isExpanded = expanded[id];

                  return (
                    <div
                      key={qIndex}
                      className="border border-border rounded-lg overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleExpanded(id)}
                        className="w-full px-6 py-4 flex items-start justify-between hover:bg-secondary/50 transition-colors text-left"
                      >
                        <h3 className="text-lg font-light pr-4 leading-relaxed">
                          {faq.q}
                        </h3>
                        <ChevronDown
                          size={24}
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="px-6 py-4 border-t border-border bg-secondary/20">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center animate-reveal-up">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're happy to discuss your project in detail. Reach out to start a conversation about how we can help bring your vision to life.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-80 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
