import React from 'react'
import { IoMdPlayCircle } from "react-icons/io";


function StoryPages({storyChapter}:any) {
  const playSpeech=(text:string)=>{
      const synth=window?.speechSynthesis;
      const textToSpeech=new SpeechSynthesisUtterance(text);
      synth.speak(textToSpeech)
  }
  return (
    <div>
        <h2 className='text-2xl fontbold text-primary flex justify-between '>{storyChapter?.chapter_title}</h2>
        
        <span className='text-3xl mt-2 cursor-pointer text-primary' onClick={()=>playSpeech(storyChapter?.story_text)}>
        <IoMdPlayCircle />
        </span>
        <p className='text-lg p-10 mt-3 rounded-lg bg-slate-100 text-black line-clamp-[10]'>{storyChapter?.story_text}</p>
    </div>
  )
}

export default StoryPages



  