import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const update = () => {
      const token = localStorage.getItem("access");
      if (!token) return setUser(null);
      API.get("api/accounts/profile/")
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    };

    update(); // начальная загрузка

    // слушаем событие при login/register/edit/logout
    window.addEventListener("authChanged", update);

    return () => window.removeEventListener("authChanged", update);
  }, []);
  return (
    <nav style={{ padding: "10px" }}>
      <div>
        {user ? (
          <>
            <Link to="/profile" style={{ marginRight: "15px", display: "flex", alignItems: "center" }}>
              {user.image && (
                <img
                  src={user.image}
                  alt="avatar"
                  width="35"
                  height="35"
                  style={{ borderRadius: "50%", objectFit: "cover", marginRight: "8px" }}
                />
              )}
              <span style={{ color: 'black' }}>{user.first_name || user.username}</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" style={{ color: 'black' }}>Регистрация</Link> | <Link to="/login" style={{ color: 'black' }}>Вход</Link>
          </>
        )}
      </div>
    </nav>
  );
}
