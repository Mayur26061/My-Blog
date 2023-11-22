import { useState, useEffect } from "react";
import Bloglist from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [errmsg, setErrormsg] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{

            fetch('http://localhost:8000/blogs')
            .then(res =>{
                if(!res.ok){
                    throw Error("Something went wrong")
                }
                return res.json()
            })
            .then(data=>{
                console.log(data)
                setBlogs(data)
                setIsPending(false)
                setErrormsg(null)

            })
            .catch((err)=>{
                console.log(err)
                setErrormsg(err.message)
                setIsPending(false)

            })
        },1000)
    },[]);

    return (
        <div className="home">
            { errmsg && <div>{errmsg}</div>}
            { isPending && <div> Loading .....</div>}
            { blogs && <Bloglist blogs={blogs} title="All blogs" /> }
        </div>
    );
}

export default Home;