interface LandingPageProps {
  onMoodSelect: (mood: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onMoodSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">VibeScape 🎧</h1>
      <p className="text-gray-400 mb-10">
        Select your current mood to discover matching music
      </p>
      {/* For now, just a placeholder button to test switching */}
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        onClick={() => onMoodSelect("Happy")}
      >
        Test Mood
      </button>
    </div>
  );
};

export default LandingPage;
