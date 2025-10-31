import AudioFeaturesChart, {
  type FeatureDatum,
} from "../components/AudioFeaturesChart";

interface VibePageProps {
  mood: string;
  onBack: () => void;
}

const VibePage: React.FC<VibePageProps> = ({ mood, onBack }) => {
  const mockFeatures: FeatureDatum[] = [
    { name: "Danceability", value: 68 },
    { name: "Energy", value: 55 },
    { name: "Valence", value: 42 },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 py-10 text-white">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-5xl mb-10">
        <h2 className="text-3xl font-bold">Mood: {mood}</h2>
        <button
          onClick={onBack}
          className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-lg transition"
        >
          Back
        </button>
      </div>

      {/* Audio feature chart (now real, mock data) */}
      <div className="w-full max-w-4xl bg-slate-800 rounded-xl p-8 shadow-md text-left mb-10">
        <AudioFeaturesChart
          data={mockFeatures}
          title="Audio features (preview)"
        />
      </div>

      {/* Placeholder for track list */}
      <div className="w-full max-w-4xl bg-slate-800 rounded-xl p-8 shadow-md text-center">
        <p className="text-gray-400 italic">
          🎶 Suggested tracks will appear here
        </p>
      </div>
    </div>
  );
};

export default VibePage;
