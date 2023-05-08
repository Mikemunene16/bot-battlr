import React from "react";
import BotsCard from "./BotsCard";

function BotArmy({bots, handleClick, handleDelete}) {
  
  const displayCards=bots.map(bot=>{
    return<BotsCard key={bot.id} 
    bot={bot}
    handleClick={handleClick}
    handleDelete={handleDelete}
    />})

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Bot Army
          {displayCards}

        </div>
      </div>
    </div>
  );
}

export default BotArmy;