import "./App.css";

import { Album } from "./components/Album";
import { AlbumProvider } from "./AlbumContext";

function App() {
  return (
    <div>
      <AlbumProvider>
        <h1>Photo Organizer</h1>
        <Album />
      </AlbumProvider>
    </div>
  );
}

export default App;
