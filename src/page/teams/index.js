import React from "react"
import fadil from '../../components/assets/fadil.png'
import dama from '../../components/assets/dama.png'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

export default function Teams() {
    return (
        <section id="teams" className="flex flex-col p-5 mb-10">
            <div className="font-bold text-center text-3xl">
                Our Team
            </div>
            <div className="flex flex-col md:flex-row mt-10">
                <div className="flex flex-col justify-start items-center w-full md:w-6/12 p-2">
                    <img src={fadil} alt="photo" width={150} />
                    <div className="text-center text-2xl text-green-700 py-3">Fadilah Arifki, S.Math</div>
                    <div className="italic text-center">Chieft Executive Officier (CEO)</div>
                    <div className="text-center text-sm text-gray-700">The biggest risk is taking no risk at all. In this rapidly changing world, the only strategy that is guaranteed to fail is not taking risks.</div>
                    <div className="flex flex-row mt-3">
                        <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><AiFillLinkedin color="white" size={30} /></div>
                        <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><FaFacebookF color="white" size={30} /></div>
                        <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><BsInstagram color="white" size={30} /></div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center w-full md:w-6/12 p-2">
                    <img src={dama} alt="photo" width={150} />
                    <div className="text-center text-2xl text-green-700 py-3">Dama Choiruldin A, Amd.Kom</div>
                    <div className="italic text-center">Chieft Operational Officier (COO)</div>
                    <div className="text-center text-sm text-gray-700">Do not work half-assed, if you have started a business then work seriously. Do not stop in the middle of the road because it will waste the wealth, energy, time that we have prepared to start a business.</div>
                    <div className="flex flex-row mt-3">
                        <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><AiFillLinkedin color="white" size={30} /></div>
                        <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><FaFacebookF color="white" size={30} /></div>
                        <div className="bg-green-700 p-2 mr-2 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><BsInstagram color="white" size={30} /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}