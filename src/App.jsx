import { lazy, Suspense } from "react";
import ScrollBackgroundAnimation from "./components/animation/BackgroundAnimation";
import ParallaxWrapper from "./components/animation/ParallexWrapper";
import ScrollProgressBar from "./components/animation/ScrollProgressBar"; // NEW IMPORT
import TrainAnimation from "./components/animation/TrainAnimation";
import { ThemeProvider } from "./components/context/ThemeContext";
const Layout = lazy(() => import("./components/Layout"));

const App = () => {
  return (
    <ThemeProvider>
      <ScrollBackgroundAnimation />
      <ScrollProgressBar />
       <TrainAnimation /> 
       <Suspense fallback={<div className="text-center py-10">Loading…</div>}>
      <ParallaxWrapper> {/* NEW WRAPPER */}
        <Layout />
      </ParallaxWrapper>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
