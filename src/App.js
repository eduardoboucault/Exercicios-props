import React from "react";
import { CardVideo } from "./components/CardVideo";
import "./styles.css";
export default function App() {
  const tituloVideo = "Título Vídeo";
  const imagemVideo = "https://picsum.photos/400/400?a=1";
  function reproduzVideo() {
    alert("Video está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo
              titulo={tituloVideo}
              imagem={imagemVideo}
              funcao={reproduzVideo}
            />
            <CardVideo
              titulo={tituloVideo}
              imagem={imagemVideo}
              funcao={reproduzVideo}
            />
            <CardVideo
              titulo={tituloVideo}
              imagem={imagemVideo}
              funcao={reproduzVideo}
            />
            <CardVideo
              titulo={tituloVideo}
              imagem={imagemVideo}
              funcao={reproduzVideo}
            />
            <CardVideo
              titulo={tituloVideo}
              imagem={imagemVideo}
              funcao={reproduzVideo}
            />
            <CardVideo
              titulo={tituloVideo}
              imagem={imagemVideo}
              funcao={reproduzVideo}
            />
            <CardVideo
              titulo={tituloVideo}
              imagem={imagemVideo}
              funcao={reproduzVideo}
            />
            <CardVideo
              titulo={tituloVideo}
              imagem={imagemVideo}
              funcao={reproduzVideo}
            />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
