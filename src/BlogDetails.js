import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, errmsg } = useFetch(`http://localhost:8000/blogs/${id}`)
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
                </article>
            )}
        </div>
    );
}

export default BlogDetails;