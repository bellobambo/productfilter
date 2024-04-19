import { Index } from "@upstash/vector";
import * as dotenv from 'dotenv'

dotenv.config()


export type Product = {
    id: string
    imageId: string
    name: string
    size : 'S' | 'M' | 'L'
    color: "white" | "beige" | "green" | "purple" | "blue"
    price : number
}

export const db = new Index<Product>()
