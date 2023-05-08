import React, { useEffect, useState } from "react";
import BotArmy from "./BotArmy";
import BotsCollection from "./BotsCollection";

function Bots() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const updateBot = (id) => {
    setBots(bots.map((bot) => id === bot.id ? {...bot, isAdded: true} : bot));
  };

  const removeBot = (id) => {
    setBots(bots.map((bot) => id === bot.id ? {...bot, isAdded: false} : bot));
  };

  const deleteBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, { method: "DELETE" }).then(() =>
      setBots((previousData) => previousData.filter((bot) => bot.id !== id))
    );
  };

  return (
    <div>
      <BotArmy  className="bot-army"
        bots={bots.filter((bot) => bot.isAdded)}
        handleClick={removeBot}
        handleDelete={deleteBot}
      />
      <BotsCollection  className="bot-collection" 
        bots={bots} 
        handleClick={updateBot} 
        handleDelete={deleteBot} 
      />
    </div>
  );
}

export default Bots;