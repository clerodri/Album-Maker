import "./App.css";

import { Album } from "./components/Album";
import { AlbumProvider } from "./AlbumContext";

function App() {
  return (
    <div className="root">
      <AlbumProvider>
        <Album />
      </AlbumProvider>
    </div>
  );
}

export default App;
