// import React from "react";


// export default function JQueryCarousel (){
//     var cont=0;
//     function loopSlider(){
//       var xx= setInterval(function(){
//             switch(cont)
//             {
//             case 0:{
//                 $("#slider-1").fadeOut(400);
//                 $("#slider-2").delay(400).fadeIn(400);
//                 $("#sButton1").removeClass("bg-purple-800");
//                 $("#sButton2").addClass("bg-purple-800");
//             cont=1;
            
//             break;
//             }
//             case 1:
//             {
            
//                 $("#slider-2").fadeOut(400);
//                 $("#slider-1").delay(400).fadeIn(400);
//                 $("#sButton2").removeClass("bg-purple-800");
//                 $("#sButton1").addClass("bg-purple-800");
               
//             cont=0;
            
//             break;
//             }
            
            
//             }},8000);
    
//     }

//     function reinitLoop(time){
//         clearInterval(xx);
//         setTimeout(loopSlider(),time);
//         }
        

//     function sliderButton1(){

//         $("#slider-2").fadeOut(400);
//         $("#slider-1").delay(400).fadeIn(400);
//         $("#sButton2").removeClass("bg-purple-800");
//         $("#sButton1").addClass("bg-purple-800");
//         reinitLoop(4000);
//         cont=0
        
//         }
        
//         function sliderButton2(){
//         $("#slider-1").fadeOut(400);
//         $("#slider-2").delay(400).fadeIn(400);
//         $("#sButton1").removeClass("bg-purple-800");
//         $("#sButton2").addClass("bg-purple-800");
//         reinitLoop(4000);
//         cont=1
        
//         }
    
//         $(window).ready(function(){
//             $("#slider-2").hide();
//             $("#sButton1").addClass("bg-purple-800");
            
    
//             loopSlider();
         
            
        
        
        
        
//     });


//     return(<>

// <body>
//   <div className="sliderAx h-auto">
//       <div id="slider-1" className="container mx-auto">
//         <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style="background-image: url(https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80)">
//        <div className="md:w-1/2">
//         <p className="font-bold text-sm uppercase">Services</p>
//         <p className="text-3xl font-bold">Hello world</p>
//         <p className="text-2xl mb-10 leading-none">Carousel with TailwindCSS and jQuery</p>
//         <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
//         </div>  
//     </div>
//      {/* <!-- container --> */}
//       <br/>
//       </div>

//       <div id="slider-2" className="container mx-auto">
//         <div class="bg-cover bg-top  h-auto text-white py-24 px-10 object-fill" style="background-image: url(https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)">
       
//   <p className="font-bold text-sm uppercase">Services</p>
//         <p className="text-3xl font-bold">Hello world</p>
//         <p className="text-2xl mb-10 leading-none">Carousel with TailwindCSS and jQuery</p>
//         <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
         
//     </div> 
//     {/* <!-- container --> */}
//       <br/>
//       </div>
//     </div>
//  <div  className="flex justify-between w-12 mx-auto pb-2">
//         <button id="sButton1" onClick={sliderButton1()} className="bg-purple-400 rounded-full w-4 pb-2 " ></button>
//     <button id="sButton2" onClick={sliderButton2()} className="bg-purple-400 rounded-full w-4 p-2"></button>
//   </div>

// </body>
//     </>);
// }