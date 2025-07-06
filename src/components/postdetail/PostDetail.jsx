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
            axios.get(`http://127.0.0.1:8000/api/blog/posts/${slug}/`)
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
                <Link to="/posts" className="text-blue-500" style={{ color: 'black', paddingLeft: '85px', fontSize: '35px', marginBottom: '25px' }}>&larr; Назад к блогам</Link>
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

                                    <p class="wow fadeInUp" data-wow-delay="0.2s">content</p>

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