// import { data } from "../../SpeakerData";
import Speakers from "./Speakers";
import Header from "./Header";
import Layout from "./Layout";

function App() {
  return (
    <Layout startingTheme="light">
      <div>
        <Header />
        <Speakers />
      </div>
    </Layout>
  );
}

export default App;
