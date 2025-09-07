import Layout from "./components/Layout";
import ScrollBackgroundAnimation from "./components/animation/BackgroundAnimation";
import ScrollProgressBar from "./components/animation/ScrollProgressBar"; // NEW IMPORT
import { ThemeProvider } from "./components/context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <ScrollBackgroundAnimation />
      <ScrollProgressBar />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
