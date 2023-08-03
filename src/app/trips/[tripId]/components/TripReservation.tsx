"use client"

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { differenceInDays } from "date-fns";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  tripStartDate: Date
  tripEndDate: Date
  maxGuest: number
  pricePerDay: number
}
interface TripReservationForm {
  guests: number
  startDate: Date | null
  endDate: Date | null
}

export default function TripReservation({maxGuest, tripStartDate, tripEndDate, pricePerDay}: TripReservationProps) {
  const { register, handleSubmit, formState: { errors }, control, watch } = useForm<TripReservationForm>()

  const onSubmit = (data: any) => {
    console.log({data})
  }

  const startDate = watch("startDate")
  const endDate = watch("endDate")
  
  return (
      <div className="flex flex-col px-5 ">
        <div className="flex gap-4">
          <Controller 
            name="startDate"
            rules={{
              required: {
                value: true,
                message: "Data inicial é obrigatoria!"
              }
            }}
            control={control}
            render={({ field }) => (
            <DatePicker 
             error={!!errors?.startDate} 
             errorMessage={errors?.startDate?.message} 
             onChange={field.onChange} 
             selected={field.value} 
             placeholderText="Data de Início" 
              className="w-full" 
              minDate={tripStartDate}
              />
              )}
          />
         
        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Data final é obrigatoria!"
            }
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText="Data Final"
              className="w-full"
              maxDate={tripEndDate}
              minDate={startDate ?? tripStartDate}
            />
          )}
        />
        </div>

        <Input 
          {...register("guests",{
            required: {
              value: true,
              message: "Número de hóspedes é obrigatório!"
            },
          })}
        placeholder={`Número de Hóspedes (max: ${maxGuest})`} className="mt-4"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
        />

        <div className="flex justify-between mt-3">
          <p className="font-medium text-sm text-secondary">Total: </p>
          <p className="font-medium text-sm text-secondary">
          {startDate && endDate ? `R$${differenceInDays(endDate, startDate) * pricePerDay}` ?? 1 : "R$0"} 
          </p>
        </div>

        <div className="pb-10 border-b border-graySecondary w-full">
          <Button variant="primary" className="mt-3 w-full" onClick={() => handleSubmit(onSubmit)()}>Reservar agora</Button>
        </div>
      </div>
  )
}