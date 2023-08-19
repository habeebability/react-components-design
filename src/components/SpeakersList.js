import ReactPlaceholder from "react-placeholder";
import Speaker from "./Speaker";

import useRequestSpeakers from "../hooks/useRequestSpeakers";

function SpeakersList({ showSessions }) {
  const { isLoading, hasError, error, speakersData } = useRequestSpeakers(2000);

  if (hasError === true)
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    );

  // if (isLoading) return <div>Loading...</div>;
  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={!isLoading}
      >
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
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
