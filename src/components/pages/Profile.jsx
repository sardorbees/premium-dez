import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({});
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("api/accounts/profile/")
      .then((res) => {
        setProfile(res.data);
        setForm(res.data);
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (form.first_name) formData.append("first_name", form.first_name);
    if (form.last_name) formData.append("last_name", form.last_name);
    if (form.phone_number) formData.append("phone_number", form.phone_number);
    if (form.image instanceof File) formData.append("image", form.image);

    try {
      await API.put("api/accounts/edit-profile/", formData);
      alert("✅ Профиль успешно обновлён");
      setEditing(false);
      const updated = await API.get("api/accounts/edit-profile/");
      setProfile(updated.data);
    } catch (err) {
      console.error("Ошибка обновления:", err.response?.data);
      alert("Ошибка обновления профиля");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.dispatchEvent(new Event("authChanged"));
    navigate("/login");
  };

  if (!profile) return <p>Загрузка...</p>;

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2>Ваш Профил</h2>
      <br />

      {editing ? (
        <form onSubmit={handleSave} encType="multipart/form-data">
          <input
            name="first_name"
            placeholder="Имя"
            value={form.first_name || ""}
            onChange={handleChange}
            style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required
          />
          <br /><br />
          <input
            name="last_name"
            placeholder="Фамилия"
            value={form.last_name || ""}
            onChange={handleChange}
            style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required
          />
          <br /><br />
          <input
            name="phone_number"
            placeholder="Телефон"
            value={form.phone_number || ""}
            onChange={handleChange}
            style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required
          />
          <br /><br /><br />
          <input name="image" type="file" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required />
          <br /><br /><br />
          <button type="submit" class="btn-default">💾 Сохранить</button>
          <br /><br />
          <button type="button" onClick={() => setEditing(false)} class="btn-default">
            ❌ Отменить
          </button>

          <br /><br /><br />
        </form>
      ) : (
        <>
          {profile.image && (
            <img
              src={profile.image}
              alt="avatar"
              width={120}
              style={{ borderRadius: "50%" }}
            />
          )}
          <br /><br />
          <h1 className="text-anime-style-2" style={{ fontSize: '30px' }}>Имя: {profile.first_name}</h1>
          <br />
          <h1 className="text-anime-style-2" style={{ fontSize: '30px' }}>Фамилия: {profile.last_name}</h1>
          <br />
          <h1 className="text-anime-style-2" style={{ fontSize: '30px' }}>Телефон: {profile.phone_number}</h1>
          <br />
          <br />
          <button onClick={() => setEditing(true)} class="btn-default">✏️ Изменить профиль</button>
          <br /><br />
          <button onClick={handleLogout} class="btn-default">🚪 Выйти из аккаунта</button>
          <br /><br />
        </>
      )}
    </div>
  );
}
