import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { UncontrolledCarousel } from "reactstrap";

export default function Corousel() {
    return (
        <UncontrolledCarousel className='pt-10'
            items={[
                {
                    altText: 'Slide 1',
                    caption: '',
                    key: 1,
                    src: 'https://img.jakpost.net/c/2020/08/28/2020_08_28_103278_1598607181._large.jpg'
                },
                {
                    altText: 'Slide 2',
                    caption: '',
                    key: 2,
                    src: 'https://chainreactionresearch.com/wp-content/uploads/2019/10/China-to-ramp-up-Indonesian-palm-oil-exports-offsetting-EU-slump.jpg'
                }
            ]}
        />
    )
}