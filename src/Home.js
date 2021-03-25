import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(
        [
            {title: 'sdfsdgfdg', body: 'dsafsdf,', author:'Gogo', id: 1},
            {title: 'dfgdfgb', body: 'fgdfgdfgbbngfbf,', author:'Todor', id: 2}
        ]
    )

    return ( 
        <div className="home">
            <BlogList blogs = {blogs}/>
        </div>
     );
}
 
export default Home;