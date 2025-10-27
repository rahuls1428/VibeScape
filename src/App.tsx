import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import VibePage from "./pages/VibePage";

function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {!selectedMood ? (
        <LandingPage onMoodSelect={setSelectedMood} />
      ) : (
        <VibePage mood={selectedMood} onBack={() => setSelectedMood(null)} />
      )}
    </div>
  );
}

export default App;
