import React from "react";
import foods from "../provider/food";
import ButtonOfadd from "./buttonOfadd";


const Items = () => {
  return (
    <div className="drop-shadow-2xl grid grid-cols-3 gap-2">
      {foods.map((item) => (
        <div
          key={item.id}
          className="border p-5 rounded-2xl flex flex-col gap-2"
        >
          <div className="text-xl font-bold">{item.name}</div>
          <div className="text-lg">{item.title}</div>

          <ButtonOfadd item={item} />
        </div>
      ))}
    </div>
  );
};

export default Items;
