import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
    { label: "White", value: "white", tw: "zinc-100" },
    { label: "Black", value: "black", tw: "zinc-900" },
    { label: "Red", value: "red", tw: "red-600" },
    { label: "Green", value: "green", tw: "green-600" },
    { label: "Blue", value: "blue", tw: "blue-600" },
] as const

export const SERIES = {
    name: 'series',
    options: [
        {
            label: 'Series 1',
            value: 'series1',
        },
        {
            label: 'Series 2',
            value: 'series2',
        },
        {
            label: 'Series 3',
            value: 'series3',
        },
        {
            label: 'Series 4',
            value: 'series4',
        },
        {
            label: 'Series 5',
            value: 'series5',
        },
        {
            label: 'Series 6',
            value: 'series6',
        },
    ],
} as const


export const MATERIALS = {
    name: 'material',
    options: [
        {
            label: 'ABS',
            value: 'abs',
            description: undefined,
            price: PRODUCT_PRICES.material.abs,
        },
        {
            label: 'ePOM',
            value: 'epom',
            description: 'Sustainable Plastic',
            price: PRODUCT_PRICES.material.epom,
        },
    ],
} as const

export const FINISHES = {
    name: 'finish',
    options: [
        {
            label: 'Smooth Finish',
            value: 'smooth',
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth,
        },
        {
            label: 'Textured Finish',
            value: 'textured',
            description: 'Soft grippy texture',
            price: PRODUCT_PRICES.finish.textured,
        },
    ],
} as const