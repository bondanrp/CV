import "./app.scss";

import about from "./data/about.json";
import Experience from "./components/experience";
import Stack from "./components/stack";
import Freelance from "./components/freelance";
import Education from "./components/education";
import Banner from "./components/banner";
import Tools from "./components/tools";
function App() {
  return (
    <div className="CV">
      <Banner />
      <div className="CV__header mb-4 px-4">
        <h1 className="m-0">{about.name}</h1>
        <h2>{about.title}</h2>
        <div className="row">
          <div className="col-6">
            <p className="text-sm sub mb-0">{about.about}</p>
          </div>
        </div>
      </div>
      <Stack />
      <Experience />
      <Freelance />
      <div style={{ pageBreakAfter: "always" }}></div>
      <Banner />
      <Education />
      <Tools />
    </div>
  );
}

export default App;
