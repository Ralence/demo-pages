import logo from '../assets/logo.png';
import des_city from '../assets/dsd_city.png';
import dus_tour from '../assets/dsd_tour.png';
import livisi from '../assets/livisi.png';
import canon from '../assets/canon.png';
import fortuna from '../assets/fortuna.png';
import wund from '../assets/wunderlich.png';
import abiagenten from '../assets/abiagenten.png';
import alliance from '../assets/alliance.png';
import mues from '../assets/mues-tec.png';
import arvato from '../assets/arvato.png';

class demo {
    constructor(
        title,
        img,
        url,
    ) {
        this.title = title;
        this.img = img;
        this.url = url;
    }
}

const demos = [
    new demo('Düsseldorf', des_city, 'https://plugins.gigaaa.com/duesseldorf-de/'),
    new demo('Duesseldorf Tourismus', dus_tour, 'https://plugins.gigaaa.com/duesseldorf-tourismus/'),
    new demo('Livisi', livisi, 'https://plugins.gigaaa.com/livisi'),
    new demo('Canon', canon, 'https://plugins.gigaaa.com/canon'),
    new demo('Fortuna FC', fortuna, 'https://plugins.gigaaa.com/fortuna'),
    new demo('Wunderlich', wund, 'https://plugins.gigaaa.com/wunderlich'),
    new demo('Abiagenten', abiagenten, 'https://plugins.gigaaa.com/abiagenten-de'),
    new demo('Allianceapi', alliance, 'https://plugins.gigaaa.com/allianceapi'),
    new demo('Mues-tec', mues, 'https://plugins.gigaaa.com/mues-tec/'),
    new demo('Arvato', arvato, 'https://plugins.gigaaa.com/arvato/'),
];

export default demos;