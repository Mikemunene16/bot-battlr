import React from "react";
import BotsCard from "./BotsCard";

function BotsCollection({bots, handleClick, handleDelete}) {
  
  const displayCards=bots.map(bot=>{
    return<BotsCard className="bot-specs"
    key={bot.id} 
    bot={bot}
    handleClick={handleClick}
    handleDelete={handleDelete}
    />})
  
  return (
    <div className="ui four column grid">
      <div className="row">

        {displayCards}
      </div>
    </div>
  );
}


export default BotsCollection;