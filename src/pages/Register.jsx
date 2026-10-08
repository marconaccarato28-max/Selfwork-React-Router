import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { useUser } from "../context/UserContext.jsx";

function Register() {

const { register, handleSubmit, formState: { errors } } = useForm();

const { register: registerUser } = useUser();

const navigate = useNavigate();

function onSubmit(data) {

registerUser(data);

navigate("/");

}

return (

<div className="max-w-md mx-auto p-8">

<h1 className="text-3xl font-bold mb-6">Registrazione</h1>

<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

<input className="input input-bordered w-full" placeholder="Nome" {...register("name", { required: "Il nome è obbligatorio", maxLength: { value: 50, message: "Massimo 50 caratteri" } })} />

{errors.name && <p className="text-error">{errors.name.message}</p>}

<input className="input input-bordered w-full" type="email" placeholder="Email" {...register("email", { required: "L'email è obbligatoria", maxLength: { value: 50, message: "Massimo 50 caratteri" } })} />

{errors.email && <p className="text-error">{errors.email.message}</p>}

<input className="input input-bordered w-full" type="password" placeholder="Password" {...register("password", { required: "La password è obbligatoria", maxLength: { value: 50, message: "Massimo 50 caratteri" } })} />

{errors.password && <p className="text-error">{errors.password.message}</p>}

<button className="btn btn-primary" type="submit">Registrati</button>

</form>

</div>

);

}

export default Register;