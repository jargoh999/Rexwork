
import React from 'react'
import mylogo from "@/assets/mylogo.png"
import swimCamp from "@/assets/Swim_camp.png"
import map from "@/assets/map.png"
import { Card , CardContent } from "@/components/ui/card"


const landingPage = () => {

   return(

    <div className=''>
       <div className='flex items-center'>
       <div className='flex mt-4 ml-[250px]'>
        <img src={mylogo} className='w-8 h-8'/>
        <h2 className='text-[30px]'><strong>Rexwork's</strong></h2>
       </div>
      <div className='flex mt-4 ml-[450px] gap-20'>
        <h1 className='mt-2'>home</h1>
        <h1 className='mt-2'>features</h1>
        <h1 className='mt-2'>pricing</h1>
        <h1 className='mt-2'>contact</h1>
         <button className='bg-[#242424] w-[250px] h-[40px] rounded-lg text-gray-200 sh-10' type='outline'>
            login / sign-up
         </button>
      </div>
      </div>

      <div className='mt-[150px] m-[400px] max-w-[1200px]'>
       <h4 className='text-[50px]  text-center'>
       Break the routine with <span className='text-[#9747FF]'>Rexwork</span>      
        </h4>
       <p className='m-[100px] text-center'>
       Rework helps make tasks and projects more interesting,<br/>    while respecting your habits.    
      </p> 
      <div className='flex gap-20 justify-center items-center'>
         <button className='bg-[#242424] w-[200px] h-[40px] rounded-full text-gray-200 sh-10' type='outline'>
         Discover Rexwork.
         </button>
         <button className='bg-[#ffffff] w-[200px] h-[40px] rounded-full text-gray-800 sh-10 border-2 border-gray-700' type='outline'>
         Already a member? 
         </button>
      </div>
      <img  className='m-10 relative-1 ml-[275px] h-[475px] w-[475px] text-center' src={swimCamp}>
         </img>
      </div>
        <div className='flex gap-[200px]'>   
          <img  className='m-10 ml-[400px] h-[400px] w-[475px]' src={map}>
          </img>
          <Card className="h-[400px] w-[400px] m-[50px] bg-gray-100 rounded-2xl">
           <CardContent>
             <p className='text-xs'>Centralisation</p>
           </CardContent>
         </Card>  
         </div>   
   </div>
   
   )

}

export default landingPage