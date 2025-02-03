// // "use client"
// // import { db } from '@/config/db'
// // import { StoryData } from '@/config/schema'
// // import { equal } from 'assert'
// // import React, { useEffect, useState } from 'react'
// // import { eq } from 'drizzle-orm'

// // function story({params}:any) {
// //   const [story,setStory]=useState<any>();
// //   useEffect(()=>{
// //     console.log(params.id)
// //     getStory();
// //   },[])

// //   const getStory=async()=>{
// //     const result=await db.select().from(StoryData)
// //     .where(eq(StoryData.storyId,params.id));

// //     console.log(result[0]);
// //     setStory(result[0])
// //   }
// //   return (
// //     <div className='p-10 md:px-20 lg:px-40'>
// //       <h2>{story?.output?.story_cover?.title}</h2>
// //     </div>
// //   )
// // }

// // export default story

// "use client";
// import { db } from "@/config/db";
// import { StoryData } from "@/config/schema";
// import { eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";

// interface StoryProps {
//   params: { id: string }; // Type for Next.js dynamic route parameter
// }

// const Story: React.FC<StoryProps> = ({ params }) => {
//   const [story, setStory] = useState<any>(null);

//   useEffect(() => {
//     if (params?.id) {
//       getStory();
//     } else {
//       console.error("params.id is undefined.");
//     }
//   }, [params]);

//   const getStory = async () => {
//     try {
//       const result = await db
//         .select()
//         .from(StoryData)
//         .where(eq(StoryData.storyId, params.id)); // Query using Drizzle ORM

//       if (result && result.length > 0) {
//         setStory(result[0]);
//       } else {
//         console.warn("No story found for the given ID.");
//       }
//     } catch (error) {
//       console.error("Error fetching story:", error);
//     }
//   };

//   return (
//     <div className="p-10 md:px-20 lg:px-40">
//       {story ? (
//         <h2>{story.output?.story_cover?.title || "No title available"}</h2>
//       ) : (
//         <p>Loading story...</p>
//       )}
//     </div>
//   );
// };

// export default Story;

// "use client";

// import { db } from "@/config/db";
// import { StoryData } from "@/config/schema";
// import { eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
// import { use } from "react";

// interface StoryProps {
//   params: Promise<{ id: string }>; // `params` is now a Promise
// }

// const Story: React.FC<StoryProps> = ({ params }) => {
//   const unwrappedParams = use(params); // Unwrap `params` Promise
//   const { id } = unwrappedParams;

//   const [story, setStory] = useState<any>(null);

//   useEffect(() => {
//     if (id) {
//       getStory();
//     } else {
//       console.error("params.id is undefined.");
//     }
//   }, [id]);

//   const getStory = async () => {
//     try {
//       const result = await db
//         .select()
//         .from(StoryData)
//         .where(eq(StoryData.storyId, id)); // Query using Drizzle ORM

//       if (result && result.length > 0) {
//         setStory(result[0]);
//       } else {
//         console.warn("No story found for the given ID.");
//       }
//     } catch (error) {
//       console.error("Error fetching story:", error);
//     }
//   };

//   return (
//     <div className="p-10 md:px-20 lg:px-40">
//       {story ? (
//         <h2>{story.output?.story_cover?.title || "No title available"}</h2>
//       ) : (
//         <p>Loading story...</p>
//       )}
//     </div>
//   );
// };

// export default Story;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { eq } from "drizzle-orm";
import { useParams } from "next/navigation"; // Use Next.js `useParams`
import HTMLFlipBook from 'react-pageflip';
import BookCoverPage from "../_components/BookCoverPage";
import StoryPages from "../_components/StoryPages";
import LastPage from "../_components/LastPage";
import { Button } from "@heroui/button";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";



function StoryPage({params}:any) {
  const { id } = useParams(); // Using useParams() to get the dynamic `id`
  const [story, setStory] = useState<any>(null); // Initialize with null
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  {/* @ts-ignore*/}
  const bookRef = useRef<HTMLFlipBook>(null);
  const [count,setCount]=useState(0);

  useEffect(() => {


    if (!id) return; // If no id is provided, do nothing

    const getStory = async () => {
      try {
        const result = await db
          .select()
          .from(StoryData)
          .where(eq(StoryData.storyId, id));
          console.log("Fetched result:", result)


        // Assuming that the story is stored in result[0]
        if (result.length > 0) {
          setStory(result[0]); // Set the fetched story
        }
      } catch (error) {
        console.error("Error fetching story:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    getStory();
  }, [id]); // Run effect whenever `id` changes

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching
  }

  return (
    //flex items-center justify-center
    <div className="p-10 md:px-20 lg:px-40 flex items-center justify-center flex-col"> 
      <h2 className="text-4xl font-bold text-center p-10 bg-primary text-white">{story?.storyTitle || "Untitled Story"}</h2>
        <div className="relative">
      {/* @ts-ignore */}
      <HTMLFlipBook width={500} height={500} showCover={true} className="mt-10" useMouseEvents={false} ref={bookRef}>
        {/* First Page with Story Title */}
        <div className="page">
          <div className="story-title-page flex justify-center items-center h-full bg-gray-800 " >
            <h1 className="text-3xl font-extrabold text-center text-dark text-primary ">{story?.storyTitle || "Untitled Story"}</h1>
          </div>
        </div>
        {
            [...Array(story?.output?.chapters?.length)].map((item,index)=>(
                <div key={index} className="bg-white p-10 border">
                   <StoryPages storyChapter={story?.output?.chapters[index]}/>
                </div>
            ))
        }
        {/* <div>
            <LastPage/>
        </div>
         */}


        {/* Add more pages here */}
      </HTMLFlipBook>
                    
                  {count!=0&&  <div className="absolute -left-5 top-[250px]" onClick={() => {
                if (bookRef.current) {
                    bookRef.current.pageFlip().flipPrev();
                    setCount(count-1)
                }
                }}>
                  
            <IoIosArrowDropleftCircle className="text-4xl text-primary cursor-pointer" />
            </div>}
            {count!=(story?.output?.chapters?.length)&&<div className="absolute -right-5 top-[250px]" onClick={() => {
            if (bookRef.current) {
                bookRef.current.pageFlip().flipNext();
                setCount(count+1)
            }
            }}>
            <IoIosArrowDroprightCircle className="text-4xl text-primary cursor-pointer" />
            </div>}
         </div>
    </div>
  );
}

export default StoryPage;
