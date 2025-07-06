import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import '../assents/css/all.min.css'
import '../assents/css/animate.css'
import '../assents/css/bootstrap.min.css'
import '../assents/css/custom.css'
import '../assents/css/magnific-popup.css'
import '../assents/css/mousecursor.css'
import '../assents/css/slicknav.min.css'
import '../assents/css/swiper-bundle.min.css'
function VideoGallery() {
    const [videos, setVideos] = useState([]);

    const fetchVideos = () => {
        axios.get('https://backend-dedd.onrender.com/api/video_gallery/videos/')
            .then(res => setVideos(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchVideos();
        const interval = setInterval(fetchVideos, 1000); // автообновление
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-header-box">
                                <h1 class="text-anime-style-2" data-cursor="-opaque">Нашы видео</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-video-gallery">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="video-gallery-image wow fadeInUp">
                                {videos.map(video => (
                                    <div key={video.id} className='videssss'>
                                        <video controls className="vijds">
                                            <source src={video.video} type="video/mp4" />
                                            Ваш браузер не поддерживает видео.
                                        </video>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoGallery;