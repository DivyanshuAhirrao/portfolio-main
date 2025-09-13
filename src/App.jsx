import Layout from "./components/Layout";
import ScrollBackgroundAnimation from "./components/animation/BackgroundAnimation";
import ParallaxWrapper from "./components/animation/ParallexWrapper";
import ScrollProgressBar from "./components/animation/ScrollProgressBar"; // NEW IMPORT
import TrainAnimation from "./components/animation/TrainAnimation";
import { ThemeProvider } from "./components/context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <ScrollBackgroundAnimation />
      <ScrollProgressBar />
       <TrainAnimation /> 
      <ParallaxWrapper> {/* NEW WRAPPER */}
        <Layout />
      </ParallaxWrapper>
    </ThemeProvider>
  );
};

export default App;
