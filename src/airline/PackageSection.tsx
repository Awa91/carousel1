import React from "react";

const packages = [
    {
      title: "Basic Package",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      url:"/basic",
    },
    {
      title: "Standard Package",
      description: "Vestibulum eget ipsum eget urna consequat tincidunt.",
      price: "$199",
      features: ["All Basic Package features", "Feature 4", "Feature 5"],
      url:"/standard",
    },
    {
      title: "Premium Package",
      description: "Praesent maximus elit nec libero fermentum, in lacinia.",
      price: "$299",
      features: ["All Standard Package features", "Feature 6", "Feature 7"],
      url:"/premium",
    },
  ];
  
export default function PackageSection (){
    return (<>
    <div className="relative">
          {/* Section starts here */}
          <section className="relative bg-white">

<section className="bg-gray-100 py-8">
<div className="container mx-auto px-4">
  <h1 className="lg:text-5xl text-2xl font-bold">Subscribtion</h1>
</div>
<main>
<div className="container mx-auto mt-8 px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {packages.map((pkg, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
    >
      <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>
      <p className="text-gray-500 mb-4">{pkg.description}</p>
      <div className="mb-4">
        <span className="text-3xl font-bold">{pkg.price}</span>
        <span className="text-gray-500 ml-2">/ month</span>
      </div>
      <ul className="list-disc pl-6">
        {pkg.features.map((feature, index) => (
          <li key={index} className="text-gray-700 mb-2">
            {feature}
          </li>
       ))}
      </ul>
      
      <a href={pkg.url}  className="bg-green-600 cursor-pointer hover:bg-black text-white font-semibold px-4 py-2 mt-4 rounded-lg">
        Subscribe
      </a>
     
      
       
    </div>
  ))}
</div>
</div>
</main>
</section>
  
</section>
{/* sections ends here */}
    </div>
    </>);
}