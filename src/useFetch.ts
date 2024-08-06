import { useEffect, useState } from "react";

export default function useFetch<T>({ url }: { url: string }) {
    const [dados, setDados] = useState<T | null>(null);
    const [erro, setErro] = useState<string>('');

    useEffect(() => {
        fetch(`http://localhost:8080/${url}`)
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Network response was not ok');
                }
                return resposta.json();
            })
            .then(dados => setDados(dados))
            .catch(erro => setErro(erro.message));
    }, [url]);

    return { dados, erro };
}