import React from "react";
import Container from "react-bootstrap/esm/Container";

const HomeAbout = () => {
  return (
    <Container>
      <h1 className='text-center'>CineMille</h1>
      <div className=' py-5'>
        <p>
          Benvenuti alla nostra multisala cinema da 12 sale! La nostra multisala
          cinema non si limita solo alla visione di film!!!!
        </p>

        <p>
          Qui al
          <b> CineMille</b>, offriamo l'esperienza cinematografica definitiva.
          Con una vasta gamma di film in programma ogni giorno, c'è sempre
          qualcosa per tutti i gusti.
        </p>
        <p>
          Le nostre sale sono dotate delle ultime tecnologie audio e video,
          offrendo una qualità d'immagine e suono incredibile. Inoltre, abbiamo
          comode poltrone reclinabili per rendere la vostra esperienza
          cinematografica il più confortevole possibile.
        </p>
        <p>
          Organizziamo anche eventi speciali, come anteprime, serate tematiche e
          proiezioni in 3D.
        </p>
        <p>
          E non dimentichiamo i nostri servizi di ristorazione! Offriamo snack,
          pop-corn e bibite fresche, oltre a una vasta selezione di cibo e
          bevande per soddisfare tutti i gusti.
        </p>

        <p>
          Vieni a trovarci al <b>via Roma a Firenze (FI).</b> , dove la magia
          del cinema prende vita.
        </p>
      </div>
    </Container>
  );
};

export default HomeAbout;
