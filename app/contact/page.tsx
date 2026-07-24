"use client";

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Send email via Formspree or your email service
      const response = await fetch("https://formspree.io/f/info@zoeforge.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send message. Please try again.");
    }

    // Reset status after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Contact Header */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-orange-600 mb-4">GET IN TOUCH</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Reach out and let's create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Details & Map Section */}
      <section className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground mt-2">NANSANA HEIGHTS, Kampala, Uganda</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground mt-2">
                  +256 702 254 979<br />
                  +256 790 263 386
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground mt-2">info@zoeforge.com</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8242528370314!2d32.5731!3d0.3931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db8d8d8d8d8d9%3A0x1234567890!2sNansana%20Heights%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch With Us</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll respond as soon as possible.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="+256 700 000 000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-green-700">{message}</p>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-700">{message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
