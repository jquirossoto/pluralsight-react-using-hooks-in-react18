import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import SpeakerLine from "./SpeakerLine";

function List({ state, dispatch }) {
  const [updatingId, setUpdatingId] = useState(0);
  const isPending = false;
  const speakers = state.speakers;

  function toggleFavoriteSpeaker(speakerRec) {
    const updatedSpeaker = { ...speakerRec, favorite: !speakerRec.favorite };

    dispatch({ type: "updateSpeaker", speaker: updatedSpeaker });

    async function updateRecord() {
      setUpdatingId(speakerRec.id);
      await axios.put(`/api/speakers/${speakerRec.id}`, updatedSpeaker);
      setUpdatingId(0);
    }

    updateRecord();
  }

  return (
    <div className="container">
      <div className="border-0">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Speaker toolbar filter"
        >
          <div className="toolbar-trigger mb-3 flex-grow-04">
            <div className="toolbar-search w-100">
              <input
                value=""
                onChange={(event) => {}}
                type="text"
                className="form-control"
                placeholder="Highlight Names"
              />
            </div>
            <div className="spinner-height">
              {isPending && (
                <i className="spinner-border text-dark" role="status" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {speakers.map(function (speakerRec) {
          const highlight = false;
          return (
            <SpeakerLine
              key={speakerRec.id}
              speakerRec={speakerRec}
              updating={updatingId === speakerRec.id ? updatingId : 0}
              toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRec)}
              highlight={highlight}
            />
          );
        })}
      </div>
    </div>
  );
}

const SpeakerList = () => {
  const darkTheme = false;
  function reducer(state, action) {
    switch (action.type) {
      case "speakersLoaded":
        return { ...state, loading: false, speakers: action.speakers };
      case "setLoadingStatus":
        return { ...state, loading: true };
      case "updateSpeaker":
        return {
          ...state,
          speakers: state.speakers.map((speaker) =>
            speaker.id === action.speaker.id ? action.speaker : speaker
          ),
        };
      default:
        throw new Error("Unexpected action");
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    speakers: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "setLoadingStatus" });
      const response = await axios.get("/api/speakers");
      dispatch({ type: "speakersLoaded", speakers: response.data });
    };

    fetchData();
  }, []);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List state={state} dispatch={dispatch} />
    </div>
  );
};

export default SpeakerList;
