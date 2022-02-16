import React from 'react'
import Image from 'next/image'
import img1 from '../public/assets/1.jpg'
import img2 from '../public/assets/2.jpg'
import img3 from '../public/assets/3.jpg'

export default function galery() {
    return (
        <div>
            <Image layout='responsive' src={img1}
            placeholder="blur"
                width="2401"
                height="3600"
            />
            <Image layout='responsive' src={img2}
            placeholder="blur"
                width="5131"
                height="7693"
            />
            <Image layout='responsive' src={img3}
            placeholder="blur"
                width="4668"
                height="3110"
            />

            {/*         <img src="assets/1.jpg" alt=''/>
        <img src="assets/2.jpg" alt=''/>
        <img src="assets/3.jpg" alt=''/> */}
        </div>
    )
}

/*
1,55 Mo (taille 1,55 Mo) => 829,92 Ko (taille 829,69 Ko)
2,88 Mo (taille 2,88 Mo) => 757,85 Ko (taille 757,46 Ko)
3,11 Mo (taille 3,11 Mo) =W1,10 Mo (taille 1,10 Mo)
*/