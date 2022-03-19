import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { UncontrolledCarousel } from "reactstrap";

export default function Corousel() {
    return (
        <UncontrolledCarousel
            items={[
                {
                    altText: 'Slide 1',
                    caption: '',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/600'
                },
                {
                    altText: 'Slide 2',
                    caption: '',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/600'
                },
                {
                    altText: 'Slide 3',
                    caption: '',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/600'
                }
            ]}
        />
    )
}