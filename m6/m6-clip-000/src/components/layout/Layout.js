import About from "../about/About";
import { ThemeProvider } from "../contexts/ThemeContext";
import SpeakerModal from "../speakerModal/SpeakerModal";
import Speaker from "../speakers/Speaker";
import SpeakerList from "../speakers/SpeakerList";
import Speakers from "../speakers/Speakers";
import AppMenu from "./AppMenu";
import Header from "./Header";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout({ url }) {
  const speakerId = parseInt(url.substring(9).replace("#", ""));

  return (
    <ThemeProvider>
      <Header />
      <AppMenu />
      {url === "/about" && <About />}
      {url === "/" && <Speakers />}
      {url.startsWith("/speaker/") && <Speaker id={speakerId} />}
      {url.startsWith("/speakerlist") && <SpeakerList />}
      {url.startsWith("/speakerpopup") && <SpeakerModal modalShow={true} />}
    </ThemeProvider>
  );
}
