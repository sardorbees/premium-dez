// ✅ ReactJS component for phone verification with Eskiz auto token
// Assumes axios instance in src/api.js with baseURL and auth headers when needed

import React, { useState } from "react";
import API from "../api";

export default function PhoneVerify() {
    const [step, setStep] = useState("enter");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);

    // Send code to phone
    const handleSend = async () => {
        if (!phone.match(/^998\d{9}$/)) {
            alert("Введите номер в формате 998xxxxxxxxx");
            return;
        }
        setLoading(true);
        try {
            await API.post("api/call_phone/send-sms-code/", { phone });
            setStep("verify");
            alert("Код отправлен 📲");
        } catch (err) {
            alert(err.response?.data?.error || "Ошибка отправки");
        } finally {
            setLoading(false);
        }
    };

    // Verify code
    const handleVerify = async () => {
        if (code.length !== 4) {
            alert("Код должен быть 4‑х значным");
            return;
        }
        setLoading(true);
        try {
            await API.post("api/call_phone/verify-sms-code/", { phone, code });
            alert("✅ Номер подтверждён");
            setStep("done");
        } catch (err) {
            alert(err.response?.data?.error || "Неверный код");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
            {step === "enter" && (
                <>
                    <h3>Подтверждение телефона</h3>
                    <br /><br />
                    <input
                        placeholder="998901234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <br /><br /><br />
                    <button onClick={handleSend} disabled={loading}>
                        {loading ? "Отправка..." : "Отправить код"}
                    </button>
                    <br /><br />
                </>
            )}

            {step === "verify" && (
                <>
                    <br />
                    <h3>Введите код из SMS</h3>
                    <input
                        placeholder="XXXX"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <br /><br />
                    <button onClick={handleVerify} disabled={loading}>
                        {loading ? "Проверка..." : "Подтвердить"}
                    </button>
                </>
            )}

            {step === "done" && <h3>Спасибо! Телефон подтверждён ✅</h3>}
        </div>
    );
}
