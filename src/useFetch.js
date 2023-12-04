import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [errmsg, setErrormsg] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error("Something went wrong")
                }
                return res.json()
            })
            .then(data=>{
                console.log(data)
                setData(data)
                setIsPending(false)
                setErrormsg(null)

            })
            .catch((err)=>{
                
                    setErrormsg(err.message)
                    setIsPending(false)
                

            })
        },1000)
    },[url]);
    return {data,isPending,errmsg}
}
 
export default useFetch;