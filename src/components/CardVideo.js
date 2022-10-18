import React from "react";
import InfoUsuario from "./InfoUsuario";

export function CardVideo(props) {
  const imagemUsuario = "https://picsum.photos/id/1005/367/267";

  const nomeUsuario = "Usuário";
  return (
    <div>
      <div className="box-pagina-principal" onClick={props.funcao}>
        <img src={props.imagem} alt="Imagem" />
        <h4>{props.titulo}</h4>
        <InfoUsuario nome={nomeUsuario} imagem={imagemUsuario} />
      </div>
    </div>
  );
}
