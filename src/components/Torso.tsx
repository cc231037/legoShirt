import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface TorsoProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
    sleeves?: string
}

const Torso = ({ imgSrc, className, sleeves = "white", dark = false, ...props }: TorsoProps) => {
    
    return (<div className={cn("relative pointer-events-none z-50 overflow-hidden",
        className
    )}
        {...props}>
        <img src={
            dark
                ? `/torso-${sleeves}.png`
                : `/torso-${sleeves}.png`
        }
            className="pointer-events-none z-50 select-none"
            alt="torso image"
        />
        <div className="absolute -z-10 inset-0">
            <img
                className="object-cover min-w-full min-h-full"
                src={imgSrc}
                alt="overlaying phone image" />
        </div>
    </div>
    )
}

export default Torso