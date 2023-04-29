import { Route, Routes } from "react-router-dom";
import axios from "axios";
import TrainINfo from "./components/Traininfo";
import IndividualTrainInfo from "./components/IndividualTrainInfo";

function App() {
  // function sf(num){
  //   setYash(num)
  // }
  const trains = [
    {
      trainName: "Mumbai Exp",
      trainNumber: "2343",
      departureTime: { Hours: 22, Minutes: 37, Seconds: 0 },
      seatsAvailable: { sleeper: 8, AC: 15 },
      price: { sleeper: 620, AC: 720 },
      delayedBy: 16,
    },
    {
      trainName: "Manoranjan Exp",
      trainNumber: "2347",
      departureTime: { Hours: 17, Minutes: 33, Seconds: 0 },
      seatsAvailable: { sleeper: 5, AC: 1 },
      price: { sleeper: 310, AC: 443 },
      delayedBy: 12,
    },
    {
      trainName: "Kolkata Exp",
      trainNumber: "2345",
      departureTime: { Hours: 20, Minutes: 15, Seconds: 0 },
      seatsAvailable: { sleeper: 16, AC: 70 },
      price: { sleeper: 570, AC: 670 },
      delayedBy: 14,
    },
    {
      trainName: "Pune Exp",
      trainNumber: "2342",
      departureTime: { Hours: 23, Minutes: 0, Seconds: 0 },
      seatsAvailable: { sleeper: 6, AC: 7 },
      price: { sleeper: 734, AC: 1734 },
      delayedBy: 17,
    },
    {
      trainName: "Test Exp",
      trainNumber: "2348",
      departureTime: { Hours: 15, Minutes: 55, Seconds: 0 },
      seatsAvailable: { sleeper: 1, AC: 0 },
      price: { sleeper: 662, AC: 949 },
      delayedBy: 11,
    },
    {
      trainName: "Manu Exp",
      trainNumber: "2346",
      departureTime: { Hours: 19, Minutes: 0, Seconds: 0 },
      seatsAvailable: { sleeper: 15, AC: 10 },
      price: { sleeper: 480, AC: 680 },
      delayedBy: 13,
    },
    {
      trainName: "Hyderabad Exp",
      trainNumber: "2341",
      departureTime: { Hours: 23, Minutes: 55, Seconds: 0 },
      seatsAvailable: { sleeper: 6, AC: 7 },
      price: { sleeper: 554, AC: 1854 },
      delayedBy: 5,
    },
    {
      trainName: "Chennai Exp",
      trainNumber: "2344",
      departureTime: { Hours: 21, Minutes: 35, Seconds: 0 },
      seatsAvailable: { sleeper: 3, AC: 1 },
      price: { sleeper: 312, AC: 440 },
      delayedBy: 15,
    },
  ];

  return (
    <div className="">
      <a href="/" className=" text-center text-5xl py-8 font-extrabold text-white bg-transparent absolute ml-4 md:ml-8 xl:ml-12 animate-pulse">
        Yash Railway System
      </a>
      <Routes>
        <Route path="/" element={<TrainINfo data={trains} />} />
        <Route
          path="/:trainNumber"
          element={<IndividualTrainInfo data={trains} />}
        />
      </Routes>
    </div>
  );
}

export default App;
