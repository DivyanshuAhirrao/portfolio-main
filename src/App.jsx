import { lazy, Suspense } from "react";
import ScrollBackgroundAnimation from "./components/animation/BackgroundAnimation";
import ParallaxWrapper from "./components/animation/ParallexWrapper";
import ScrollProgressBar from "./components/animation/ScrollProgressBar"; // NEW IMPORT
import TrainAnimation from "./components/animation/TrainAnimation";
import { ThemeProvider } from "./components/context/ThemeContext";
import SuspenseLoader from "./components/animation/SuspenseLoader";
const Layout = lazy(() => import("./components/Layout"));

const App = () => {
  return (
    <ThemeProvider>
      <ScrollBackgroundAnimation />
      <ScrollProgressBar />
       <Suspense fallback={<SuspenseLoader />}>
       <TrainAnimation />
       <ParallaxWrapper>
         <Layout />
       </ParallaxWrapper>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
