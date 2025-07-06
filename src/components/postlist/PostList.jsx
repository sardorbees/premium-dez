import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('http://127.0.0.1:8000/api/blog/posts/')
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

    return (<div>
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
                                        <p className="text-sm text-gray-500" style={{ color: 'black' }}>Дата создание блога: {new Date(post.created_at).toLocaleDateString()}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* <div class="col-lg-12">
                        <div class="page-pagination wow fadeInUp" data-wow-delay="1.2s">
                            <ul class="pagination">
                                <li><a href="#"><i class="fa-solid fa-arrow-left-long"></i></a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i class="fa-solid fa-arrow-right-long"></i></a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    );
};

export default PostList;