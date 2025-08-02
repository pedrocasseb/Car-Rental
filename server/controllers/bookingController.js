import Booking from "../models/Booking"
import Car from "../models/Car"

// Function to check availability of car for gine date

const checkAvailability = async (Car, pickupDate, returnDate)=>{
    const bookings = await Booking.find({
        car,
        pickupDate: {$lte: returnDate},
        returnDate: {$gte: pickupDate}
    })
    return bookings.length === 0
}

// API to check availability of cars for the given date and location

export const checkAvailabilityOfCar = async (req,res)=>{
    try {
        const {location, pickupDate, returnDate} = req.body
        
        // fecth all available cars for the given location
        const cars = await Car.find({location, isAvailable: true})

        // check car availability for the given date range using promise
        const availableCarsPromises = cars.map(async (car)=>{
            const isAvailable = await checkAvailability(car._id, pickupDate, returnDate)
            return {...car._doc, isAvailable: isAvailable}
        })

        let availableCars = await Promise.all(availableCarsPromises)
        availableCars = availableCars.filter(car => car.isAvailable === true)

        res.json({success: true, availableCars})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// API to create Booking

export const createBooking = async (req,res)=>{
    try {
        const {_id} = req.user
        const {car, pickupDate, returnDate} = req.body

        const isAvailable = await checkAvailability(car, pickupDate, returnDate)
        if(!isAvailable){
            return res.json({success: false, message: error.message})
        }

        const carData = await Car.findById(car)

        // Calculate price based on pickupDate and returnDate
        const picked = new Date(pickupDate)
        const returned = new Date(returnDate)
        const noOfDays = Math.ceil((returned - picked)/ 1000 * 60 * 60 * 24)
        const price = carData.pricePerDay * noOfDays

        await Booking.create({car, owner: carData.owner, user: _id, pickupDate, returnDate, price})
        
        res.json({success: true, message: "Booking Created"})

    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// API to list user Bookings

export const getUserBookings = async (req, res)=>{
    try {
        const {_id} = req.user
        const bookings = await Booking.find({user: _id}).populate("car").sort({createdAt: -1})
        res.json({success: true, bookings})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// API to get owner bookings