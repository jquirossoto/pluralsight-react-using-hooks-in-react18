import React, { useContext } from "react";
import { SpeakerMenuProvider } from "../contexts/SpeakerMenuContext";
import { SpeakersDataProvider } from "../contexts/SpeakersDataContext";
import { ThemeContext } from "../contexts/ThemeContext";
import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";

function Speakers() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenuProvider>
        <SpeakerMenu />
        <div className="container">
          <div className="row g-4">
            <SpeakersDataProvider>
              <SpeakersList />
            </SpeakersDataProvider>
          </div>
        </div>
      </SpeakerMenuProvider>
    </div>
  );
}

export default Speakers;
