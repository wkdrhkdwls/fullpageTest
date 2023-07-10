import $ from "jquery";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import Food from "../../assets/fullpage/food.mp4";
import Grape from "../../assets/fullpage/grape.mp4";
import Sea from "../../assets/fullpage/sea.mp4";
import Header from "../../components/Layout/header";
import Footer from "../../components/Layout/footer";

const Home = () => {
  const Videos = [Food, Grape, Sea];
  $(() => {
    $("#fullpage").fullpage({
      menu: "#menu",
      //   anchors: ["1", "2", "3", "4"],
      sectionsColor: ["black", "blue", "red", "orange"],
    });
  });
  return (
    <main>
      <Header />
      <div id="fullpage">
        {Videos.map((video, index) => (
          <div className="section" id={`#section${index}`}>
            <video
              className="h-full w-full object-cover"
              data-autoplay
              muted
              loop
            >
              <source data-src={video} type="video/mp4" />
            </video>
          </div>
        ))}
        <div className="section fp-auto-height" id="#section4">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
