import { data } from "../../SpeakerData";
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import Header from "./Header";

function Speakers() {
  return (
    <div className="container-fluid">
      <Header />
      <SpeakersToolbar />
      <SpeakersList data={data} />
    </div>
  );
}

export default Speakers;
