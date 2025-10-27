const LandingPage = ({
  onMoodSelect,
}: {
  onMoodSelect: (mood: string) => void;
}) => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-6">VibeScape 🎧</h1>
    <p className="text-gray-400 mb-10">
      Select your current mood to discover matching music
    </p>
    {/* MoodSelector will go here */}
  </div>
);

export default LandingPage;
