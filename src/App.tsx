import Header from "./components/Header/Header";
import NavBar from "./components/Navigation/NavBar";

import Realtors from "./components/Realtors/Realtors";
import Features from "./components/Features/Features";
import Story from "./components/Story/Story";
import Gallery from "./components/Gallery/Gallery";
import Homes from "./components/Homes/Homes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
