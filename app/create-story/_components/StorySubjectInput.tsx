import { Textarea } from '@heroui/react'
import React from 'react'

function StorySubjectInput({userSelection}:any) {
    function userSelecttion(arg0: {}): void {
        throw new Error('Function not implemented.')
    }

  return (
    <div>
        <label className='font-bold text-4xl text-primary '>1. Subject of the Story</label>
        <Textarea
            placeholder='Write the subject of the story you want to create...'
            size='lg'
            classNames={{
                input:"resize-y  min-h-[230px] text-2xl p-5"
            }}

            className='mt-3 max-w-lg'
            onChange={(e)=>userSelection({
                fieldValue:e.target.value,
                fieldName:'storySubject'
            })}
        />
    </div>
  )
}

export default StorySubjectInput