// "use client"
// import React, { useContext } from 'react'
// import Image from 'next/image'
// import { UserDetailContext } from '@/app/_context/UserDetailContext'

// function DashboardHeader() {

//     const {userDetail,setUserDetail}=useContext(UserDetailContext);
//   return (
//     <div className='p-7 bg-primary text-white flex justify-between items-center'>
//         <h2 className='font-bold text-3xl'>My Stories</h2>
//         <div className='flex gap-3 items-center'>
//             <Image src={'/coin.png'} alt='coin' width={50} height={50} className='bg-primary'/>
//             <span className='text-2xl'>{userDetail.credit} Credit Left</span>
//         </div>
//     </div>
//   )
// }

// export default DashboardHeader

"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@heroui/button';
import Link from 'next/link';

function DashboardHeader() {
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    // Safe check for userDetail and credit
    const creditLeft = userDetail?.credit || 0;

    return (
        <div className='p-7 bg-primary text-white flex justify-between items-center'>
            <h2 className='font-bold text-3xl'>My Stories</h2>
            <div className='flex gap-3 items-center'>
                <Image src={'/coin.png'} alt='coin' width={50} height={50} className='bg-primary'/>
                <span className='text-2xl'>{userDetail?.credit} Credit Left</span>
                <Link href={'/buy-credits'}>
                
                <Button className='bg-gray-300'>Buy Credits</Button>
                </Link>
            </div>
        </div>
    )
}

export default DashboardHeader;
