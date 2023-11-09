import { NavLink } from "react-router-dom";

const RegisterPage = () => {
    return(
        <section className="w-full h-screen flex">
            <div className="w-1/2 bg-blue-700 flex items-center justify-center">
                <h1 className="font-bold text-5xl text-white">TuGestion</h1>
            </div>
            <div className="flex justify-center items-center ml-10">
                <form className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl uppercase">Registro</h2>
                    <label className="text-slate-600 uppercase text-xs">Email</label>
                    <input type="text" className="block border-2 border-black"/>
                    <label className="text-slate-600 uppercase text-xs">Password</label>
                    <input type="text" className="block border-2 border-black"/>
                    <p className="text-xs">¿Tenes cuenta? 
                    <NavLink to={'/auth/login'}>
                        <span className="font-bold">Inicia sesión</span>
                    </NavLink>
                    </p>
                    <button className="p-1 font-bold uppercase bg-black text-white">enviar</button>
                </form>
            </div>
        </section>
    )
}

export default RegisterPage;