import React, { useEffect, useState } from "react";

const Main = ({ handleBid, handleBidAmount, frvtItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedItems = data.map((item) => {
          const endTime = new Date().getTime() + convertToMs(item.timeLeft);
          return { ...item, endTime };
        });
        setItems(updatedItems);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map((item) => {
          const remaining = Math.max(item.endTime - new Date().getTime(), 0);
          return { ...item, timeLeftFormatted: formatTime(remaining) };
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const convertToMs = (timeString) => {
    let total = 0;
    timeString.split(" ").forEach((part) => {
      if (part.includes("h")) total += parseInt(part) * 60 * 60 * 1000;
      if (part.includes("m")) total += parseInt(part) * 60 * 1000;
      if (part.includes("s")) total += parseInt(part) * 1000;
    });
    return total;
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div
      id="cat"
      className="lg:w-2/3 pb-8 lg:pb-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {items.map((item) => {
        const isFrvt = frvtItems.find((fav) => fav.id === item.id);

        return (
          <div
            key={item.id}
            className="card w-full shadow-sm hover:transform hover:scale-105 transition"
          >
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl text-[#0E2954]">
                {item.title}
              </h2>
              <p className="text-[#0E2954]">${item.currentBidPrice}</p>
              <p className="text-[#0E2954]">
                Time Left: {item.timeLeftFormatted || item.timeLeft}
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    if (!isFrvt) {
                      handleBid(item);
                      handleBidAmount(item.currentBidPrice);
                    }
                  }}
                  disabled={isFrvt}
                  className={`${
                    isFrvt ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  title={
                    isFrvt ? "Already in favorites" : "Add to favorites"
                  }
                >
                  <img
                    src={
                      isFrvt
                        ? "https://i.ibb.co.com/SwcJ2cMV/red-heart.png"
                        : "https://i.ibb.co.com/5h3fXRzF/heart.png"
                    }
                    alt="heart icon"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
