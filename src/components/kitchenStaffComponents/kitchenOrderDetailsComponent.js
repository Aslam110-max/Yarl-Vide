import "./kitchenOrderDetailsComponent.css"
import React from 'react';
import StatusButton from "./statusButton";
import { getOrderDetails } from "../../services/kitchenStaffPageApi";

const KitchenOrderDetailsComponent = ({ id, dateAndTime, setIsOrderSelected,setOrderId,setDateAndTime,foodStatus, setOrdersDetails }) => {
  const fetchOrderDetails = async () => {
    try {
      const data = await getOrderDetails(id); 
      if (data) {
        setOrdersDetails(data);
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };
    const handleClick=()=>{
        setIsOrderSelected(true);
        setOrderId(id);
        setDateAndTime(dateAndTime);
        fetchOrderDetails();
    }//jh
  return (
    <div  className='kitchen-details-container' onClick={handleClick}>
    <div  className='kitchen-details-row'>
      <div  className='kitchen-details-label'>{id}</div>
      <div className='kitchen-details-label'>{dateAndTime}</div>
     <StatusButton foodStatus={foodStatus} orderID={id}/>
    </div>
</div>
  );
};


export default KitchenOrderDetailsComponent;
