
import React, { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import Section from './components/Section';
import { generateRomanticNote } from './services/geminiService';

const App: React.FC = () => {
  const [dynamicNote, setDynamicNote] = useState<string>("");
  const [loadingNote, setLoadingNote] = useState(false);

  const fetchNote = async () => {
    setLoadingNote(true);
    const note = await generateRomanticNote("expressing deep love and the desire to be with her forever");
    setDynamicNote(note);
    setLoadingNote(false);
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <div className="relative min-h-screen">
      <FloatingHearts />

      {/* Hero Header */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-pink-50 to-[#fff5f7]">
        <div className="animate-fade-in space-y-4">
          <h1 className="text-5xl md:text-8xl font-romantic text-pink-500 mb-6">
            Dimpho Diphoko
          </h1>
          <p className="text-2xl md:text-3xl font-serif-elegant italic text-pink-700 max-w-2xl mx-auto">
            "Dimpho, you are my heart's only desire. I love you more than words can say ❤️"
          </p>
          <div className="mt-12 animate-bounce">
            <a href="#desire" className="text-pink-400">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Section: Why I Want You */}
      <Section id="desire" title="Why I Want You" bgColor="bg-pink-50/50">
        <div className="space-y-6 text-center italic">
          <p>
            Dimpho, when I think about my future, I don't see a single day where you aren't right there by my side. 
            I want you because you make the world feel brighter just by existing in it.
          </p>
          <p>
            I want the quiet mornings with you, the late-night talks, and every small moment in between. 
            You aren't just a part of my life—you are the heartbeat of it. I want to be the one who supports you, 
            cherishes you, and loves you exactly as you are, for all of time.
          </p>
          <div className="mt-8">
            <span className="text-4xl text-pink-400">❀</span>
          </div>
        </div>
      </Section>

      {/* Section: Why I Love You */}
      <Section id="why-i-love-you" title="Reasons I Love You">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-pink-100 transform transition hover:scale-105">
            <h3 className="text-2xl font-serif-elegant text-pink-500 mb-3">Your Soul</h3>
            <p className="text-gray-600">I love the depth of your heart and the way you care for the world. Your soul is a rare and beautiful thing that I am honored to know.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-pink-100 transform transition hover:scale-105">
            <h3 className="text-2xl font-serif-elegant text-pink-500 mb-3">Your Light</h3>
            <p className="text-gray-600">You carry a light that illuminates everything around you. Being near you makes me want to be a better person every single day.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-pink-100 transform transition hover:scale-105">
            <h3 className="text-2xl font-serif-elegant text-pink-500 mb-3">Your Wisdom</h3>
            <p className="text-gray-600">I love your perspective on life. You have a way of seeing the beauty in things that others miss, and it captivates me.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-pink-100 transform transition hover:scale-105">
            <h3 className="text-2xl font-serif-elegant text-pink-500 mb-3">Our Connection</h3>
            <p className="text-gray-600">I love how effortless it feels to be with you. You are my best friend and the person who understands me like no one else ever could.</p>
          </div>
        </div>
      </Section>

      {/* Section: Dynamic Heartfelt Note */}
      <div className="py-20 px-6 bg-pink-100/30 text-center relative z-10">
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl border-4 border-white">
          <h2 className="text-3xl font-romantic text-pink-600 mb-6">A Love Letter For You</h2>
          {loadingNote ? (
            <div className="flex justify-center space-x-2 animate-pulse">
              <div className="h-2 w-2 bg-pink-400 rounded-full"></div>
              <div className="h-2 w-2 bg-pink-400 rounded-full"></div>
              <div className="h-2 w-2 bg-pink-400 rounded-full"></div>
            </div>
          ) : (
            <p className="text-xl font-serif-elegant italic leading-relaxed text-gray-700">
              "{dynamicNote}"
            </p>
          )}
        </div>
      </div>

      {/* Section: Forever Us */}
      <Section id="forever-us" title="Forever Us" bgColor="bg-gradient-to-t from-pink-100 to-[#fff5f7]">
        <div className="text-center space-y-8 pb-10">
          <p className="max-w-xl mx-auto text-pink-800 font-medium">
            My promise to you, Dimpho, is simple: I will always choose you. I will walk beside you through every 
            chapter of our lives, celebrating your wins and holding you through the rest.
          </p>
          <div className="flex justify-center space-x-4 text-pink-500">
            <span className="text-4xl animate-pulse">❤</span>
            <span className="text-4xl animate-pulse delay-75">❤</span>
            <span className="text-4xl animate-pulse delay-150">❤</span>
          </div>
          <h3 className="text-3xl font-romantic text-pink-600">You are my forever, Dimpho.</h3>
          <p className="text-sm uppercase tracking-widest text-gray-500 mt-20 italic">Bound by love, always.</p>
        </div>
      </Section>

      <footer className="py-6 text-center text-pink-300 font-light text-sm relative z-10">
        Dedicated with all my heart to Dimpho Diphoko
      </footer>
    </div>
  );
};

export default App;
