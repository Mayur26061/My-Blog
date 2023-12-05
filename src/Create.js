import { useState } from 'react'
import {useNavigate } from 'react-router-dom'
const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('me')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate ()
    const onCreateBlog = (ev) => {
        const blog = { title, body, author }
        ev.preventDefault()
        setIsPending(true)
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("done")
            setIsPending(false)
            navigate('/')
        })
        ev.target.reset()
    }
    return (
        <div className="create">
            <h2>Adding Blog</h2>
            <form onSubmit={onCreateBlog}>
                <div className="contents">
                    <div className="label">
                        <label>Title</label>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder="Enter Title" required onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                </div>
                <div className="contents">
                    <div className="label">
                        <label>Body</label>
                    </div>
                    <div className="inputs">
                        <textarea placeholder="Enter your thought" required onChange={(e) => { setBody(e.target.value) }}></textarea>
                    </div>
                </div>
                <div className="contents">
                    <div className="label">
                        <label>Author</label>
                    </div>
                    <div className="inputs">
                        <select onChange={(e) => setAuthor(e.target.value)}>
                            <option value="me">me</option>
                            <option value="you">you</option>
                            <option value="anonymous">Anonymous</option>
                        </select>
                    </div>
                </div>
                <div className="create-button">
                   
                    {!isPending &&  <input type="submit" value="Add Blog" />}
                    { isPending && <input type="submit" value="Loading" disabled/>}
                </div>
            </form>
        </div>
    );
}

export default Create;