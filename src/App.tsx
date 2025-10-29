import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import VibePage from "./pages/VibePage";

const App = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {!selectedMood ? (
        /* its calling LandingPage variable in LandingPage file with following properties (props): onMoodSelect  
           Rendering LandingPage component and passing setSelectedMood function as the onMoodSelect prop */
        <LandingPage onMoodSelect={setSelectedMood} />
      ) : (
        /* it's calling vibe page with following properties (props): mood and onBack */
        <VibePage mood={selectedMood} onBack={() => setSelectedMood(null)} />
      )}
    </div>
  );
};

export default App;
