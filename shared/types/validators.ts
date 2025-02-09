import {z} from "zod"

const reservationSchema = z.object({
  uid:z.string()
})
export type Reservation = z.infer<typeof reservationSchema>
