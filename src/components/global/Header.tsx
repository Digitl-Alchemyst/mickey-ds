import {
  ChevronDownIcon,
  GlobeIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const location = 'us/en-us';

const Header = () => {
  return (
    <header className='flex items-center justify-center px-2 py-2 shadow-md hb:px-6 hb:py-10'>
      <div className='flex w-full max-w-[75rem] items-center hb:justify-between'>
        {/* Logo  */}
        <div className='hidden hb:flex'>
          <Image
            src='/MLogo.png'
            width={75}
            height={75}
            alt="Mickey D's Logo"
          />
        </div>
        <div className='hb:hidden'>
          <Image
            src='/MLogo.png'
            width={45}
            height={45}
            alt="Mickey D's Logo"
          />
        </div>

        {/*  Menu 1025px+  */}
        <div className='hidden flex-col gap-y-5 px-3 hb:flex'>
          {/* Language Selector  */}
          <div className='flex '>
            <GlobeIcon className='h-5 w-5' /> <ChevronDownIcon />
          </div>
          {/* Nav Menu  */}
          <nav className='flex w-full space-x-4'>
            <Link
              href={`${location}/full-menu`}
              className='flex items-center gap-x-1'
            >
              Our Menu <ChevronDownIcon />{' '}
            </Link>
            <Link
              href={`${location}/deals`}
              className='flex items-center gap-x-1'
            >
              Exclusive Deals
            </Link>
            <Link
              href={`${location}/my-mcds`}
              className='flex items-center gap-x-1'
            >
              My Mickey D&apos;s Rewards
            </Link>
            <Link
              href={`${location}/arch-card`}
              className='flex items-center gap-x-1'
            >
              Gift Cards
            </Link>
            <Link
              href={`${location}/download-app`}
              className='flex items-center gap-x-1'
            >
              Download App
            </Link>
            <Link
              href={`${location}/about-our-food`}
              className='flex items-center gap-x-1'
            >
              About Our Food
            </Link>
            <Link
              href={`${location}/store-locator`}
              className='flex items-center gap-x-1'
            >
              Store Locator
            </Link>
          </nav>
        </div>

        <div className='flex w-full items-center justify-between hb:w-fit hb:flex-col'>
          {/*  Menu 1025px-  */}
          <div className='flex px-3 hb:hidden'>
            <HamburgerMenuIcon className='h-6 w-6' />
          </div>

          {/* Order Button  */}
          <div className='align-items-end flex'>
            <button className='min-w-max rounded-md border border-mcdy-600 bg-mcdy-500 px-6 py-2 text-lg text-slate-950 shadow-md hover:bg-mcdy-400'>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
