// "use client"
// import { db } from '@/config/db'
// import { StoryData } from '@/config/schema'
// import React, { useEffect, useState } from 'react'
// import { eq } from "drizzle-orm";
// import { useUser } from '@clerk/nextjs';


// function UserStoryList() {
//     const {user}=useUser();
//     const [storyList:any,setStoryList]=useState<StoryItem>[];

//     useEffect(()=>{
//         user&&getUserStory
//     },[user])
//     const getUserStory= async()=>{
//         const result=await db.select().from(StoryData).where(eq(StoryData.userEmail,user?.primaryEmailAddress?.emailAddress??''))
//         console.log(result);
//     }
//   return (
//     <div></div>
//   )
// }

// export default UserStoryList

"use client";

import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import StoryitemCard from "./StoryitemCard";
import CustomLoader from "@/app/create-story/_components/CustomLoader";
import { desc } from "drizzle-orm";

type StoryItemType = {
  id: number;
  storyType: string | null;
  ageGroup: string | null;
  coverImage: string | null;
  imageStyle: string | null;
  userEmail: string | null;
  userImage: string | null;
  userName: string | null;
  output: [] | any; // Adjusted for object data
  storyId: string | null;
  storySubject: string | null;
  storyTitle: string | null;
};

function UserStoryList() {
  useEffect(() => {
    getUserStories();
  }, []);

  const { user } = useUser();
  const [storyList, setStoryList] = useState<StoryItemType[]>();
  const [loading,setLoading]=useState(false);

  const getUserStories = async () => {
    try {
        setLoading(true)
      // Fetch all records from the database without conditions
      const result: StoryItemType[] = await db.select().from(StoryData).orderBy(desc(StoryData.id));

      // Log the fetched data
      console.log("Fetched result:", result);

      // Update state with the fetched stories
      setStoryList(result);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching user stories:", error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
      gap-10 mt-10">
        {storyList &&
          storyList.map((item: StoryItemType) => (
            // Add the `key` prop with a unique value (e.g., `id`)
            <StoryitemCard key={item.id} story={item} />
          ))}
      </div>
      <CustomLoader isLoading={loading}/>
    </div>
  );
}

export default UserStoryList;
