interface VibePageProps {
  mood: string;
  onBack: () => void;
}

const VibePage: React.FC<VibePageProps> = ({ mood, onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">Mood: {mood}</h2>
      <p className="text-gray-400 mb-10">
        This is where the music would appear!
      </p>
      <button
        className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        onClick={onBack}
      >
        Back
      </button>
    </div>
  );
};

export default VibePage;
