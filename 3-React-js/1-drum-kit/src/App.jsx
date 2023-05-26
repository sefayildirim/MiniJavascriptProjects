import {Clap} from "./components/Cards/Clap.jsx";
import {Kick} from "./components/Cards/Kick.jsx";
import {Hihat} from "./components/Cards/Hihat.jsx";
import {Openhat} from "./components/Cards/Openhat.jsx";

function App() {

  return (
    <>
        <div className="container">
            <div className="d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
                <Clap />
                <Hihat />
                <Kick />
                <Openhat />
            </div>
        </div>
    </>
  )
}

export default App
