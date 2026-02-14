import { lazy, Suspense } from "react";
import ScrollBackgroundAnimation from "./components/animation/BackgroundAnimation";
import ParallaxWrapper from "./components/animation/ParallexWrapper";
import ScrollProgressBar from "./components/animation/ScrollProgressBar";
import { ThemeProvider } from "./components/context/ThemeContext";
import SuspenseLoader from "./components/animation/SuspenseLoader";
const Layout = lazy(() => import("./components/Layout"));

const App = () => {
  return (
    <ThemeProvider>
      <ScrollBackgroundAnimation />
      <ScrollProgressBar />
       <Suspense fallback={<SuspenseLoader />}>
       <ParallaxWrapper>
         <Layout />
       </ParallaxWrapper>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
