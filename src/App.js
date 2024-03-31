import "./App.css";
import Hero from "./components/Hero/Hero.js";
import TravelBlog from "./components/TravelBlog/TravelBlog.js";

//dynamic travel data for travel blog components
import TravelData from "./TravelData.js";

function App() {
  const blogs = TravelData.map((item) => {
    return (
      <TravelBlog
        key={item.id}
        place={item.placeHeading}
        placeImg1={item.placeImg1}
        placeImg2={item.placeImg2}
        placeImg3={item.placeImg3}
        desc={item.placeDescription}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      {blogs}
    </div>
  );
}

export default App;
