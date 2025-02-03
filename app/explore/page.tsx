"use client"
import { db } from '@/config/db'
import { StoryData } from '@/config/schema'
import React, { useEffect, useState } from 'react'
import { desc } from 'drizzle-orm' // Replace 'some-library' with the actual library name that provides the 'desc' function
import StoryItemType from '../dashboard/_components/UserStoryList'
import StoryitemCard from '../dashboard/_components/StoryitemCard'
import { Button } from '@heroui/button'

function ExploreMore() {

    const [offset,setOffset]=useState(0);
    const [storyList,setStoryList]=useState<StoryItemType[]>();
    useEffect(()=>{
        GetAllStories(0);
    },[])
    const GetAllStories=async(offset:number)=>{
        setOffset(offset);
        const result = await db.select().from(StoryData)
        .orderBy(desc(StoryData.id))
        .limit(8)
        .offset(offset)
        console.log(result);
        setStoryList((prev)=>[...(prev || []), ...result]);
    }
  return (
    <div className='min-h-screen p-10 md:px-20 lg:px-40'>
        <h2 className='font-bold text-4xl text-primary text-center'>
            Explore More Stories
        </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10'>
        {storyList?.map((item,index)=>(
            <StoryitemCard story={item} key={index}/>

            

        ))}
        </div>
        <div className='flex justify-center mt-10 text-center'>
            <Button className='' color='primary' 
            onClick={()=>GetAllStories(offset+8)}>Load More</Button>
        </div>
       
    </div>
  )
}

export default ExploreMore