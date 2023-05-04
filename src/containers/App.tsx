import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    (async function () {
      const response = await fetch("https://api.jikan.moe/v4/manga");
      const data = await response.json();
      console.log("res", data);
    })();
  });
  return <h1>Hola chikorita</h1>;
}

export { App };
