import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");

const { register } = useUser();
const navigate = useNavigate();

function handleSubmit(e) {
e.preventDefault();

register({
name,
email,
});

navigate("/");
}

return (
<>
<h1>Registrazione</h1>

<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Nome"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<button type="submit">
Registrati
</button>
</form>
</>
);
}

export default Register;