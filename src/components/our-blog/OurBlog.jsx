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
function OurBlog() {
    return (
        <div class="our-blog">
            <div class="container">
                <div class="row section-row align-items-center">
                    <div class="col-lg-12">
                        <div class="section-title section-title-center">
                            <h3 class="wow fadeInUp">Latest blog</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Stay up to date with our latest <span>pest
                                control advice</span></h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="post-item wow fadeInUp">
                            <div class="post-featured-image">
                                <a href="blog-single.html" data-cursor-text="View">
                                    <figure class="image-anime">
                                        <img src="images/post-1.jpg" alt=""/>
                                    </figure>
                                </a>
                            </div>

                            <div class="post-item-body">

                                <div class="post-item-content">
                                    <h2><a href="blog-single.html">How to Keep Your Home Pest-Free This Winter</a></h2>
                                </div>

                                <div class="post-item-btn">
                                    <a href="blog-single.html" class="readmore-btn">read more</a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-6">

                        <div class="post-item wow fadeInUp" data-wow-delay="0.2s">

                            <div class="post-featured-image">
                                <a href="blog-single.html" data-cursor-text="View">
                                    <figure class="image-anime">
                                        <img src="images/post-2.jpg" alt=""/>
                                    </figure>
                                </a>
                            </div>

                            <div class="post-item-body">

                                <div class="post-item-content">
                                    <h2><a href="blog-single.html">5 Eco-Friendly Pest Control Method You Should Know
                                        About</a></h2>
                                </div>

                                <div class="post-item-btn">
                                    <a href="blog-single.html" class="readmore-btn">read more</a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-6">

                        <div class="post-item wow fadeInUp" data-wow-delay="0.4s">

                            <div class="post-featured-image">
                                <a href="blog-single.html" data-cursor-text="View">
                                    <figure class="image-anime">
                                        <img src="images/post-3.jpg" alt=""/>
                                    </figure>
                                </a>
                            </div>

                            <div class="post-item-body">

                                <div class="post-item-content">
                                    <h2><a href="blog-single.html">Signs You Have a Termite Problem and How to Handle It</a>
                                    </h2>
                                </div>

                                <div class="post-item-btn">
                                    <a href="blog-single.html" class="readmore-btn">read more</a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurBlog;