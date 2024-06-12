import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-emma.png")}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de software en Spotify</p>
        <p className="texto-testimonio">
          Siempre he tenido problemas para aprender y cuando tome este curso me
          ssenti lo suficienmente capaz de afrntar los retos que la profecion
          demandaba, por eso yo confio en codespam en mejor instituto de
          computacion.
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
