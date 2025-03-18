import { useContext } from "react";
import { speakerList } from "../../../speakersData";
import { ThemeContext } from "../../App";
import SpeakerDetail from "./SpeakerDetail";

export default function Speaker({ id }) {
  const { darkTheme } = useContext(ThemeContext);
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  return speakerRec ? (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}
