
import React from 'react';
interface HeroProps{
    mainTitle:string;
    description:string;
    bgImg:string;
    searchLabel:string;
    searchSpan:string;
    statistics:{ title: string; figure: string }[];
}



export default function HeroSecion(props: HeroProps){
    const {mainTitle,description,bgImg, statistics, searchLabel, searchSpan}=props;
    return (<>
    <div className="relative">
         {/* background image */}
       <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>


         {/* section starts here */}
         <section className="relative mb-16 z-0 py-8">
          <div className="grid container mx-auto pt-40 p-8 grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">{mainTitle}</h2>
              
              <p className="mt-4 text-gray-600">
               {description}
              </p>

       

            {/* Input for search here */}
            <div className="relative mt-8">
              <label htmlFor="Search" className="sr-only"> {searchLabel} </label>

              <input
                type="text"
                id="Search"
                placeholder="Search ticket..."
                className="w-full h-12 focus:outline-none rounded-full border-none border-gray-200 pe-10 ps-4 text-sm  py-2.5 shadow-sm sm:text-sm"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button 
                  type="button" 
                  className="absolute border border-emerald-700 end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                  <span className="sr-only">{searchSpan}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>
              
            </div>
            
            {/* statistics here */}
            <div>
            
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                {
                  statistics.map((stat, index)=>(
                    <div key={index} className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
               
                    <dt className="order-last text-lg font-medium text-gray-500">
                   {stat.title} 
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                   {stat.figure}
                  </dd>
                 
            
                 </div>

                  ))
}  
              </div>
            </div>
          </div>
        </section>
        {/* section ends here */}

    </div>
    </>);

}