// import React, { useState } from 'react'
// import Image from 'next/image';
// import { OptionField } from './StoryType';
// function AgeGroup({userSelection}:any) {
//  const OptionList=[
//         {
//             label:'0-2 years',
        
//             imageUrl:'/02Years.png',
//             isFree:true
//         },
//         {
//             label:'3-5 years',
        
//             imageUrl:'/35Years.png',
//             isFree:true
//         },
//         {
//             label:'6-8 years',
        
//             imageUrl:'/68Years.png',
//             isFree:true
//         }
//     ]

//     const [selectedOption,setSelectedOption]=useState<string>();

//     const onUserSelect=(item:OptionField)=>{
//             setSelectedOption(item.label)
//             userSelection({
//                 fieldValue:item?.label,
//                 fielName:'ageGroup'
//             })
//         }

//   return (
//     <div>
//         <label className='font-bold text-4xl text-primary '>3. Age Group</label>
//         <div className='grid grid-cols-3 gap-5 mt-3'>
//             {OptionList.map((item,index)=>(
//                 <div className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 ${selectedOption==item.label?'grayscale-0 border-2 rounded-3xl border-primary': 'grayscale'}`} onClick={()=>onUserSelect(item)}>
//                     <h2 className='absolute bottom-1 text-white text-center w-full font-extrabold'>{item.label}</h2>
//                     <Image src={item.imageUrl} alt={item.label} width={300} height={500} className='object-cover h-[260px] rounded-3xl'/>
//                     </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default AgeGroup

import React, { useState } from "react";
import Image from "next/image";
import { OptionField } from "./StoryType";

function AgeGroup({ userSelection }: any) {
  const OptionList: OptionField[] = [
    {
      label: "0-2 years",
      imageUrl: "/02Years.png",
      isFree: true,
    },
    {
      label: "3-5 years",
      imageUrl: "/35Years.png",
      isFree: true,
    },
    {
      label: "6-8 years",
      imageUrl: "/68Years.png",
      isFree: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: "ageGroup", // Fixed typo: "fielName" -> "fieldName"
    });
  };

  return (
    <div>
      <label className="font-bold text-4xl text-primary">3. Age Group</label>
      <div className="grid grid-cols-3 gap-5 mt-3">
        {OptionList.map((item) => (
          <div
            key={item.label} // Fixed: Added a unique key prop
            className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 ${
              selectedOption === item.label
                ? "grayscale-0 border-2 rounded-3xl border-primary"
                : "grayscale"
            }`}
            onClick={() => onUserSelect(item)}
          >
            <h2 className="absolute bottom-1 text-white text-center w-full font-extrabold">
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={500}
              className="object-cover h-[260px] rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeGroup;
