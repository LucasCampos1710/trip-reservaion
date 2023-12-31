import Button from "@/components/Button";
import Image from "next/image";

interface TripLocationProps {
  location: string
  locationDescription: string
}

export function TripLocation({ location, locationDescription }: TripLocationProps) {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-secondary mb-2">Localização</h2>
     <div className="relative h-[280px] w-full">
        <Image src="/map-mobile.png" alt={location} fill style={{ objectFit: "cover"}}/>
     </div>

     <h3 className="text-secondary text-sm font-semibold mt-3">{location}</h3>
     <p className="text-xs text-secondary mt-3 leading-5">{locationDescription}</p>
     <Button variant="outlined" className="w-full mt-5">Ver no Google Maps</Button>
    </div>
  )
}