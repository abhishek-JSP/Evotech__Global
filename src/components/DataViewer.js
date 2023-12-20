import React, { useEffect, useState } from "react";
import axios from "axios";
import './DataViewer.css';

const DataViewer = () => {
  const [responses, setResponses] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      setResponses(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="data-viewer">
      <h2>Previous Survey Form Submissions</h2>
      {responses.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((response) => (
              <tr key={response.id}>
                <td>{response.name}</td>
                <td>{response.email}</td>
                <td>{response.gender}</td>
                <td>{response.nationality}</td>
                <td>{response.phone}</td>
                <td>{response.address}</td>
                <td>{response.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


export default DataViewer;
