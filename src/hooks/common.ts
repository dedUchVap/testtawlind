import {useEffect, useState} from "react";


function useWidth(callback: () => void) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        function handleResize(){
            setWidth(window.screen.width);
            callback()
        }
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[callback])

    return width
}

export default useWidth;