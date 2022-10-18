import React from "react";

export default function InfoUsuario(props) {
  return (
    <div className="cardUsuario">
      <p>{props.nome}</p>
      <img className="fotoUsuario" src={props.imagem} alt="Imagem"></img>
    </div>
  );
}
