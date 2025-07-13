import React, { useEffect, useState } from "react";
import API from "../api";
import "../assents/css/chat.css";

export default function Address() {
    const [address, setAddress] = useState(null);
    const [form, setForm] = useState({
        street: "",
        city: "",
        country: "",
    });
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        API.get("api/accounts/addresses/")
            .then((res) => {
                if (res.data.length > 0) {
                    const { street, city, country } = res.data[0];
                    setAddress(res.data[0]);
                    setForm({ street, city, country });
                }
            })
            .catch((err) => {
                console.error("Ошибка загрузки адреса", err);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            let res;
            if (address) {
                res = await API.put(`api/accounts/addresses/${address.id}/`, form);
            } else {
                res = await API.post("api/accounts/addresses/", form);
            }

            setAddress(res.data);
            setForm(res.data);
            setEditing(false);
            alert("✅ Адрес успешно сохранён");
        } catch (err) {
            console.error("Ошибка при сохранении адреса:", err.response?.data || err.message);
            setError(err.response?.data || "Неизвестная ошибка");
        }
    };

    const handleAddNew = () => {
        setForm({ street: "", city: "", country: "" });
        setEditing(true);
    };

    if (!address && !editing) {
        return (
            <div>
                <h3>Адрес не добавлен</h3>
                <button onClick={handleAddNew} className="btn-default">➕ Добавить адрес</button>
            </div>
        );
    }

    return (
        <div>
            {editing ? (
                <form onSubmit={handleSave}>
                    <h3>Ваш адрес</h3>
                    <br />
                    <label>Улица</label>
                    <br /><br />
                    <input
                        type="text"
                        name="street"
                        value={form.street}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                    <br />
                    <label>Город</label>
                    <br /><br />
                    <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                    <br />
                    <label>Страна</label>
                    <br /><br />
                    <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />

                    <br />
                    <button type="submit" className="btn-default">Сохранить</button>
                    <button type="button" onClick={() => setEditing(false)} className="btn-default">Отмена</button>

                    {error && (
                        <div style={{ color: "red", marginTop: "10px" }}>
                            <strong>Ошибка:</strong>{" "}
                            {typeof error === "string" ? error : JSON.stringify(error)}
                        </div>
                    )}
                </form>
            ) : (
                <div>
                    <h3>Ваш адрес</h3>
                    <div className="row"><strong>Улица:</strong> {address.street}</div>
                    <div className="row"><strong>Город:</strong> {address.city}</div>
                    <div className="row"><strong>Страна:</strong> {address.country}</div>
                    <br />
                    <button onClick={() => setEditing(true)} className="btn-default">✏️ Изменить адрес</button>
                </div>
            )}
        </div>
    );
}