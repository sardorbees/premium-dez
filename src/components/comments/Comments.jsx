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

const API_URL = 'https://backend-dedd.onrender.com/api/comment/comments/';

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
        // Автообновление каждую секунду
        const interval = setInterval(fetchComments, 1000);
        return () => clearInterval(interval);
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
            } catch (err) {
                console.error('Ошибка при удалении:', err);
            }
        }
    };

    return (
        <div className="col-lg-6" style={{ textAlign: 'center', margin: '0 auto' }}>
            <div className="contact-us-form">
                <h2 className="text-lg font-bold">{form.id ? 'Редактировать' : 'Оставить отзыв'}</h2>
                <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded space-y-4 wow fadeInUp" data-wow-delay="0.25s">
                    <div className="row">
                        <div className="form-group col-md-12 mb-4">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Ваше имя"
                                required
                                style={{ outline: 'none' }}
                            />
                        </div>
                    </div>
                    <div className="form-group col-md-12 mb-4">
                        <input
                            name="text"
                            value={form.text}
                            onChange={handleChange}
                            required
                            placeholder="Ваш отзыв"
                            className="form-control"
                        />
                    </div>
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
                    <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 mt-3">
                        {form.id ? 'Сохранить' : 'Отправить'}
                    </button>
                </form>
            </div>

            <div className="page-testimonial mt-5">
                <div className="container">
                    <h2 className="text-xl font-bold">Отзывы</h2>
                    <div className="row">
                        {comments.map((comment) => (
                            <div key={comment.id} className="col-lg-4 col-md-6">
                                <div className="testimonial-item wow fadeInUp">
                                    <div className="client-author-image">
                                        <figure className="image-anime">
                                            {comment.avatar && (
                                                <img
                                                    src={comment.avatar}
                                                    alt="avatar"
                                                    className="w-12 h-12 rounded-full object-cover"
                                                    style={{ width: '180px', borderRadius: '50%', height: '139px' }}
                                                />
                                            )}
                                        </figure>
                                    </div>
                                    <div className="client-testimonial-rating">
                                        <ul>
                                            <span className="text-yellow-500">★{comment.rating}</span>
                                        </ul>
                                    </div>
                                    <div className="client-author-content">
                                        <div className="author-content">
                                            <h3>{comment.name}</h3>
                                            <p>{comment.text}</p>
                                        </div>
                                        <div className="client-author-logo">
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
                                    </div>
                                    <div className="mt-2">
                                        <button onClick={() => handleEdit(comment)} className="btn btn-sm btn-warning mr-2">Редактировать</button>
                                        <button onClick={() => handleDelete(comment.id)} className="btn btn-sm btn-danger">Удалить</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;