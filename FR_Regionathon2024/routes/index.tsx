import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import ButtonCustom from "../islands/ButtonCustom.tsx";

export default function Home() {
    const count = useSignal(3);


    return (
        <div class="bg-[#86efac] py-20 w-full">
            <div class="px-4 mx-auto max-width">
                <div class="gap-y-10 mx-auto flex flex-col items-center justify-center">
                    <img class="my-6" src="/logo_Regionathon.png" width="400" alt="Logo Regionathon" />
                    <ButtonCustom label="Iniciar Sesión"/>
                </div>
            </div>
        </div>
        );
    }
