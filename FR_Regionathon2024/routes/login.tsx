import { Handlers } from "$fresh/server.ts";
import {dataTest1} from "../test/dataTest.ts";

export const handler: Handlers = {
    async POST(req, ctx) {
        const form = await req.formData();
        dataTest1.email = form.get("Email")?.toString() || "";
        dataTest1.password = form.get("Password")?.toString() || "";
        const destination_port = new URL(req.url).port as unknown as number|| 0;
        dataTest1.destination_port =  destination_port as number;
        dataTest1.fwd_header_length = JSON.stringify([...req.headers]).length;

        const webhookUrl = "http://localhost:8000/login";
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ dataTest: dataTest1 }),
        });

        console.log(dataTest1);

        const headers = new Headers();
        if (!response.ok) {
            console.error(`Error al enviar el contenido: ${response.statusText}`);
            headers.set("location", "/fail");
            return new Response("Error al enviar al webhook :(", { status: 500 , headers});
        }

        headers.set("location", "/index");
        return new Response("Formulario enviado con éxito :D", { status: 200 , headers});

    },
};



export default function login() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="relative">
                <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r
                    from-[#af40ff] via-[#5b42f3] to-[#00ddeb] shadow-lg animate-pulse"></div>
                <div
                    id="form-container"
                    className="bg-white p-8 md:py-14 md:p-12 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out">
                    <h2 id="form-title" className="text-center text-3xl font-bold mb-8 md:mb-10 text-gray-800">
                        Acceder al Sistema
                    </h2>
                    <form className="space-y-5" method="POST">
                        <input
                            className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                            placeholder="Email"
                            id="Email"
                            name="Email"
                            type="text"
                            required
                        />
                        <input
                            className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                            placeholder="Contraseña"
                            id="Password"
                            name="Password"
                            type="password"
                            required
                        />
                        <button
                            className="w-full h-12 bg-[rgb(5,6,45)] hover:bg-gradient-to-r hover:from-[#af40ff]
                            hover:via-[#5b42f3] hover:to-[#00ddeb] text-white font-bold py-2 px-4 rounded focus:outline-none
                            focus:shadow-outline">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}