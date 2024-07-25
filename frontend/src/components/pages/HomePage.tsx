import React from 'react'
import landingImage from  "../../assets/loader.png";
import appDownloadImg from "../../assets/appDownloadImg.png"
export const HomePage = () => {
  return (
    <div className='flex flex-col gap-12 '>
        <div className='gb-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16  bg-white' >  
            <h1 className='text-5xl front-bold tracking-tight text-orange-600 '>
                Tuck into a takeaway today
            </h1>
            <span className='text-xl text-slate-600'> Food is just a click away !
            </span>
        </div>

        <div className='container grid md:grid-cols-2 gap-5 '>
            <img src={landingImage} /> 
            <div className='flex flex-col'>
                <span className='text-3xl font-3xl tracking-tighter text-slate-900 font-bold text-center mb-2'>
                    Order Takeaway even faster!
                </span>
                <span className='text-slate-600'> 
                    Download the MernEats App for faster ordering and personalized recommendations
                </span>
                <img src={appDownloadImg}  />
            </div>
        </div>


    </div>
  )
}
