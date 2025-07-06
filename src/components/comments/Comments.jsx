import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assents/css/all.min.css'
import '../assents/css/animate.css'
import '../assents/css/bootstrap.min.css'
import '../assents/css/custom.css'
import '../assents/css/magnific-popup.css'
import '../assents/css/mousecursor.css'
import '../assents/css/slicknav.min.css'
import '../assents/css/swiper-bundle.min.css'

const API_URL = 'http://127.0.0.1:8000/api/comment/comments/';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [form, setForm] = useState({
        id: null,
        name: '',
        text: '',
        rating: 1,
        avatar: null,
    });


    const fetchComments = async () => {
        try {
            const res = await axios.get(API_URL);
            setComments(res.data);
        } catch (err) {
            console.error('Ошибка при загрузке отзывов:', err);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'avatar') {
            setForm((prev) => ({ ...prev, avatar: files[0] }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('text', form.text);
        formData.append('rating', form.rating);
        if (form.avatar) formData.append('avatar', form.avatar);

        try {
            if (form.id) {
                await axios.put(`${API_URL}${form.id}/`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                await axios.post(API_URL, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }
            setForm({ id: null, name: '', text: '', rating: 1, avatar: null });
            fetchComments();
        } catch (err) {
            console.error('Ошибка при отправке:', err);
        }
    };

    const handleEdit = (comment) => {
        setForm({ ...comment, avatar: null });
    };


    const handleDelete = async (id) => {
        if (window.confirm('Удалить комментарий?')) {
            try {
                await axios.delete(`${API_URL}${id}/`);
                fetchComments();
            } catch (err) {
                console.error('Ошибка при удалении:', err);
            }
        }
    };

    return (
        <div class="col-lg-6" style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', margin: '0 auto' }}>
            <div class="contact-us-form">
                <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded space-y-4" id="contactForm" action="#" method="POST" data-toggle="validator" class="wow fadeInUp"
                    data-wow-delay="0.25s">
                    <h2 className="text-lg font-bold">{form.id ? 'Редактировать' : 'Оставить отзыв'}</h2>
                    <br />
                    <div className="row">
                        <div class="form-group col-md-6 mb-4">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                class="form-control" id="fname"
                                placeholder="Ваше имя"
                                required />
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                    <br />
                    <div class="form-group col-md-12 mb-4">
                        <input name="text"
                            value={form.text}
                            onChange={handleChange}
                            required
                            placeholder="Ваш отзыв" class="form-control"
                        />
                        <div class="help-block with-errors"></div>
                    </div>
                    <br />
                    <div className="flex gap-3 items-center">
                        <label>Оценка:</label>
                        {[1, 2, 3, 4, 5].map((r) => (
                            <label key={r}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={r}
                                    checked={+form.rating === r}
                                    onChange={handleChange}
                                />{' '}
                                {r}
                            </label>
                        ))}
                    </div>
                    <br />
                    <input type="file" name="avatar" onChange={handleChange} accept="image/*" />
                    <br /><br />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" style={{ background: 'black' }}
                    >
                        {form.id ? 'Сохранить' : 'Отправить'}
                    </button>
                    <br />
                </form>
            </div>
            <br />
            <div className="page-testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-xl font-bold">Отзывы</h2>
                            {/* <h2 className="text-xl font-bold">Если изменить отзывы должна из сверху изменить <br /> <span style={{ color: 'green', marginTop: '15px' }}>'Редактировать'</span></h2> */}
                            <br />
                            {comments.map((comment) => (
                                <div key={comment.id} className="col-lg-4 col-md-6">
                                    <div className="testimonial-item wow fadeInUp">
                                        <div class="client-author-image">
                                            <figure class="image-anime">
                                                {comment.avatar && (
                                                    <img
                                                        src={comment.avatar}
                                                        alt="avatar"
                                                        className="w-12 h-12 rounded-full object-cover"
                                                        style={{ width: '180px', borderRadius: '50%' }}
                                                    />
                                                )}
                                            </figure>
                                        </div>

                                        <div class="client-testimonial-rating">
                                            <ul>
                                                <span className="text-yellow-500">★{comment.rating}</span>
                                            </ul>
                                        </div>

                                        <div class="client-author-content">
                                            <div class="author-content">
                                                <h3>{comment.name}</h3>
                                                <p>{comment.text}</p>
                                            </div>

                                            <div class="client-author-logo">
                                                <img src="images/icon-testimonial-logo.svg" alt="" />
                                            </div>

                                        </div>

                                        <div className="flex-1" style={{ columnGap: '125px' }}>
                                            {comment.admin_reply && (
                                                <div className="mt-2 bg-blue-50 border-l-4 border-blue-400 p-2 text-sm">
                                                    <strong>Ответ администратора:</strong>
                                                    <br />
                                                    {comment.admin_reply}
                                                </div>
                                            )}

                                            {/* {!comment.is_approved && (
                                                <p className="text-xs text-red-600 mt-1" style={{ paddingTop: '20px' }}>⏳ Ожидает модерации</p>
                                            )} */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;