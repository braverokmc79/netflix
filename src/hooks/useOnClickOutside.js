import React, { useEffect } from 'react'

export default function useOnClickOutside(ref, handler) {
  
    useEffect(()=>{
        const listener=(event)=>{
            console.log(" ref " , ref.current);
            console.log(" event.target " , event.target);
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart",listener)

        return ()=>{
            //unmount 될때
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    }, [ref, handler]);


}
