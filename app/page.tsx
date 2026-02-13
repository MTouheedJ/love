"use client";

import { useCallback } from "react";
import FloatingHearts from "./components/FloatingHearts";
import HeroSection from "./components/HeroSection";
import StoryTimeline from "./components/StoryTimeline";
import FunMessages from "./components/FunMessages";
import MemoryGallery from "./components/MemoryGallery";
import ProposalSection from "./components/ProposalSection";
import Footer from "./components/Footer";
import BackgroundMusic from "./components/BackgroundMusic";

export default function Home() {
  const scrollToStory = useCallback(() => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="romantic-bg relative min-h-screen">
      <BackgroundMusic src="/your-romantic-song.mp3" />
      <FloatingHearts />
      <HeroSection onTap={scrollToStory} />
      <StoryTimeline />
      <FunMessages />
      {/* <MemoryGallery /> */}
      <ProposalSection onYes={() => {}} />
      <Footer />
    </div>
  );
}
