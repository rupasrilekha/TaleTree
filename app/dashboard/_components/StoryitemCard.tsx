// import React from 'react'
// import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
// import ImageStyle from '@/app/create-story/_components/ImageStyle';
// import Image from 'next/image';
// import { Button } from '@heroui/button';

// type StoryItemType = {
//     story:{id: number;
//     storyType: string | null;
//     ageGroup: string | null;
//     coverImage: string | null;
//     imageStyle: string | null;
//     userEmail: string | null;
//     userImage: string | null;
//     userName: string | null;
//     output: [] | any; // Adjusted for object data
//     storyId: string | null;
//     storySubject: string | null;
//     storyTitle: string | null;}
//   };


// function StoryitemCard({story}:StoryItemType) {
//   return (
//     <div>
//         <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
//         <CardHeader className="absolute z-10 top-1 flex-col items-start">
//           <p className="text-tiny text-white/60 uppercase font-bold">New</p>
//           <h4 className="text-black font-medium text-2xl">Acme camera</h4>
//         </CardHeader>
//         <Image
//           alt="Card example background"
//           className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
//           src="https://heroui.com/images/card-example-6.jpeg"
//         />
//         <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//           <div>
//             <p className="text-black text-tiny">Available soon.</p>
//             <p className="text-black text-tiny">Get notified.</p>
//           </div>
//           <Button className="text-tiny" color="primary" radius="full" size="sm">
//             Notify Me
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }

// export default StoryitemCard

import React from "react";
import { Card, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import Link from "next/link";

type StoryItemType = {
  story?: {
    storyTitle: string | null;
    storyId:string;
    storyType: string;
    coverImage: string;
    userEmail: string;
    userImage: string;
    userName: string;
    output:[]|any;
    storySubject: string;
    ageGroup: string;
    imageStyle: string;

  } | null;
};

function StoryitemCard({ story }: StoryItemType) {
  return (
    <Link href={'/story/'+story?.storyId}>
    <div className="flex items-center justify-center">
      <Card className="w-full h-[200px] col-span-12 sm:col-span-5 flex items-center justify-center bg-gray-100 shadow-md hover:scale-105 transition-all cursor-pointer">
        {/* Display Story Title */}
        <h2 className="text-1xl font-bold text-center text-gray-800 ">
          {story?.storyTitle || "Untitled Story"}
        </h2>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          {/* <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div> */}
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Read Now
              </Button>
        </CardFooter>
      </Card>
      
    </div>
    </Link>
  );
}

export default StoryitemCard;
