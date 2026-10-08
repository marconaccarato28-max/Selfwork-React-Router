import { useForm } from "react-hook-form";

function Login() {

const { register, handleSubmit, formState: { errors } } = useForm();

function onSubmit(data) {

console.log(data);

}

return (

<div className="max-w-md mx-auto p-8">

<h1 className="text-3xl font-bold mb-6">Login</h1>

<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

<input className="input input-bordered w-full" type="email" placeholder="Email" {...register("email", { required: "L'email è obbligatoria", maxLength: { value: 50, message: "Massimo 50 caratteri" } })} />

{errors.email && <p className="text-error">{errors.email.message}</p>}

<input className="input input-bordered w-full" type="password" placeholder="Password" {...register("password", { required: "La password è obbligatoria", maxLength: { value: 50, message: "Massimo 50 caratteri" } })} />

{errors.password && <p className="text-error">{errors.password.message}</p>}

<button className="btn btn-primary" type="submit">Accedi</button>

</form>

</div>

);

}

export default Login;