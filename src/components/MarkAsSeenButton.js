import React, { useState, useEffect } from "react";
import config from "../hook/configMstore";

const MarkAsSeenButton = ({ imdbID, seen, onUpdateSeen }) => {
  const [buttonText, setButtonText] = useState(seen ? "Watched" : "Watch");

  useEffect(() => {
    const savedSeen = localStorage.getItem(`seen_${imdbID}`);
    if (savedSeen !== null) {
      setButtonText(savedSeen === "true" ? "Watched" : "Watch");
    }
  }, [imdbID]);

  const toggleSeenStatus = async () => {
    const newSeenStatus = !seen;

    try {
      const response = await fetch(`${config.apiUrl}movies/${imdbID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ watched: newSeenStatus }),
      });

      if (response.ok) {
        localStorage.setItem(`seen_${imdbID}`, newSeenStatus);
        onUpdateSeen(newSeenStatus);
        setButtonText(newSeenStatus ? "Watched" : "Watch");
      } else {
        console.error("Failed to update seen status");
      }
    } catch (error) {
      console.error("Error updating seen status:", error);
    }
  };

  return (
    <button className="mark-as-seen-button" onClick={toggleSeenStatus}>
      {buttonText}
    </button>
  );
};

export default MarkAsSeenButton;
