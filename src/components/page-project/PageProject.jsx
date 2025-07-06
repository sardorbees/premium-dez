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
function PageProject() {
    const [works, setWorks] = useState([]);

    const fetchWorks = () => {
        axios.get('https://backend-dedd.onrender.com/api/our_pro/works/')
            .then(res => setWorks(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchWorks(); // первая загрузка

        const interval = setInterval(() => {
            fetchWorks(); // автообновление
        }, 1000);

        return () => clearInterval(interval); // очистка
    }, []);
    return (
        <div class="page-projects">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row project-item-boxes align-items-center">
                            <div class="col-lg-4 col-md-6 project-item-box termite">
                                <div class="project-item wow fadeInUp" data-wow-delay="1.4s">
                                    {works.map(work => (
                                        <div key={work.id}>
                                            <div class="project-image">
                                                <figure>
                                                    <img src={work.image} alt={work.title} className="w-full h-48 object-cover rounded-lg mb-2" />
                                                </figure>
                                            </div>
                                            <div class="project-content">
                                                <h3>{work.title}</h3>
                                            </div>
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
export default PageProject;