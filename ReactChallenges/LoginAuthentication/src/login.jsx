import React, {useState} from "react";
const mockUser = {
    email: 'user@example.com',
    password: 'password@123'
};

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');




    const handleLogin = () => {
        if(email === mockUser.email && password === mockUser.password){
            setSuccess('Login Successful');
            setError('');
        } else{
            setError('Invalid email or password');
            setSuccess('');
        }
    };


    const validateForm = () => {
        if(!email || !password){
            setError('Both fields are required');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        setError('Please enter a valid email');
        return false;
        }
        return true;
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validateForm()){
            handleLogin();
        }
    };


    return (
        <div style={{maxWidth: '400px', margin: 'auto', padding:'1em'}}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1em' }}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ width: '100%', padding: '0.5em' }}
                />
                </div>
                <div style={{ marginBottom: '1em' }}>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: '100%', padding: '0.5em' }}
                />
                </div>
                <button type="submit" style={{ padding: '0.5em', width: '100%' }}>
                Login
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );

}





export default Login