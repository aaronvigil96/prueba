import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

const HomePage = () => {
    return(
        <section className="grid grid-cols-6 h-screen w-full">
            <header className="bg-blue-700 text-white flex flex-col justify-between p-5">
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="font-bold text-xl">TuGestion</h1>
                        <p className="p-2">Administra todos tus pedidos</p>
                    </div>
                    <Profile/>
                </div>
                <NavBar/>
                <div className="flex justify-center">
                    <button className="p-2 font-bold uppercase bg-black text-white">Logout</button>
                </div>
            </header>
            <main className="col-span-5 bg-slate-200 m-5 rounded-lg p-2">
                <Outlet/>
            </main>
        </section>
    )
}

export default HomePage;