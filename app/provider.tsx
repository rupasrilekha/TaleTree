// import { ClerkProvider, useUser } from '@clerk/nextjs'
// import { HeroUIProvider } from '@heroui/react'
// import React, { useState } from 'react'
// import Header from './Header'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
// import { Users } from '@/config/schema'
// import { db } from '@/config/db'
// function Provider({children}:{children: React.ReactNode})
// {

//     const [userDetail,setUserDetail]=useState();
//     const {user}=useUser();

//     const saveNewUserIfNotExists=()=>{
//        // check if user already exists 
//     const user=await db.select().from(Users)
//     .where(eq(Users.userName,user.userName))
//        //if not add to db
//     }
//     return(
      
//         <HeroUIProvider>
//               {/* Header */}
//               <Header />
//             {children}
//             <ToastContainer />
//         </HeroUIProvider>
//     )
// }

// export default Provider

"use client"

import { ClerkProvider, useUser } from '@clerk/nextjs';
import { HeroUIProvider } from '@heroui/react';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Users } from '@/config/schema';
import { db } from '@/config/db';
import { eq } from 'drizzle-orm'; // Import eq for equality check
import { UserDetailContext } from './_context/UserDetailContext';

function Provider({ children }: { children: React.ReactNode }) {
  const [userDetail, setUserDetail] = useState<any>();
  const { user } = useUser(); // Get current user from Clerk

  useEffect(() => {
    const saveNewUserIfNotExists = async () => {
      if (user) {
        try {
          // Check if user already exists in the database
          const userResp = await db
            .select()
            .from(Users)
            .where(eq(Users.userEmail,user?.primaryEmailAddress?.emailAddress??''));
            console.log('Existing user:', userResp);
            //.where(eq(Users.userName, user.username)); // Compare the username


            // if(!userResp[0])
            // {
            //   const resuslt=await db.insert(Users).values({
                
            //     userEmail:user?.primaryEmailAddress?.emailAddress,
            //     userImage:user?.imageUrl,
            //     userName: user?.fullName
            //   })
            // }
          // If the user does not exist, add them to the database
          if (!userResp[0]) {//userResp.length === 0
            const result = await db.insert(Users).values({
              userName: user?.fullName,
              userImage:user?.imageUrl,
              userEmail:user?.primaryEmailAddress?.emailAddress
            }).returning({
              userName: Users?.userName,
              userImage:Users?.userImage,
              userEmail:Users?.userEmail,
              credit:Users.credit

            });
            console.log('New user added:', result);
            setUserDetail(result[0]);
          }
          else{
            setUserDetail(userResp[0])
          }
        } catch (error) {
          console.error('Error saving user to DB:', error);
        }
      }
    };

    user&&saveNewUserIfNotExists(); // Call the function on component mount
  }, [user]);

  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
      <PayPalScriptProvider options={{ clientId:process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID??'' }}>
    <HeroUIProvider>
      {/* Header */}
      <Header />
      {children}
      <ToastContainer />
    </HeroUIProvider>
    </PayPalScriptProvider>
    </UserDetailContext.Provider>
  );
}

export default Provider;
