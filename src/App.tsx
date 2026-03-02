import { ChangeBackgroundButton } from "./components/sidebar/ChangeBackgroundButton";
import { BackgroundSidebar } from "./components/sidebar/BackgroundSidebar";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <ChangeBackgroundButton />
      <BackgroundSidebar />
    </div>
  );
}

export default App;
