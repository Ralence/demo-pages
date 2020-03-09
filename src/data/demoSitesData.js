import des_city from "../assets/dsd_city.png";
import dus_tour from "../assets/dsd_tour.png";
import livisi from "../assets/livisi.png";
import canon from "../assets/canon.png";
import fortuna from "../assets/fortuna.png";
import wund from "../assets/wunderlich.png";
import abiagenten from "../assets/abiagenten.png";
import alliance from "../assets/alliance.png";
import mues from "../assets/mues-tec.png";
import arvato from "../assets/arvato.png";
import cnrexpo from "../assets/cnrexpo.png";
import ebebek from "../assets/ebebek.png";
import alberto from "../assets/alberto.png";
import i_do_app from "../assets/i-do.png";
import klafs from "../assets/klafs.png";
import migros from "../assets/migros.png";
import dela from "../assets/dela.png";
import r2s from "../assets/r2s.png";
import s1Corp from "../assets/s1Corp.png";
import vodafone_de from "../assets/vodafone_de.png";
import expocheck from "../assets/expocheck.png";
import hibboux from "../assets/hibboux.png";
import neuhaus from "../assets/neuhaus.png";

class demo {
  constructor(title, img, url) {
    this.title = title;
    this.img = img;
    this.url = url;
  }
}

const demos = [
  new demo("Düsseldorf", des_city, "https://plugins.gigaaa.com/duesseldorf-de/"),
  new demo("Duesseldorf Tourismus", dus_tour, "https://plugins.gigaaa.com/duesseldorf-tourismus/"),
  new demo("Livisi", livisi, "https://plugins.gigaaa.com/livisi"),
  new demo("Canon", canon, "https://plugins.gigaaa.com/canon"),
  new demo("Fortuna FC", fortuna, "https://plugins.gigaaa.com/fortuna"),
  new demo("Wunderlich", wund, "https://plugins.gigaaa.com/wunderlich"),
  new demo("Abiagenten", abiagenten, "https://plugins.gigaaa.com/abiagenten-de"),
  new demo("Allianceapi", alliance, "https://plugins.gigaaa.com/allianceapi"),
  new demo("Mues-tec", mues, "https://plugins.gigaaa.com/mues-tec/"),
  new demo("Arvato", arvato, "https://plugins.gigaaa.com/arvato/"),
  new demo("CNRexpo", cnrexpo, "https://plugins.gigaaa.com/cnrexpo/"),
  new demo("ebebek", ebebek, "https://plugins.gigaaa.com/ebebek/"),
  new demo("Alberto", alberto, "https://plugins.gigaaa.com/alberto-pants/"),
  new demo("I-do App", i_do_app, "https://plugins.gigaaa.com/i-do-app/"),
  new demo("Klafs", klafs, "https://plugins.gigaaa.com/klafs/"),
  new demo("Migros", migros, "https://plugins.gigaaa.com/migros/"),
  new demo("DELA", dela, "https://plugins.gigaaa.com/dela/"),
  new demo("r2slogistics", r2s, "https://plugins.gigaaa.com/r2slogistics/"),
  new demo("S-1 corporation", s1Corp, "https://plugins.gigaaa.com/S-1_corporation/"),
  new demo("Vodafone", vodafone_de, "https://plugins.gigaaa.com/vodafone_de/"),
  new demo("Expocheck", expocheck, "https://plugins.gigaaa.com/expocheck/"),
  new demo("Hibboux", hibboux, "https://plugins.gigaaa.com/hibboux/"),
  new demo("Paul-Neuhaus", neuhaus, "https://plugins.gigaaa.com/paul-neuhaus/")
];

export default demos;
