const API = "http://localhost:5000";

export const signup = async (email, phone, password) => {
    try {
        const response = await fetch(`${API}/employee/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, phone, password })
        })
        return response.json();   
    } catch (error) {
        return console.log(error);
    }
}