import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - learn Programming` 
    },[title])
};

export default useTitle;