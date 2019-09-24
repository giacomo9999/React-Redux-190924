import React from "react";
import Story from "./Story";

const Stories = ({ stories }) => (
  <div className="stories">
    {(stories || []).map(entry => (
      <Story key={entry.objectId} story={entry} />
    ))}
  </div>
);

export default Stories;
