import { useState, useEffect } from "react";
import Speaker from "./Speaker";

import { data } from "../../SpeakerData";

function SpeakersList({ showSessions }) {
  const [speakersData, setSpeakersData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(1000);
        // throw "Had Error";
        setIsLoading(false);
        setSpeakersData(data);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
        setError(error);
      }
    }
    delayFunc();
  }, []);

  function onFavoriteToggle(id) {
    const speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };

    const speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakersData(speakersDataNew);
  }

  if (hasError === true)
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    );

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;
