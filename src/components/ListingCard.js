import React from "react";
import Button from "../components/Button";

const ListingCard = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
 
}) => {
  
  return (
    <div
      
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className=" aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            fill
            alt="Listing"
            src={data.url}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          
        </div>
        <div className="font-semibold text-lg ">
          {data.title}
        </div>
        
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
