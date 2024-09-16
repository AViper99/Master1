import React, { Component } from "react";
import { Link } from "react-router-dom";

class Novosti extends Component {
  render() {
    return (
      <div className="novosti">
        <div className="novosti_grid">
          <div className="novost1">
            <div className="novost_slika1"></div>
            <h3>Obnova muzeja </h3>
            <div className="novost_tekst">
              Negovanju nasleđa i tradicije posvećuje se velika pažnja u svim
              zemljama sveta. Muzeji, kao ustanove koje čuvaju baštinu, visoko
              su vrednovani i zauzimaju posebno mesto u životu jednog naroda.
              Svakoj oblasti postojanja i delovanja društva posvećen je jedan
              muzej. Čuvanje vazduhoplovne tradicije srpskog i jugoslovenskog
              vazduhoplovstva, duge više od jednog veka, povereno je Muzeja
              vazduhoplovstva u Beogradu.{" "}
            </div>
          </div>
          <div className="novost2">
            <div className="novost_slika2"></div>
            <h3>Aeromiting: Zastava 2024</h3>
            <div className="novost_tekst">
              Povodom proslave praznika Dana srpskog jedinstva, slobode i
              nacionale zastave Ministarstvo odbrane i Vojska Srbije organizuju
              prikaz sposobnosti Vojske Srbije "Zastava 2024", prvobitno je
              trebalo da bude održan u nedelju ali je odložen za petak.Prikaz
              poznatih ali i novih borbenih sredstava i oružja Vojske Srbije
              biće otvoren za sve građane.Zbog lošeg vremena miting je odložen
              za sledeći petak na istom mestu
            </div>
          </div>
          <div className="novost3">
            <div className="novost_slika3"></div>
            <h3>Poseta delegacije Ministarstva odbrane</h3>
            <div className="novost_tekst">
              Delegacija Ministarstva odbrane, koju je predvodio vršilac
              dužnosti pomoćnika ministra za ljudske resurse Siniša Radović,
              boravila je u zvaničnoj poseti Republici Mađarskoj sa ciljem
              unapređenja muzejske delatnosti Ministarstva odbrane Srbije.U
              delegaciji je bila predstavnica Muzeja vazduhoplovstva, viši
              kustos Mirjana Novaković Munišević, načelnik Odeljenja za muzejsku
              delatnost. Cilj posete bio je osvrt na organizaciju rada i
              funkcionisanje Muzeja vojne istorije i vojnoistorijskog instituta
              u Budimpešti koji svoju delatnost obavlja u okviru Ministarstva
              odbrane Mađarske.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Novosti;
