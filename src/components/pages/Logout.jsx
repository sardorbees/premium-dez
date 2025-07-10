import axios from 'axios'

export default function Logout({ setUser }) {
    const handleLogout = async () => {
        await axios.post('http://127.0.0.1:8000/api/accounts/logout/', {
            refresh: localStorage.getItem('refresh')
        }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('access')}` }
        })
        localStorage.clear()
        setUser(null)
    }

    return <button onClick={handleLogout}>Logout</button>
}
