"use client";

import { useState } from "react";
import { MapPin, Clock, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function Template6ProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "LOCATION",
      detail: "124 Fashion Ave, Milan, IT",
    },
    {
      icon: Clock,
      title: "BUSINESS HOURS",
      detail: "Mon-Sat: 10am — 8pm",
    },
    {
      icon: Phone,
      title: "CALL US",
      detail: "+39 02 123 4567",
    },
    {
      icon: Mail,
      title: "INQUIRIES",
      detail: "hello@sandandsaga.com",
    },
  ];

  return (
    <div className="w-full pb-20">
      
      {/* 1. FOUNDER HERO BANNER (SLATE BLUE) */}
      <section className="px-6 md:px-14 py-8">
        <div className="max-w-[1240px] mx-auto bg-[#6f80a2] rounded-[24px] p-8 md:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left: Founder Round Portrait & Welcome Note */}
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-6">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                alt="Lana Roy - Founder"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[14px] md:text-[15px] text-white/95 leading-relaxed font-light max-w-sm">
              Hey! This Lana Roy . I as a founder of Sand and Saga Cafe invite you to our Cafe . We offer delicious treats to every customer we serve
            </p>
          </div>

          {/* Right: Cafe Interior / Counter Photo */}
          <div className="lg:col-span-7 rounded-[20px] overflow-hidden aspect-[16/10] shadow-md border-2 border-white/20">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
              alt="Sand and Saga Cafe Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. CAFE TITLE & 4 INFO PILLS */}
      <section className="px-6 md:px-14 py-10 max-w-[1240px] mx-auto">
        <h2 className="text-[36px] md:text-[46px] font-bold font-playfair text-[#1f284c] text-center mb-10 tracking-tight">
          Sand and Saga Cafe
        </h2>

        {/* 4 Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-4 flex items-center gap-3.5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[#faecd1] text-[#d4a329] flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider">
                    {info.title}
                  </span>
                  <span className="text-[12px] font-semibold text-gray-800 leading-tight">
                    {info.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CONTACT US ! FORM */}
      <section className="px-6 md:px-14 py-6 max-w-[1240px] mx-auto">
        <h3 className="text-[26px] md:text-[30px] font-bold font-playfair text-[#d4a329] mb-4">
          Contact Us !
        </h3>

        <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-xl border border-gray-100">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
              <CheckCircle2 size={46} className="text-[#157a4f]" />
              <h4 className="text-[20px] font-bold text-gray-900 font-playfair">
                Thank you for reaching out!
              </h4>
              <p className="text-[13px] text-gray-500 max-w-md">
                We have received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                {/* Left Inputs */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-800 mb-2 font-inter">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Input text"
                      className="w-full bg-white border border-[#d8cdbf] rounded-[10px] px-4 py-3 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#d4a329] focus:ring-1 focus:ring-[#d4a329] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-gray-800 mb-2 font-inter">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Input text"
                      className="w-full bg-white border border-[#d8cdbf] rounded-[10px] px-4 py-3 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#d4a329] focus:ring-1 focus:ring-[#d4a329] transition-all"
                    />
                  </div>
                </div>

                {/* Right Textarea */}
                <div>
                  <label className="block text-[13px] font-semibold text-gray-800 mb-2 font-inter">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Input text"
                    className="w-full bg-white border border-[#d8cdbf] rounded-[10px] p-4 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#d4a329] focus:ring-1 focus:ring-[#d4a329] transition-all resize-none h-[145px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-[#d4a329] hover:bg-[#c39322] active:scale-95 text-white font-semibold text-[14px] px-12 py-2.5 rounded-[8px] shadow-md transition-all duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
