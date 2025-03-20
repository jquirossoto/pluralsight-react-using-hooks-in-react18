import React, { useContext, useMemo } from "react";
import { SpeakerMenuContext } from "../contexts/SpeakerMenuContext";
import { SpeakersDataContext } from "../contexts/SpeakersDataContext";
import useSpeakerSortAndFilter from "../hooks/useSpeakerSortAndFilter";
import SpeakerDetail from "./SpeakerDetail";

export default function SpeakersList() {
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const { speakingSaturday, speakingSunday, searchText } = useContext(
    SpeakerMenuContext
  );
  const speakerListFiltered = useMemo(
    () =>
      useSpeakerSortAndFilter(
        speakerList,
        speakingSaturday,
        speakingSunday,
        searchText
      ),
    [
      JSON.stringify(speakerList),
      speakingSaturday,
      speakingSunday,
      searchText,
      loadingStatus,
    ]
  );

  if (loadingStatus === "loading") {
    return <div className="card">Loading...</div>;
  }
  return (
    <>
      {speakerListFiltered.map(function (speakerRec) {
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
