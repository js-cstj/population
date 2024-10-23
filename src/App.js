export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		// Récupérer les données des citations
		// Récupérer les données des personnages
		// Placer tous les personnages sur la page avec une citation aléatoire
		// Quand on clique sur le personnage, 
		//     afficher une bulle avec la citation pendant une certain temps (3 secondes),
		//     puis la cacher
		//     puis le personnage change de position.

	}
	
	/**
	 * Génère des coordonnées aléatoires à l'intérieur d'une zone spécifiée.
	 *
	 * @param {HTMLElement} zone - L'élément HTML représentant la zone dans laquelle générer les coordonnées.
	 * @returns {Object} Un objet contenant les coordonnées aléatoires générées.
	 * @returns {number} x - La coordonnée x aléatoire.
	 * @returns {number} y - La coordonnée y aléatoire.
	 */
	static coordsAlea(zone) {
		let w = zone.clientWidth;
		let h = zone.clientHeight;
		return {
			x: Math.floor(Math.random() * w),
			y: Math.floor(Math.random() * h)
		};
	}
	/**
	 * Module qui retourne un élément représentant un personnage
	 * en fonction du nom de l'image donné et de la position donnée
	 * L'orientation du personnage est aléatoire
	 * @static
	 * @param {string} nom
	 * @param {number} x
	 * @param {number} y
	 * @returns HTMLElement
	 */
	static html_Perso(nom, x, y) {
	}
	static html_bulle(texte) {
	}
}

