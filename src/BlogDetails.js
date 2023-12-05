import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, errmsg } = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate()
    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: "DELETE"
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <div className="blog-details">
            {errmsg && <div>{errmsg}</div>}
            {isPending && <div> Loading .....</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by - {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;