import React from "react";
import HeroSecion from "./HeroSection";
import ItinerarySection from "./ItinerarySection";
import PackageSection from "./PackageSection";

const statistics = [
    {
      title: "Tickets Sold ",
      figure: "9,k+",
      
    },
    {
      title: "Passengers Carried",
      figure: "20,k+",
     
    },
    {
      title: "Flight Satisfaction",
      figure: "10,k+",
     
    },
    {
      title: "Tickets Value",
      figure: "$4.8m",
     
    },
  ];

  

export default function Home (){

    return(<>
   <div className="relative">
   <HeroSecion mainTitle="Find Ticket" description="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                Obcaecati, autem." bgImg="/assets/backgroundimg.webp"
                searchLabel="Search" searchSpan="Search" statistics={statistics}/>
    
   <ItinerarySection airportImg="/assets/airport.jpeg" imgLabel="Airport" deliveryLegend="Delivery"
   oneWay="One-way" roundTrip="Roundtrip" 
   
   searchSpan="Search" title="Flight Selection" subTitle="The Best Way For You"
   description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio iure ipsum 
        cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
        Obcaecati, autem.
"/>


   </div>
    </>);
}