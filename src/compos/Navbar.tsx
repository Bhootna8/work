import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 shadow-md'>
        <div className=' flex gap-1'>
        <Image
        width={25}
        height={25}
        src="logo.svg"
        alt=''
        />

        <h1 className=' text-xl font-bold'>Cyph</h1>
        </div>

        <div className=' flex  gap-5 font-semibold'>
            <Link href={'#pricing'}>Pricing</Link>
            <Link href={'#about'}>About us</Link>
            <Link href={'#contact'}>Contact us</Link>
        </div>

        
            <SignedOut>
                <SignInButton mode='modal'/>
            </SignedOut>

            <SignedIn>
                <UserButton/>
            </SignedIn>
    </nav>
  )
}

export default Navbar