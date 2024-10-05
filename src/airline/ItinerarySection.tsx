import React, { useEffect, useState } from 'react';
import {FaPlaneDeparture} from "react-icons/fa";
import { FilterObject } from './SearchInterface';


interface ItineraryProps{
    airportImg: string;
    imgLabel: string;
    deliveryLegend: string;
    oneWay: string;
    roundTrip: string;
   
    searchSpan: string;
    title: string;
    subTitle:string;
    description: string;
    




}


export default function ItinerarySection(props: ItineraryProps){

    const { airportImg, imgLabel,deliveryLegend,oneWay,roundTrip,searchSpan,title,subTitle,description,}=props;
    // const [data, setData] = useState<any[]>([]);
    // const [filteredData, setFilteredData] = useState<any[]>([]) // use a more specific type here that represents your data
  
    // // create the filters object here and set a default. Set its type to 'FilterObject' and import it at the top
    // const [filters, setFilters] = useState<FilterObject>({
    //   searchTerm: '',
    //   category: [],
    //   // ... add the relevant keys to match your data object
    //   sort: "asc"
    // })
    
  
    // const sortAndFilterData = (filterObj: FilterObject) => {
    //   return data.filter(item => {
    //     return (
    //     // filter by search term - check if item.name includes the current search term
    //     item.name && item.name.toLowerCase().indexOf(filterObj.searchTerm.toLowerCase()) > -1) && 
    //     // filter by category - check if item.category is part of the options inside the filters.category array
    //     (filterObj.category.length > 0 ? filterObj.category.includes(item.category) : true)
    //     // expand with more checks to fit your data
    //   })
    //   .sort((a: any,b: any) => {
    //     // first, get the name parameter
    //     const nameA = a.name.toLowerCase();
    //     const nameB = b.name.toLowerCase();
    //     if (filterObj.sort === "desc") {
    //       return nameB.localeCompare(nameA); // returns 1 if nameB > nameA and returns -1 if nameB < nameA
    //     } else if (filterObj.sort === "asc") {
    //       return nameA.localeCompare(nameB); // returns 1 if nameA > nameB and returns -1 if nameA < nameB
    //     }
    //     return 0;
    //   })
    //   }
  
    // useEffect(() => {
    //   const data = fetchData('...'); // fetch your data when you first render the app
    //   setData(data);
    // }, [])
  
    // useEffect(() => {
    //   const data = sortAndFilterData(filters); // call the `sortAndFilterData`function and set its returned value to `filteredData`
    //   setFilteredData(data);
    // }, [filters, data])

    
    
    return (<>
    <div className="relative">
           {/* section starts here */}
           <section className="relative pb-2">

<div className='w-full h-[750px] bg-gray-900/90 absolute'>
    <img className='w-full h-full object-cover mix-blend-overlay' src={airportImg} alt={imgLabel} />
</div>


<div className='max-w-[1240px] mx-auto text-white relative'>

<div className="relative overflow-hidden mx-4 -top-10 bg-white rounded-lg shadow-md">
  <div className="flex px-8 pt-8">
  <fieldset className="grid grid-cols-2 gap-4">
    <legend className="sr-only">{deliveryLegend}</legend>

    <div>
      <input
        type="radio"
        name="DeliveryOption"
        value="DeliveryOneway"
        id="DeliveryOneway"
        className="peer hidden [&:checked_+_label_svg]:block"
        checked
      />

      <label
        htmlFor="DeliveryOneway"
        className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-green-600 peer-checked:ring-1 peer-checked:ring-green-600"
      >
        <div className="flex items-center justify-between">
          <p className="text-gray-700">{oneWay}</p>

          <svg
            className="hidden h-5 w-5 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </label>
    </div>

    <div>
      <input
        type="radio"
        name="DeliveryOption"
        value="DeliveryRoundtrip"
        id="DeliveryRoundtrip"
        className="peer hidden [&:checked_+_label_svg]:block"
      />

      <label
        htmlFor="DeliveryRoundtrip"
        className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-green-600 peer-checked:ring-1 peer-checked:ring-green-600"
      >
        <div className="flex items-center justify-between">
          <p className="text-gray-700">{roundTrip}</p>

          <svg
            className="hidden h-5 w-5 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </label>
    </div>
  </fieldset>
  </div>
  <div className="flex px-8 pt-1">

  <div className="grid mx-auto py-4 grid-cols-1 gap-y-8 lg:grid-cols-5 lg:items-center lg:gap-x-4">
  <label
    htmlFor="Origin"
    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
  >
    <input
      type="text"
      id="Origin"
      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
      placeholder="Origin"
    />

    <span
      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
    >
      Origin
    </span>
  </label>

  <label
    htmlFor="Destination"
    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
  >
    <input
      type="text"
      id="Destination"
      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
      placeholder="Destination"
    />

    <span
      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
    >
      Destination
    </span>
  </label>

  <label
    htmlFor="Departure"
    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
  >
    <input
      type="date"
      id="Departure"
      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
      placeholder="Departure"
    />

    <span
      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
    >
      Departure
    </span>
  </label>

  <label
    htmlFor="Return"
    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
  >
    <input
      type="date"
      id="Return"
      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
      placeholder="Return"
    />

    <span
      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
    >
      Return
    </span>
  </label>

  <label
    htmlFor="Travellers"
    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
  >
    <input
      type="number"
      id="Travellers"
      className="peer h-14 w-full text-black px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
      placeholder="Travellers"
    />

    <span
      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
    >
      Travellers
    </span>
  </label>


  </div>
  </div>

  <div className="flex py-4">
  <a
    className="flex mx-auto text-center cursor-pointer items-center px-8 py-4 hover:text-white bg-green-600 rounded hover:bg-black active:text-white focus:outline-none focus:ring"
  >
    <FaPlaneDeparture className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
      <span className="text-sm font-medium">
        {searchSpan}
      </span>
  </a>
  </div>

</div>

<div className='px-4 py-12 md:block hidden'>
      <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>{title}</h2>
      <h3 className='text-5xl font-bold py-6 text-center'>{subTitle}</h3>
      <p className='py-4 text-3xl text-slate-300 text-center'>
        {description}
      </p>
</div>

</div>


</section>
{/* section ends here */}
    </div>
    </>);
}