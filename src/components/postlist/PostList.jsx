import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('https://backend-dedd.onrender.com/api/blog/posts/')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchPosts(); // начальный запрос

        const interval = setInterval(() => {
            fetchPosts(); // обновление каждую секунду
        }, 1000);

        return () => clearInterval(interval); // очистка интервала при размонтировании
    }, []);

    return (
        <div>
            <div class="page-blog">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="post-item wow fadeInUp">
                                {posts.map(post => (
                                    <Link to={`/posts/${post.slug}`} key={post.id} class="post-item wow fadeInUp">
                                        <div class="post-featured-image">
                                            <a data-cursor-text="View">
                                                {post.image && (
                                                    <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-2 rounded" />
                                                )}
                                            </a>
                                        </div>
                                        <div class="post-item-body">
                                            <div class="post-item-content">
                                                <h2 className="font-semibold">{post.title}</h2>
                                            </div>
                                            <div class="post-item-btn">
                                                <a href={`/posts/${post.slug}`} key={post.id} class="readmore-btn">читать далее</a>
                                            </div>
                                            <br />
                                            <p className="w-full px-4 py-2 rounded border
            bg-white text-black border-gray-300
            placeholder-gray-500

            dark:bg-gray-700 dark:text-white dark:border-gray-600
            dark:placeholder-gray-400

            transition-colors duration-200">Дата создание блога: {new Date(post.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostList;