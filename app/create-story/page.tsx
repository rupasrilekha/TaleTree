

// "use client";

// import React, { useState } from "react";

// import StorySubjectInput from "./_components/StorySubjectInput";
// import StoryType from "./_components/StoryType";
// import AgeGroup from "./_components/AgeGroup";
// import ImageStyle from "./_components/ImageStyle";

// import { Button } from "@heroui/button";
// import { chatSession } from "@/config/GeminiAi";
// import { output } from "framer-motion/client";
// import { StoryData } from "@/config/schema";
// import { db } from "@/config/db";
// //@ts-ignore
// import uuid4 from "uuid4";
// import CustomLoader from "./_components/CustomLoader";


// const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

// export interface fieldData {
//   fieldName: string;
//   fieldValue: string;
// }

// export interface formDataType {
//   storySubject: string;
//   storyType: string;
//   imageStyle: string;
//   ageGroup: string;
// }

// function CreateStory() {
//   const [formData, setFormData] = useState<formDataType>({
//     storySubject: "",
//     storyType: "",
//     imageStyle: "",
//     ageGroup: "",
//   });

//   const[loading,setLoading]=useState(false);

//   /**
//    * used to add data to form
//    * @param data
//    */
//   const onHandleUserSelection = (data: fieldData) => {
//     setFormData((prev) => ({
//       ...prev,
//       [data.fieldName]: data.fieldValue,
//     }));
//     console.log("Updated formData:", { ...formData, [data.fieldName]: data.fieldValue });
//   };

//   const GenerateStory = async() => {
//     setLoading(true)
//     const FINAL_PROMPT = CREATE_STORY_PROMPT
//       ?.replace("{ageGroup}", formData?.ageGroup ?? "")
//       .replace("{storyType}", formData?.storyType ?? "")
//       .replace("{storySubject}", formData?.storySubject ?? "")
//       .replace("{imageStyle}", formData?.imageStyle ?? "");

//       // const AiImageUrl=imageResp?.data?.imageUrl
//       // const imageResuult=await axios.post('/api/save-image',{
//       //   url: AiImageUrl
//       // })

//       // console.log(AiImageUrl)
//     // Debugging output
//     console.log("formData:", formData);

//     try {
//       // Simulating API call
//       // console.log(FINAL_PROMPT);
//       const result=await chatSession.sendMessage(FINAL_PROMPT)
//       console.log(result?.response.text())
//       const resp=await SaveInDB(result?.response.text());
//       console.log(resp);
//       setLoading(false);
     

//     } catch (e) {
//       console.log(e);
//       setLoading(false);
//     }
//   };
// const SaveInDB=async(output:string)=>
// {
//   const recordId=uuid4();
//   setLoading(true)
//   try{
//   const result=await db.insert(StoryData).values({
//     storyId:recordId,
//     ageGroup:formData?.ageGroup,
//     imageStyle:formData?.imageStyle,
//     storySubject:formData?.storySubject,
//     storyType:formData?.storyType,
//     output:JSON.parse(output)

//   }).returning({storyId:StoryData?.storyId})
//   setLoading(false);
//   return result
// }catch(e)
// {
//   setLoading(false)
// }
// }
//   return (
//     <div className="p-10 md:px-20 lg:px-40">
//       <h2 className="font-extrabold text-[70px] text-primary text-center">
//         CREATE YOUR STORY
//       </h2>
//       <p className="text-2xl text-primary text-center">
//         Transform Dreams into Words, and Words into Magic.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
//         {/* Story Subject*/}
//         <StorySubjectInput userSelection={onHandleUserSelection} />
//         {/*Story Type */}
//         <StoryType userSelection={onHandleUserSelection} />
//         {/* Age Group */}
//         <AgeGroup userSelection={onHandleUserSelection} />
//         {/* Image Style  */}
//         <ImageStyle userSelection={onHandleUserSelection} />
//       </div>
//       <div className="flex justify-end my-10">
//         <Button color="primary" 
//         disabled={loading}
//         className="p-10 text-2xl" onClick={GenerateStory}>
//           Generate Story
//         </Button>
//       </div>
//       <CustomLoader isLoading={loading}/>
//     </div>
//   );
// }

// export default CreateStory;

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// import StorySubjectInput from "./_components/StorySubjectInput";
// import StoryType from "./_components/StoryType";
// import AgeGroup from "./_components/AgeGroup";
// import ImageStyle from "./_components/ImageStyle";

// import { Button } from "@heroui/button";
// import { chatSession } from "@/config/GeminiAi";
// import { output } from "framer-motion/client";
// import { StoryData } from "@/config/schema";
// import { db } from "@/config/db";
// //@ts-ignore
// import uuid4 from "uuid4";
// import CustomLoader from "./_components/CustomLoader";

// const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

// export interface fieldData {
//   fieldName: string;
//   fieldValue: string;
// }

// export interface formDataType {
//   storySubject: string;
//   storyType: string;
//   imageStyle: string;
//   ageGroup: string;
// }

// function CreateStory() {
//   const [formData, setFormData] = useState<formDataType>({
//     storySubject: "",
//     storyType: "",
//     imageStyle: "",
//     ageGroup: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   /**
//    * used to add data to form
//    * @param data
//    */
//   const onHandleUserSelection = (data: fieldData) => {
//     setFormData((prev) => ({
//       ...prev,
//       [data.fieldName]: data.fieldValue,
//     }));
//     console.log("Updated formData:", { ...formData, [data.fieldName]: data.fieldValue });
//   };

//   const GenerateStory = async () => {
//     setLoading(true);
//     const FINAL_PROMPT = CREATE_STORY_PROMPT
//       ?.replace("{ageGroup}", formData?.ageGroup ?? "")
//       .replace("{storyType}", formData?.storyType ?? "")
//       .replace("{storySubject}", formData?.storySubject ?? "")
//       .replace("{imageStyle}", formData?.imageStyle ?? "");

//     // Debugging output
//     console.log("formData:", formData);

//     try {
//       // Simulating API call
//       const result = await chatSession.sendMessage(FINAL_PROMPT);
//       const responseText = result?.response.text();
//       console.log(responseText);

//       // Parse the output to get the story title
//       const parsedOutput = JSON.parse(responseText);
//       const storyTitle = parsedOutput?.story_title;
//       console.log("Story Title:", storyTitle);

//       // Save the story to the database
//       const resp = await SaveInDB(responseText, storyTitle);
//       console.log(resp);

//       // Navigate to the new page with the title
//       router.push(`/story?title=${encodeURIComponent(storyTitle)}`);
//       setLoading(false);
    
//     } catch (e) {
//       console.error(e);
//       setLoading(false);
//     }
//   };

//   const SaveInDB = async (output: string, storyTitle: string) => {
//     const recordId = uuid4();
//     setLoading(true);
//     try {
//       const result = await db.insert(StoryData).values({
//         storyId: recordId,
//         ageGroup: formData?.ageGroup,
//         imageStyle: formData?.imageStyle,
//         storySubject: formData?.storySubject,
//         storyType: formData?.storyType,
//         output: JSON.parse(output),
//         storyTitle: storyTitle,
//       }).returning({ storyId: StoryData?.storyId });

//       setLoading(false);
//       return result;
//     } catch (e) {
//       console.error(e);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-10 md:px-20 lg:px-40">
//       <h2 className="font-extrabold text-[70px] text-primary text-center">
//         CREATE YOUR STORY
//       </h2>
//       <p className="text-2xl text-primary text-center">
//         Transform Dreams into Words, and Words into Magic.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
//         {/* Story Subject*/}
//         <StorySubjectInput userSelection={onHandleUserSelection} />
//         {/*Story Type */}
//         <StoryType userSelection={onHandleUserSelection} />
//         {/* Age Group */}
//         <AgeGroup userSelection={onHandleUserSelection} />
//         {/* Image Style  */}
//         <ImageStyle userSelection={onHandleUserSelection} />
//       </div>
//       <div className="flex justify-end my-10">
//         <Button
//           color="primary"
//           disabled={loading}
//           className="p-10 text-2xl"
//           onClick={GenerateStory}
//         >
//           Generate Story
//         </Button>
//       </div>
//       <CustomLoader isLoading={loading} />
//     </div>
//   );
// }

// export default CreateStory;

// create_story/page.tsx

"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs"; // Import useUser from Clerk

import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";

import { Button } from "@heroui/button";
import { chatSession } from "@/config/GeminiAi";
import { StoryData, Users } from "@/config/schema";
import { db } from "@/config/db";
//@ts-ignore
import uuid4 from "uuid4";
import CustomLoader from "./_components/CustomLoader";
import { UserDetailContext } from "../_context/UserDetailContext";
import { eq } from "drizzle-orm";
import { toast } from "react-toastify";
//import { notifyError } from "@/utils/toast"; // Ensure the correct path

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
}

function CreateStory() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext); // Hook inside functional component

  const [formData, setFormData] = useState<formDataType>({
    storySubject: "",
    storyType: "",
    imageStyle: "",
    ageGroup: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser(); // Retrieve user information from Clerk
  const notify=(msg:string)=>toast(msg);
  const notifyError =(msg:string)=>toast.error(msg)
 

  /**
   * Used to add data to form
   * @param data
   */
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log("Updated formData:", { ...formData, [data.fieldName]: data.fieldValue });
  };

  const GenerateStory = async () => {

    if(userDetail.credit<=0)
    {
      notifyError('You do not have enough credits to generate a story');
      return ;
    }
    setLoading(true);
    const FINAL_PROMPT = CREATE_STORY_PROMPT
      ?.replace("{ageGroup}", formData?.ageGroup ?? "")
      .replace("{storyType}", formData?.storyType ?? "")
      .replace("{storySubject}", formData?.storySubject ?? "")
      .replace("{imageStyle}", formData?.imageStyle ?? "");

    // Debugging output
    console.log("formData:", formData);

    try {
      // Simulating API call
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const responseText = await result?.response.text();
      console.log(responseText);

      // Parse the output to get the story title
      const parsedOutput = JSON.parse(responseText);
      const storyTitle = parsedOutput?.story_title;
      console.log("Story Title:", storyTitle);

      // Save the story to the database with the user's email and userName
      const userEmail = user?.emailAddresses?.[0]?.emailAddress ?? "Anonymous";
      const userName = userEmail.split('@')[0]; // Extract userName from email
      const resp = await SaveInDB(responseText, storyTitle, userEmail, userName);
      console.log("Database Save Response:", resp);

      // Extract the story ID from the database response
      const storyId = resp?.[0]?.storyId;

      // Navigate to the story page with the dynamic ID
      if (storyId) {
        await UpdateUserCredits();
        router.push(`/story/${storyId}`);
        // await UpdateUserCredits();
      } else {
        console.error("Failed to retrieve story ID from the database.");
      }
      setLoading(false);
    } catch (e) {
      console.error("Error generating story:", e);
      setLoading(false);
    }
  };

  const SaveInDB = async (output: string, storyTitle: string, userEmail: string, userName: string) => {
    const recordId = uuid4();
    setLoading(true);
    try {
      const result = await db
        .insert(StoryData)
        .values({
          storyId: recordId,
          ageGroup: formData?.ageGroup,
          imageStyle: formData?.imageStyle,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          output: JSON.parse(output),
          storyTitle: storyTitle,
          userEmail: userEmail, // Add userEmail to the database insert
          userName: userName,   // Add userName to the database insert
        })
        .returning({ storyId: StoryData?.storyId });

      setLoading(false);
      return result;
      //await UpdateUserCredits();
    } catch (e) {
      console.error("Error saving story in DB:", e);
      setLoading(false);
    }
  };

  // const UpdateUserCredits = async () => {
  //   try {
  //     const updatedCredits = Number(userDetail?.credit) - 1;
  //     const result = await db
  //       .update(Users)
  //       .set({ credit: updatedCredits })
  //       .where(eq(Users.userName, userDetail?.userName))
  //       .returning();
  //     setUserDetail((prev: any) => ({ ...prev, credit: updatedCredits }));
  //     console.log("Credits updated:", result);
  //   } catch (error) {
  //     console.error("Error updating user credits:", error);
  //   }
  // };

  const UpdateUserCredits=async()=>{
    const result=await db.update(Users).set({
        credit:Number(userDetail?.credit-1)
    }).where(eq(Users.userEmail,user?.primaryEmailAddress?.emailAddress??''))
    .returning({id:Users.id})
  }

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="font-extrabold text-[70px] text-primary text-center">
        CREATE YOUR STORY
      </h2>
      <p className="text-2xl text-primary text-center">
        Transform Dreams into Words, and Words into Magic.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {/* Story Subject*/}
        <StorySubjectInput userSelection={onHandleUserSelection} />
        {/* Story Type */}
        <StoryType userSelection={onHandleUserSelection} />
        {/* Age Group */}
        <AgeGroup userSelection={onHandleUserSelection} />
        {/* Image Style  */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>
      <div className="flex justify-end my-10 flex-col items-end">
        <Button
          color="primary"
          disabled={loading}
          className="p-10 text-2xl"
          onClick={GenerateStory}
        >
          Generate Story
        </Button>
        <span className="text-primary">1 credit will use</span>
      </div>
      <CustomLoader isLoading={loading} />
    </div>
  );
}

export default CreateStory;
