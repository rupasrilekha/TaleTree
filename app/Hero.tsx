import React from 'react'
import Image from 'next/image'
import { Button } from '@heroui/button'
import Link from 'next/link'

function Hero() {
  return (
    
    <div className='px-10 md:px-28 lg:px-44 mt-10 h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className='text-[70px] text-primary font-extrabold'>
                Weaves magical tales for children.
                </h2>
                <p className='text-2xl text-primary font-light'>Bringing stories to life that spark wonder, ignite creativity, and transport kids to magical worlds filled with adventure and joy</p>
                <Link href={'/create-story'}>
                    <Button size='lg' color='primary' className='mt-5 font-bold text-2xl p-8'>Craft a tale</Button>
                </Link>
            </div>
            <div>
                <Image src={'/hero.png'} alt={'hero'} width={700} height={400}/>
            </div>

        </div>
    </div>
  )
}

export default Hero