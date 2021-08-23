import { useEffect, useState } from "react";

export default function useWindowSize(): { width: number, height: number } {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        })
    }, [])
    
    return windowSize
}