import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommnetCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
    const [posts, setPosts] = useState({});

    const fecthPosts = async()=> {
        const res = await axios.get('http://localhost:4002/posts');
        console.log(res.data);
        setPosts(res.data);
    }

    useEffect(()=> {
        fecthPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return <div className="card" style={{width: '30%', marginBottom: '20px'}} key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList comments={post.comments} />
                <CommnetCreate postId={post.id} />

            </div>
        </div>
    });

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>;
};