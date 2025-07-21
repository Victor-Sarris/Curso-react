function Titulo({nome, paragrafo, cor}) {
    const urlImg = "https://imgs.search.brave.com/QdvECf7Yi_8F22Au4sW37pCx60_frJZ0WgqYy1hN9qk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL3N0YXIt/bGFiL2Jsb2cvT0dz/L3JlYWN0LnBuZw";
    return (
        <div>
            <h1 style={{color: cor }}>Oi eu sou um título {nome ? nome: "Fulano"}</h1>
            {paragrafo ? 
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsum assumenda aspernatur animi aut debitis, perspiciatis suscipit mollitia magni commodi ab fuga similique maiores delectus culpa porro, obcaecati recusandae rem!</p>
                :
                <p>Nada</p>
            }
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ratione, corrupti magnam ullam illum aut unde cumque ipsam tenetur nisi velit eius sit neque! Sapiente saepe optio inventore aperiam? Totam.</p>
        </div>
    )
}

export default Titulo