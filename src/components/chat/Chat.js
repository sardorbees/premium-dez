import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import '../assents/css/chat.css';
import logo from '../assents/logo/2.jpg' // Подключи свои стили

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);
    const [visible, setChatVisible] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(true);

    // Создаем рефы для двух аудио
    const showSound = useRef(null);
    const hideSound = useRef(null);
    const otherSound = useRef(null);

    const playAudio = (audioRef) => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };


    // Загрузка сообщений с сервера
    const fetchMessages = async () => {
        try {
            const res = await axios.get('https://backend-dedd.onrender.com/api/chat/api/chat');
            setMessages(res.data);
        } catch (error) {
            console.error('Ошибка загрузки сообщений:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
        const interval = setInterval(fetchMessages, 1000); // Обновляем каждую секунду
        return () => clearInterval(interval);
    }, []);

    // Автопрокрутка вниз при новых сообщениях
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Отправка сообщения
    const sendMessage = async () => {
        if (!input.trim()) return;
        try {
            await axios.post('https://backend-dedd.onrender.com/api/chat/api/chat', {
                message: input,
                is_bot: false,
            });
            setInput('');
            fetchMessages();
        } catch (error) {
            console.error('Ошибка отправки сообщения:', error);
        }
    };

    // Отправка по Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '25px' }}>Менеджер сайта Premium-Dez</h3>
            <audio
                ref={showSound}
                src="https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"
                preload="auto"
            />
            <audio
                ref={hideSound}
                src="https://actions.google.com/sounds/v1/cartoon/pop.ogg"
                preload="auto"
            />

            {/* Кнопка X */}
            {!buttonsVisible && (
                <button
                    onClick={() => {
                        playAudio(otherSound);
                        setButtonsVisible(true);
                    }}
                    style={{ marginBottom: '10px' }}
                >
                    X
                </button>
            )}
            <div
                style={{
                    marginBottom: '10px',
                    opacity: buttonsVisible ? 1 : 0,
                    pointerEvents: buttonsVisible ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease',
                }}
                className='siug'
            >
                <button
                    onClick={() => {
                        playAudio(showSound);
                        setChatVisible(true);
                    }}
                    className='btn-defaulte'
                    style={{ marginRight: '10px' }}
                >
                    Показать чат
                </button>
                <button
                    onClick={() => {
                        playAudio(hideSound);
                        setChatVisible(false);
                    }}
                    style={{ marginRight: '10px' }}
                    className='btn-defaulte'
                >
                    Скрыть чат
                </button>
            </div>

            <div className="chatbox" id="chat" style={{
                width: '320px',
                height: '330px',
                background: '#00aaff',
                color: 'white',
                padding: '0px',
                borderRadius: '10px',
                marginTop: '10px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(-20px)',
                pointerEvents: visible ? 'auto' : 'none',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}>
                <div className="chat-header">
                    <img src={logo} alt="avatar" className="avatar" />
                    <div>
                        <div className="title" style={{ marginBottom: '8px' }}>Менеджер сайта Premium-Dez</div>
                        <div className="subtitle">Я отвечу на ваши вопросы</div>
                    </div>
                </div>

                <div className="chat-body" style={{ height: '300px', overflowY: 'auto' }}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`msg ${msg.is_bot ? 'bot' : 'user'}`} style={{color: 'black'}}>
                            <b style={{ color: 'black' }}>{msg.user || 'Гость'}</b>: {msg.message}
                            <div style={{ fontSize: '0.7em', color: 'black' }}>
                                {new Date(msg.timestamp).toLocaleTimeString()}
                            </div>
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        style={{ outline: 'none' }}
                        placeholder="Введите сообщение"
                    />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;