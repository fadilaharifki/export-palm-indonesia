import React from "react"
import { Player } from '@lottiefiles/react-lottie-player';
import animate from '../../components/lotties/people.json'

export default function About() {
    return (
        <section id="about" className="flex flex-col md:flex-row p-5">
            <div className="mr-5">
                <div className="uppercase font-bold mt-3">About</div>
                <div className="mt-3">
                    <div className="font-bold text-2xl">We are able to produce 1 to 2 tons of palm sticks in a day.</div>
                    <div className="mt-3">The company is engaged in the export sector which was initiated by young Indonesians to help farmers or the community in harmony with the company’s products and improve the community’s economy. Prioritizing honesty, discipline, commitment, integrity, good service, and high quality in products. </div>
                </div>
            </div>
            <div>
                <Player
                    autoplay
                    loop
                    src={animate}
                    className="w-full md:w-[300px]"
                >
                </Player>
            </div>
        </section>
    )
}