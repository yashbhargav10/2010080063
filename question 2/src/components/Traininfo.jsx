import React from "react";

function TrainINfo({data}) {
  return (
    <div className=" flex justify-center items-center h-screen bg-gradient-to-t from-green-500 via-white to-orange-500">
      {" "}
      <div className=" flex max-w-7xl mx-auto">
        <div class="relative  w-full">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Train Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Train Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Departure
                </th>
                <th scope="col" class="px-6 py-3">
                  Seats
                </th>
                <th scope="col" class="px-6 py-3">
                  Delayed By
                </th>
              </tr>
            </thead>
            <tbody>
            {data.map((item ,index) =>  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <a href={`/${index}`}>{item.trainName}</a>
                </th>
                <td class="px-6 py-4"><a href={`/${index}`}>{item.trainNumber}</a></td>
                <td class="px-6 py-4">{item.departureTime.Hours}H - {item.departureTime.Minutes}M - {item.departureTime.Seconds}S</td>
                <td class="px-6 py-4">{item.seatsAvailable.sleeper}SL - {item.seatsAvailable.AC}AC</td>
                <td class="px-6 py-4">{item.delayedBy}H</td>
              </tr> )}
             
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TrainINfo;