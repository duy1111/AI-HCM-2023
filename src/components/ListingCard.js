import React, { useState } from 'react';
import Button from './Button'; // Import component Button (đảm bảo bạn đã import đúng component)
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions'
import { useRoutes } from 'react-router-dom';
import { useNavigate,Link } from 'react-router-dom';
import { path } from '../utils/constant';
const ListingCard = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
}) => {
  const formatVietnameseToString = (keyword) => {
    return keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ",)
    .join("-")
  }
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch()
  const [payload, setPayload] = useState({
    image_path: data.image_path
  })

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const segment = () => {
    dispatch(actions.getSegmentLimit(payload))
  }
  const imgSearch = () => {
    dispatch(actions.getImageLimit(payload))
  }
  const viewDetail = () => {
    
  }

  return (
    <div
      className="col-span-1 cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            fill
            alt="Listing"
            src={`http://0.0.0.0:8000/${data.image_path}`}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          {isHovered && (
            <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center">
              <Button
                small
                label="Segment"
                onClick={segment}

              />
              <Button
                small
                label="Img Search"
                onClick={imgSearch}
              />
              <a className='w-full' target='_blank' href={`http://0.0.0.0:8000/${data.image_path}`} >
                <Button
                  small
                  label="View Detail"
                  onClick={viewDetail}
                />
              </a>
            </div>
          )}
        </div>
        <div className="font-semibold text-lg">{data.title}</div>
        {onAction && actionLabel && (
          <Button disabled={disabled} small label={actionLabel} />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
