import React, { useContext } from "react";
import { SpeakersDataContext } from "../contexts/SpeakersDataContext";
import SpeakerDetail from "./SpeakerDetail";

export default function SpeakersList() {
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);

  if (loadingStatus === "loading")
    return <div className="card">Loading...</div>;
  return (
    <>
      {speakerList.map(function (speakerRec) {
        return (
          <SpeakerDetail
            key={speakerRec.id}
            speakerRec={speakerRec}
            showDetails={false}
          />
        );
      })}
    </>
  );
}
