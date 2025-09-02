import Layout from "./components/Layout";
import ScrollBackgroundAnimation from "./components/animation/BackgroundAnimation";
import { ThemeProvider } from "./components/context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <ScrollBackgroundAnimation />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
