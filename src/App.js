// App.js
import React, { useState, useEffect } from "react";
import "./App.css"; // Add any necessary CSS styles here
import img from "./images/pic.png";
import jsonData from "./data.json";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    setTableData(jsonData);
  }, []);

  

  return (
    <>
      <div className="bg">
        <div className="about">
        <a href="https://www.linkedin.com/in/prahlad-gaur-071107abc/" target="_blank" rel="noopener noreferrer">
            <img src={img} alt="Placeholder" />
          </a>
          <div className="text">
            <p>PRAHLAD GAUR</p>
            <p>GeeksforGeeks Articles</p>
          </div>
        </div>
        <div className="list">
          
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Title</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <button>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
