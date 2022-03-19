import React from "react"

export default function Product() {
    return (
        <section id="product" className="flex flex-col p-5 mb-10">
            <div className="font-bold text-center text-3xl">
                Product
            </div>
            <div className="flex flex-col md:flex-row  mt-5">
                <div className="mr-10">
                    <img src="https://picsum.photos/id/123/1200/600" width={200} height={200} alt="product" />
                </div>
                <div>
                    <div className="font-bold text-2xl">
                        Stick Palm
                    </div>
                    <div>
                        <div>Spesifications:</div>
                        <div> – Size height from 90 to 120 cm</div>
                        <div>– Moisture 14%</div>
                    </div>
                </div>
            </div>
        </section>
    )
}