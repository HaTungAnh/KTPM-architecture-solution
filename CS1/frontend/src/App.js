import {
  Header,
  Hero,
  Footer,
} from "./components/sections";
import UrlShortener from "./components/UrlShortener";

const App = () => {
  return (
    <main className="bg-neutral-grayTwo">
      <div className="bg-white pb-36">
        <Header />
        <Hero />
      </div>

      <UrlShortener />
      <Footer />
    </main>
  );
};

export default App;
