import React from "react";
const api = {
  key: "5353558f99595ded269158d19f581785",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
