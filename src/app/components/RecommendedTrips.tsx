import TripItem from "@/components/TripItem"
import { prisma } from "@/lib/prisma"
import { Trip } from "@prisma/client"

async function getTrips() {
  const trips = await prisma.trip.findMany({})
  
  return trips;
}

export default async function RecommendedTrips() {
  const data = await getTrips()

  //const data = await fetch("http://localhost:3000/api/trips").then((res) => res.json());

  return(
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-graySecondary"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">Destinos Recomendados</h2>
        <div className="w-full h-[1px] bg-graySecondary"></div>
      </div>

      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trip) => (
        <TripItem key={trip.id} trip={trip}/>
      ))}
      </div>
    </div>
  )
}