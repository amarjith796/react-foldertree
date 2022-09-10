import { useState } from "react";

const FolderComponent = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <span style={{ color: "green" }} onClick={() => setExpand(!expand)}>
          {explorer.name}
        </span>

        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}
        >
          {explorer.items.map((d) => {
            return <FolderComponent key={d.name} explorer={d} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <>
      <span>{explorer.name}</span>
      <br />
    </>
  );
};

export default FolderComponent;
