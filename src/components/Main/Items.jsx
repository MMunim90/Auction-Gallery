import React, { useEffect, useState } from "react";

const Main = ({ handleBid, handleBidAmount, frvtItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div id="cat" className="lg:w-2/3 pb-8 lg:pb-28">
      <table className="w-full rounded-2xl overflow-hidden">
        <thead className="bg-white text-black">
          <tr className="border-b border-[#DCE5F3]">
            <th className="px-4 py-8 text-start">Items</th>
            <th className="px-4 py-8 text-start">Current Bid</th>
            <th className="px-4 py-8 text-start">Time Left</th>
            <th className="px-4 py-8 text-start">Bid</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {items.map((item) => {
            const isFrvt = frvtItems.find((fav) => fav.id === item.id);
            return (
              <tr key={item.id} className="border-b border-[#DCE5F3] hover:transform hover:scale-102 transition">
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 mr-4 object-cover"
                  />
                  <span className="text-[#0E2954]">{item.title}</span>
                </td>
                <td className="px-4 py-2 text-[#0E2954]">
                  ${item.currentBidPrice}
                </td>
                <td className="px-4 py-2 text-[#0E2954]">{item.timeLeft}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => {
                      if (!isFrvt) {
                        handleBid(item);
                        handleBidAmount(item.currentBidPrice);
                      }
                    }}
                    disabled={isFrvt}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition
                      ${isFrvt ? "cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
                    title={isFrvt ? "Already in favorites" : "Add to favorites"}
                  >
                    <img
                      src={
                        isFrvt
                          ? "https://i.ibb.co.com/SwcJ2cMV/red-heart.png"
                          : "https://i.ibb.co.com/5h3fXRzF/heart.png"
                      }
                      alt="heart icon"
                      className="w-6 h-6 pointer-events-none"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
