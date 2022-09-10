// import "./styles.css";
import FolderComponent from "./FolderComponent";
import { data } from "./data/folderData";

export default function App() {
  return (
    <div className="App">
      <FolderComponent explorer={data} />
    </div>
  );
}
