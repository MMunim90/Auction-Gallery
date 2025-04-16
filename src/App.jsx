import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Items from "./components/Main/Items";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import { toast } from "react-toastify";

function App() {
  const [bid, setBid] = useState([]);
  const [bidAmount, setBidAmount] = useState(0);
  const [format, setFormat] = useState("table");

  const handleBid = (items) => {
    setBid([...bid, items]);
    toast.success(`${items.title} Added to your Favorite Lists`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    playAlert();
  };

  function playAlert() {
    const sound = document.getElementById("alertSound");
    sound?.play();
  }

  function plyAlert() {
    const sound = document.getElementById("alrtSound");
    sound?.play();
  }

  const handleBidAmount = (price) => {
    const newPrice = bidAmount + price;
    setBidAmount(newPrice);
  };

  const rmvItem = (id) => {
    const newMarked = bid.filter((item) => item.id !== id);
    const removedItem = bid.find((item) => item.id === id);
    const reducedPrice = bidAmount - removedItem.currentBidPrice;
    setBid(newMarked);
    setBidAmount(reducedPrice);
    toast.warning(`This Item Removed from your Favorite Lists`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    plyAlert();
  };

  return (
    <>
      <Navbar />
      <Banner />
      <div id="main" className="bg-[#e0eaf3] pl-6 lg:pl-18">
        <div className="lg:w-11/12 mx-auto">
          <div className="pt-32">
            <h1 className="text-[#0E2954] font-medium text-[32px] pb-6">
              Active Auctions
            </h1>
            <p className="text-black font-normal text-[20px] pb-8">
              Discover and bid on extraordinary items
            </p>
          </div>

          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="select select-neutral mb-6 rounded-xl"
          >
            <option value="table">Table Format</option>
            <option value="card">Card Format</option>
          </select>

          <div className="flex flex-col lg:flex-row justify-between gap-6 mr-15 lg:mr-0">
            {format === "table" && (
              <Items
                handleBid={handleBid}
                handleBidAmount={handleBidAmount}
                frvtItems={bid}
              />
            )}

            {format === "card" && (
              <Card
                handleBid={handleBid}
                handleBidAmount={handleBidAmount}
                frvtItems={bid}
              />
            )}

            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl overflow-hidden mb-8">
                <div className="pt-8 pb-4 flex justify-center gap-3 border-b border-[#DCE5F3]">
                  <img
                    className="w-7"
                    src="https://i.ibb.co.com/5h3fXRzF/heart.png"
                    alt=""
                  />
                  <h1 className="text-[#0E2954] font-medium text-[26px]">
                    Favorite Items
                  </h1>
                </div>

                {bid.length === 0 && (
                  <div className="text-center text-black py-12 border-b border-[#DCE5F3]">
                    <img
                      className="w-40 mx-auto mb-4"
                      src="https://i.ibb.co.com/c7MbQF4/1.jpg"
                      alt=""
                    />
                    <h2 className="pb-6 font-bold text-[20px]">
                      No favorites yet
                    </h2>
                    <p>
                      Click the heart icon on any item <br /> to add it to your
                      favorites
                    </p>
                  </div>
                )}

                <div>
                  {bid.map((marked) => (
                    <div key={marked.id}>
                      <div className="p-6 flex gap-2 justify-between border border-black rounded-2xl m-6 text-[#0E2954]">
                        <div className="flex">
                          <img
                            className="w-18 h-18 mr-4 object-cover border border-black rounded-xl"
                            src={marked.image}
                            alt=""
                          />
                          <p>
                            {marked.title}
                            <br />
                            <br />${marked.currentBidPrice}{" "}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Bids: {marked.bidsCount}
                          </p>
                        </div>
                        <button
                          onClick={() => rmvItem(marked.id)}
                          className="cursor-pointer p-2.5 w-20"
                        >
                          <img src="https://i.ibb.co.com/VWz7Fsvz/qq.jpg" alt="" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center px-8 py-4 text-black border-t border-[#DCE5F3]">
                  <p className="font-bold text-[18px]">Total bids Amount</p>
                  <p className="font-bold">
                    $ <span>{bidAmount}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Add audio tags for alert sounds */}
      <audio id="alertSound" src="/sounds/add.wav" />
      <audio id="alrtSound" src="/sounds/remove.wav" />

      <Footer />
    </>
  );
}

export default App;
