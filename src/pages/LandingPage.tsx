import React from "react";
import MoodSelector from "../components/MoodSelector";

interface LandingPageProps {
  onMoodSelect: (mood: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onMoodSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-white">VibeScape 🎧</h1>
      <p className="text-gray-400 mb-10">
        Select your current mood to discover matching music
      </p>
      {/* Replace placeholder button with MoodSelector */}
      <MoodSelector onMoodSelect={onMoodSelect} />
    </div>
  );
};

export default LandingPage;
