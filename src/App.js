/*jslint esnext:true, browser:true*/
import citations from "./citations.js";
console.log(citations);
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		this.persos = [
			"amg2", "amg3", "amg4", "avt1", "avt2", "avt3", "avt4", "bmg1", "bmg2", "bmg3",
			"bmg4", "chr1", "dvl1", "ftr1", "ftr2", "ftr3", "ftr4", "gsd1", "isd1", "jli1",
			"kin1", "knt1", "knt2", "knt3", "knt4", "man1", "man2", "man3", "man4", "mnt1",
			"mnt2", "mnt3", "mnt4", "mnv1", "mnv2", "mnv3", "mnv4", "mst1", "mst2", "mst3",
			"mst4", "nja1", "nja2", "nja3", "nja4", "npc1", "npc2", "npc3", "npc4", "npc5",
			"npc6", "npc7", "npc8", "npc9", "pdn1", "pdn2", "pdn3", "pdn4", "scr1", "scr2",
			"scr3", "scr4", "skl1", "smr1", "smr2", "smr3", "smr4", "spd1", "syb1", "thf1",
			"thf2", "thf3", "thf4", "trk1", "wmg1", "wmg2", "wmg3", "wmg4", "wmn1", "wmn2",
			"wmn3", "wnv1", "wnv2", "wnv3", "wnv4", "ybo1", "ygr1", "zph1", "amg1",
		];
		var app = document.getElementById("app");
		console.log(this.persos, citations);
	}

	/**
	 * Méthode qui retourne le personnage nommé à la position donnée par le x et le y
	 * L'orientation du personnage est déterminé aléatoirement
	 *
	 * @static
	 * @param {string} nom	- Le nom du fichier à utiliser pour le personnage
	 * @param {number} x	- La position en x
	 * @param {number} y	- La position en y
	 * @returns {HTMLElement} - La balise (élément) du personnage
	 */
	static html_perso(nom, x, y) {

	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
