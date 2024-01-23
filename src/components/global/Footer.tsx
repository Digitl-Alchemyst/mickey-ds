import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaSpotify, FaTumblr, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className=" text-slate-950 pt-8">
            <div className="container mx-auto flex flex-wrap justify-between max-w-[75rem]">
                <div className="max-w-62 w-full md:w-1/4">
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <ul className="list-none text-base hover:cursor-pointer">
                        <li>About Us Overview</li>
                        <li>Leadership Team</li>
                        <li>Values In Action</li>
                        <li>Franchise Info</li>
                        <li>Recalls &amp; Alerts</li>
                        <li>Real Estate</li>
                        <li>Accessibility</li>
                        <li>Investor Relations</li>
                        <li>News &amp; Notifications</li>
                    </ul>
                </div>

                <div className="max-w-62 w-full md:w-1/4">
                    <h3 className="text-lg font-bold mb-4">Services</h3>
                    <ul className="list-none text-base hover:cursor-pointer">
                        <li>Services Overview</li>
                        <li>Wi-Fi</li>
                        <li>PlayPlaces &amp; Parties</li>
                        <li>McDelivery&reg;</li>
                        <li>Mobile Order &amp; Pay</li>
                        <li>Trending Now</li>
                        <li>McDonald&apos;s Merchandise</li>
                        <li>Family Fun Hub</li>
                        <li>MyMcDonald&apos;s Rewards</li>
                        <li>McCafé®</li>
                    </ul>
                </div>

                <div className="max-w-62 w-full md:w-1/4">
                    <h3 className="text-lg font-bold mb-4">Community</h3>
                    <ul className="list-none text-base hover:cursor-pointer">
                        <li>Community Overview</li>
                        <li>Now Serving</li>
                        <li>HACER&reg; Scholarships</li>
                        <li>Ronald McDonald House Charities&reg;</li>
                        <li>McDonald&apos;s Asian Pacific American</li>
                        <li>McDonald&apos;s International</li>
                        <li>Black and Positively Golden</li>
                        <li>McDonald&apos;s LGBTQ+</li>
                        {/* Add more items as needed */}
                    </ul>
                </div>

                <div className="max-w-62 w-full md:w-1/4">
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <ul className="list-none text-base hover:cursor-pointer">
                        <li>Contact Us Overview</li>
                        <li>Gift Card FAQs</li>
                        <li>Donations</li>
                        <li>Employment</li>
                        <li>Customer Feedback</li>
                        <li>Frequently Asked Questions</li>
                    </ul>
                </div>
            </div>

            <div className='flex items-center mx-auto justify-between max-w-[70rem] mt-12'>
                <div className='flex space-x-6'>
                    <Link href="https://www.facebook.com/McDonalds/"><FaFacebookF className='w-10 h-10 p-3 rounded-full border border-slate-600' /></Link>
                    <Link href="https://www.x.com/McDonalds"><FaXTwitter className='w-10 h-10 p-3 rounded-full border border-slate-600' /></Link>
                    <Link href="https://www.youtube.com/channel/UCRI5ZedBs0_BYY4PlxD6m7w"><FaYoutube className='w-10 h-10 p-3 rounded-full border border-slate-600' /></Link>
                    <Link href="https://www.instagram.com/mcdonalds/"><FaInstagram className='w-10 h-10 p-3 rounded-full border border-slate-600' /></Link>
                    <Link href="https://mcdonalds.tumblr.com/"><FaTumblr className='w-10 h-10 p-3 rounded-full border border-slate-600' /></Link>
                    <Link href="https://open.spotify.com/user/mcdonalds"><FaSpotify className='w-10 h-10 p-3 rounded-full border border-slate-600' /></Link>
                </div>
                <div className='flex'>
                    <Link href="https://itunes.apple.com/us/app/mcdonalds-mobile/id922103212?mt=8"><Image src='https://www.mcdonalds.com/content/dam/sites/usa/nfl/logo/app_store_badge.png' alt='download app badge' width={150} height={50} /></Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.mcdonalds.app&hl=en"><Image src='https://www.mcdonalds.com/content/dam/sites/usa/nfl/logo/google_play_badge.png' alt='download app badge' width={150} height={50} /></Link>
                </div>
            </div>

            <div className="mt-8 text-left px-4 py-2 text-sm font-light">
                <p>Digital Alchemyst 2024 McDonald&apos;s Clone. All rights reserved.</p>
            </div>
        </footer>
    )
}



export default Footer