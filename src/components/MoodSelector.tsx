import React from "react";

interface MoodSelectorProps {
  onMoodSelect: (mood: string) => void;
}

const moods = ["Happy", "Sad", "Energetic", "Chill", "Romantic"];

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodSelect }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-10">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => onMoodSelect(mood)}
            className="
              relative overflow-hidden
              bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900
              text-white font-semibold py-4 px-8 rounded-2xl shadow-md
              cursor-pointer transition-all duration-300
              w-[160px] sm:w-[180px]
              before:absolute before:inset-0 before:rounded-2xl
              before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500
              before:opacity-0 before:blur-sm before:transition-opacity before:duration-300
              hover:before:opacity-100
            "
          >
            <span className="relative z-10">{mood}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
