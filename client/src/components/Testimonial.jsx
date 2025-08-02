import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {

    const testimonials = [
        {   name: "Emma Rodriguez",
            location: "New York, EUA", 
            image: assets.testimonial_image_1, 
            testimonial: "I've rented cars from various companies, but the experience with CarRental was exceptional." 
        },
        {   name: "John Smith",
            location: "Chicago, EUA", 
            image: assets.testimonial_image_2, 
            testimonial: "CarRental made my trip so much easier. The car was delivered right to my door, and the costumer service was fantastic." 
        },
        {   name: "Ava Johnson",
            location: "Sydney, Australia    ", 
            image: assets.testimonial_image_1, 
            testimonial: "I highly recommend CarRental! Their fleet is amazing, and I aways feel like I'm getting the best deal with excelent service." 
        },
    ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44 mx-auto">
           <Title title="What Our Customers Say" subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial