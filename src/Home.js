import Bloglist from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs,isPending,errmsg} = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            { errmsg && <div>{errmsg}</div>}
            { isPending && <div> Loading .....</div>}
            { blogs && <Bloglist blogs={blogs} title="All blogs" /> }
        </div>
    );
}

export default Home;