import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// import "./App.css";

const url = "/api/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
      console.log(tours);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
