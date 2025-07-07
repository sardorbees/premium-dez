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
function ImageGallery() {
    const [images, setImages] = useState([]);

    const fetchImages = () => {
        axios.get('https://backend-dedd.onrender.com/api/gallery/images/')
            .then(res => setImages(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchImages(); // сразу загрузить
        const interval = setInterval(fetchImages, 1000); // обновлять каждую секунду

        return () => clearInterval(interval); // очистить интервал при размонтировании
    }, []);
    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="page-header-box">
                                <h1 class="text-anime-style-2" data-cursor="-opaque">Нашы галерия</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="page-gallery">
                <div class="container">
                    <div class="row gallery-items page-gallery-box">
                        <div className="dsgh">
                            <div class="col-lg-4 col-61">
                                <div class="photo-gallery wow fadeInUp">
                                    {images.map(image => (
                                        <div key={image.id} className="border rounded shadow p-2">
                                            <a data-cursor-text="View">
                                                <figure class="image-anime">
                                                    <img
                                                        src={image.image}
                                                        alt={image.title}
                                                        className="w-full h-48 object-cover rounded"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageGallery;