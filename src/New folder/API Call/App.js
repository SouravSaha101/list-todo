import React, { useState, useEffect } from "react";
import "./App.css";

// const fetchData = (url) => {
//   return;
// };

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    async function getData() {
      try {
        let apiData = await fetch(url)
          .then((res) => res.json())
          .then((res) => {
            return res;
          });
        setData(() => apiData);
        setLoading(false);
      } catch {
        setLoading(true);
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading && <h1> .... Loading</h1>}
        {data.map((e) => (
          <div key={e.id}>
            <h1>{e.name}</h1>
            <h3>{e.username}</h3>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
