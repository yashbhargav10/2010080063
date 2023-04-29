import React from "react";
import { useParams } from "react-router-dom";

function IndividualTrainINfo({ data }) {
  const { trainNumber } = useParams();

  const train = data[trainNumber];
  return (
    <div className=" bg-gradient-to-r flex justify-center items-center from-yellow-500 to-orange-500 h-screen rounded-3xl p-4 m-4">
      <div className=" bg-white p-4 flex flex-col justify-center items-center rounded-3xl py-8">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wQTUIBb6F_83dA6XBv9UTbe0-Bt3-o1HVmjLGZc&s" />
        <div className=" flex justify-between w-full px-8 py-4">
          <h1>{train.trainName}</h1>
          <h1>{train.trainNumber}</h1>
        </div>
        <div className=" flex justify-between items-center w-full px-8 py-4">
          <h1>Availablity</h1>
          <div className=" flex justify-between w-full px-8 py-4">
            <h1>
              {train.seatsAvailable.sleeper} SL @ RS.{train.price.sleeper} each
            </h1>
            <h1>
              {train.seatsAvailable.AC} AC @ RS.{train.price.AC} each
            </h1>
          </div>
        </div>
        <div className=" flex justify-between items-center w-full px-8 py-4">
          <h1>Timmings : </h1>
            <h1>
            {train.departureTime.Hours}Hours - {train.departureTime.Minutes}Minutes - {train.departureTime.Seconds}Second
            </h1>
        </div>
        <div className=" flex justify-between w-full px-8 py-4">
          <h1>Delayed BY</h1>
          <h1>{train.delayedBy}Hours</h1>
        </div>
      </div>
    </div>
  );
}

export default IndividualTrainINfo;