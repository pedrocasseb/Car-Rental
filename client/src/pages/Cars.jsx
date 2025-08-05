import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CarCard from '../components/CarCard'
import { useSearchParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Cars = () => {

  // getting search params from url

  const [searchParams] = useSearchParams()
  const pickupLocation = searchParams.get('pickupLocation')
  const pickupDate = searchParams.get('pickupDate')
  const returnDate = searchParams.get('returnDate')

  const {axios, toast, cars} = useAppContext()

  const isSearchData = pickupLocation && pickupDate && returnDate

  const [filteredCars, setFilteredCars] = useState([])

  const searchCarAvailability = async ()=>{
    const {data} = await axios.post('/api/booking/check-availability', {location: pickupLocation, pickupDate, returnDate})
    if(data.success){
      setFilteredCars(data.availableCars)
      console.log({ pickupLocation, pickupDate, returnDate })
      if(data.availableCars.length === 0){
        toast('No cars available')
      }
      return null
    }
  }

  useEffect(()=>{
    if(isSearchData) {
        searchCarAvailability()
    } else {
        // Mostrar todos os carros disponíveis quando não há pesquisa
        setFilteredCars(cars.filter(car => car.isAvaliable))
    }
},[pickupLocation, pickupDate, returnDate, cars])

  const [input, setInput] = useState('')

  return (
    <div className='mt-16'>
      <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
        <Title title="Available Cars" subTitle="Browse our selection of premium vehicles available for yout next adventure"/>
        <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow'>
          <img src={assets.search_icon} alt="search" className='w-4.5 h-4.5 mr-2'/>
          <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Search by make, model, or features' className='w-full h-full outline-none text-gray-500'/>
          <img src={assets.filter_icon} alt="filter" className='w-4.5 h-4.5 ml-2'/>
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
        <p className='text-gray-500 xl:px-20 max-w-7xl mx-auto'>Showing {filteredCars.length} Cars</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'>
          {filteredCars.map((car, index)=> (
            <div key={index}>
              <CarCard car={car}/>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Cars