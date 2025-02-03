"use client";
import { db } from '@/config/db';
import { Users } from '@/config/schema';
import { FUNDING, PayPalButtons } from '@paypal/react-paypal-js';
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

function BuyCredits() {
    const Options=[
        {
            id:1,
            price:99,
            credits:10
        },
        {
            id:2,
            price:199,
            credits:25
        },
        {
            id:3,
            price:299,
            credits:40
        },
        {
            id:4,
            price:499,
            credits:75
        },

    ]

   
    const [selectedPrice,setSelectedPrice]=useState<number>(0);
    const [selectedOption,setSelectedOption]=useState<number>(0);
    const{userDetail,setUserDetail}=useContext(UserDetailContext);
    const router=useRouter();
    const notify=(msg:string)=>toast(msg);
    const notifyError =(msg:string)=>toast.error(msg)

    useEffect(()=>{
        if(selectedOption!=0)
        {
            const price=Options[selectedOption-1].price;
            console.log(price);
            setSelectedPrice(price);
        }

    },[selectedOption])

    const OnPaymentSuccess=async()=>{
        const result=await db.update(Users)
        .set({
            credit:Options[selectedOption]?.credits+userDetail?.credits
        }).where(eq(Users.userEmail,userDetail.userEmail));

        if(result)
        {
            notify("Credits are added successfully");
            setUserDetail((prev:any)=>({
                ...prev,
                ['credit']:Options[selectedOption]?.credits+userDetail?.credits
            }))
            router.replace('/dashboard');
        }
        else{
            notifyError("Server Error")
        }
        }
  return (
    <div  className='min-h-screen p-10 md:px-20 lg:px-40 text-center'>
        <h2 className='text-4xl font-bold text-primary'>Add more Credits</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-center justify-center'>
            <div>
                {Options.map((option,index)=>(
                    <div className={`p-6 my-3 border  bg-primary text-center rounded-lg text-white cursor-pointer
                        hover:scale-105 transition-all
                         ${selectedOption===option.id&& 'bg-black'}
                         `} 
                     key={index}
                            onClick={()=>setSelectedOption(option.id)}>
                            <h2> Get{option.credits} Credits= {option.credits} Story</h2>
                            <h2 className='font-bold text-2xl text-gray'> $ {option.price} </h2>
                            </div>
                ))}
            </div>
             <div>
             {selectedPrice>0&&<PayPalButtons style={{ layout: "vertical" }} disabled={!selectedOption||selectedOption==0}
             //@ts-ignore
             onApprove={()=>OnPaymentSuccess}
             onCancel={()=>notifyError("Payment is cancelled")}
             createOrder={(data,actions)=>{
                //@ts-ignore
                    return actions.order.create({
                        purchase_units:[
                            // @ts-ignore
                            {amount:{
                                value:selectedPrice.toFixed(2),
                                currency_code:'USD'

                            }}
                        ]
                    })
             }}
             />
            }
             </div>
        </div>
    </div>
  )
}

export default BuyCredits