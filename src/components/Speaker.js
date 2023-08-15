function Session({ title, room }) {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room}</strong>
    </span>
  );
}

function Sessions({ sessions }) {
  return (
    <div className="sessionBox card h-250">
      <Session title={sessions[0].title} room={sessions[0].room.name} />
    </div>
  );
}

function SpeakerImage({ id, first, last }) {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

function SpeakerDemographics({
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
}) {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <div>
        <p>
          {bio} {company} {twitterHandle} {favorite}
        </p>
      </div>
    </div>
  );
}

function Speaker({ speaker }) {
  const { id, first, last, sessions } = speaker;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        {/* speaker image component */}
        <SpeakerImage id={id} first={first} last={last} />
        <SpeakerDemographics {...speaker} />
      </div>
      <Sessions sessions={sessions} />
    </div>
  );
}

export default Speaker;
