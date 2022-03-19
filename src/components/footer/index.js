import React from "react"
import { Player } from '@lottiefiles/react-lottie-player';
import phone from '../../components/lotties/phone.json'
import { FaFacebookF } from 'react-icons/fa';
import { BsEnvelopeFill, BsWhatsapp, BsInstagram } from 'react-icons/bs';

export default function Footer() {
    return (
        <div id="contact" className="flex flex-col md:flex-row  bg-black text-white p-5">
            <div>
                <div className="text-3xl">PT Universal Palm Indonesia</div>
                <div className="mt-3">We also continue to update the information about the company through social media, for the latest information you can follow our social media.</div>
                <div className="mt-3">Email : upalmindonesia@gmail.com</div>
                <div>Phone : +62 895-0582-2191</div>
                <div className="flex flex-row mt-3">
                    <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><BsEnvelopeFill size={30} /></div>
                    <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><BsWhatsapp size={30} /></div>
                    <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><FaFacebookF size={30} /></div>
                    <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><BsInstagram size={30} /></div>
                </div>
            </div>
            <div>
                <Player
                    autoplay
                    loop
                    src={phone}
                    className="w-full md:w-[300px]"
                >
                </Player>
            </div>
        </div>
    )
}