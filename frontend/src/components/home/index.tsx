import { FormEvent, useState } from "react";
import { ExecuteCommmand } from "../../../wailsjs/go/main/App"

export default function HomeComponent() {
    const [comando, setComando] = useState("")
    const [caminho, setCaminho] = useState("C:/Users/")
    const [result, setResult] = useState("")

    const HandleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const res = await ExecuteCommmand(comando, caminho)
        setResult(res)
        setComando("")
    }

    return (
        <div
            className="  flex flex-col font-mono px-4 py-4 gap-4"
        >
            <div className="flex-1 text-gray-400 italic">
                C:\Users\
            </div>
            <p className="text-white">{result}</p>
            <form
                className="flex items-center gap-2"
                onSubmit={HandleSubmit}
            >
                <span className="text-green-400 select-none italic">$</span>
                <input
                    value={comando}
                    onChange={(e) => setComando(e.target.value)}
                    className="bg-transparent outline-none border-none  text-neutral-200 font-mono text-base focus:ring-0 focus:outline-none"
                />
            </form>
        </div>
    );
}

