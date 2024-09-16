import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div class="landing">
        <div className="Opis">
          <div className="Grid">
            <div className="grid-1">
              <h1>Muzej vazduhoplovstva</h1>
            </div>
            <div className="grid-2">
              O nama Muzej vazduhoplovstva u Beogradu je osnovan sa željom da se
              sačuvaju materijalna svedočenja značajna za nastanak i razvoj
              vazduhoplovstva na našim prostorima. Reč je o ustanovi koja se u
              proteklim decenijama, po kvalitetu i kvantitetu svojih zbirki,
              svrstala među vodeće institucije ove vrste u svetu. Nakon
              završetka Prvog svetskog rata, u novostvorenoj državi, raste svest
              o potrebi očuvanja letelica i formiranja vazduhoplovne zbirke.
              Jedan od prvih eksponata, prikazan na prvoj vazduhoplovnoj izložbi
              organizovanoj u Beogradu 1925. godine, bio je monoplan Blerio XI,
              zarobljen na aerodromu u Mostaru 1918. godine. Ovaj avion će
              zauzeti počasno mesto i na Prvoj međunarodnoj izložbi, održanoj u
              Beogradu 1938. godine u paviljonu jugoslovenskog vazduhoplovstva
              na lokaciji starog sajmišta.
              <button className="btn">Saznaj više</button>
            </div>
            <div className="grid-3">
              <h3>Zakažite svoju posetu</h3>
              <br></br>

              <input
                type="text"
                placeholder="Ime"
                className="inputi-zakazivanje"
              ></input>
              <br></br>
              <input
                type="text"
                placeholder="prezime"
                className="inputi-zakazivanje"
              ></input>
              <br></br>
              <input
                type="email"
                placeholder="email"
                className="inputi-zakazivanje"
              ></input>
              <br></br>
              <input
                type="text"
                placeholder="broj telefona"
                className="inputi-zakazivanje"
              ></input>
              <button className="btn">Zakažite</button>
            </div>
          </div>
        </div>
        <div class="container">
          <a href="Galerija.html" name="Galerija" className="link-slika">
            <div className="Slika1" link="#">
              <div className="Tekst_unutar_slike">Galerija</div>
            </div>
          </a>
          <a href="Kolekcija.html" name="Kolekcija" className="link-slika">
            <div className="Slika2">
              <div className="Tekst_unutar_slike">Kolekcija</div>
            </div>
          </a>
          <a href="O_nama.html" name="O_nama" className="link-slika">
            <div className="Slika3">
              <div className="Tekst_unutar_slike">O nama</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default Landing;
