import React from "react"
import { Player } from '@lottiefiles/react-lottie-player';
import integrity from '../../components/lotties/integrity.json'
import quality from '../../components/lotties/quality.json'
import commitment from '../../components/lotties/commitment.json'

export default function Feature() {
    return (
        <section id="feature" className="flex flex-col px-5 justify-center">
            <div className="font-bold text-center text-3xl">
                Our Key Features
            </div>
            <div className="flex flex-col md:flex-row mt-3">
                <div className="p-3">
                    <div>
                        <Player
                            autoplay
                            loop
                            src={integrity}
                            style={{ height: '150px', width: '150px' }}
                        >
                        </Player>
                    </div>
                    <div className="text-center text-3xl text-green-700 py-3">Integrity</div>
                    <div>Integrity means telling the truth, keeping promises, and treating others with fairness and respect. Integrity is one of our most valuable assets.</div>
                </div>
                <div className="p-3">
                    <div>
                        <Player
                            autoplay
                            loop
                            src={quality}
                            style={{ height: '150px', width: '150px' }}
                        >
                        </Player>
                    </div>
                    <div className="text-center text-3xl text-green-700 py-3">Quality</div>
                    <div>Quality is demonstrated in many ways starting from communication, satisfying customer service, building a work environment to meet buyer expectations.</div>
                </div>
                <div className="p-3">
                    <div>
                        <Player
                            autoplay
                            loop
                            src={commitment}
                            style={{ height: '150px', width: '150px' }}
                        >
                        </Player>
                    </div>
                    <div className="text-center text-3xl text-green-700 py-3">Commitment</div>
                    <div>Commitment is important where we will continue to provide the best to buyers. This service is a privilege that should not be ignored.</div>
                </div>
            </div>
        </section>
    )
}