import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { loadPosts } from "../store/posts";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadPosts());
    },[]);

    return (
        <div className="col-md-12 text-center">
            <h1 className="text-success">Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li  key={post.id}>{post.title}</li>
                ))
                }
                </ul>
        </div>
    );
};

export default Posts;
