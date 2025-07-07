import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


import telegram from '../assents/img/icon/telegram.png'
import instagram from '../assents/img/icon/instagram.png'
const PostDetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = () => {
            axios.get(`https://backend-dedd.onrender.com/api/blog/posts/${slug}/`)
                .then(res => setPost(res.data))
                .catch(err => console.log(err));
        };

        fetchPost(); // первый вызов

        const interval = setInterval(fetchPost, 1000); // обновление каждую секунду

        return () => clearInterval(interval); // очистка интервала
    }, [slug]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-header-box">
                                <h1 class="text-anime-style-2" data-cursor="-opaque">{post.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single-post">
                <Link to="/" className="w-full px-4 py-2 rounded border
            bg-white text-black border-gray-300
            placeholder-gray-500

            dark:bg-gray-700 dark:text-white dark:border-gray-600
            dark:placeholder-gray-400

            transition-colors duration-200">&larr; Назад на главный</Link>
                <br /><br /><br />
                <Link to="/posts" className="w-full px-4 py-2 rounded border
            bg-white text-black border-gray-300
            placeholder-gray-500

            dark:bg-gray-700 dark:text-white dark:border-gray-600
            dark:placeholder-gray-400

            transition-colors duration-200">&larr; Назад к блогам</Link>
                <br />
                <div className="container">
                    <br /><br /><br /><br />
                    <div className="row">
                        <div className="col-lg-12">
                            <div class="post-image">
                                <figure class="image-anime">
                                    {post.image && <img src={post.image} alt={post.title} className="w-full h-auto rounded mb-4" />}
                                </figure>
                            </div>
                            <div class="post-content">

                                <div class="post-entry">
                                    <p class="wow fadeInUp">{post.title}</p>
                                </div>

                                <div class="post-tag-links">
                                    <div class="row align-items-center">
                                        <div class="col-lg-4">
                                            <div class="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
                                                <ul>
                                                    <li><a href="#"><img src={telegram} alt="" /></a></li>
                                                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;