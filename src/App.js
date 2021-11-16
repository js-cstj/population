import Perso from "./Perso.js";
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		this.delaiAjout = 100;
		this.chargerJson("src/citations.json").then(donnees => {
			App.citations = donnees;
			this.timeout = 0;
			var app = document.getElementById("app");
			app.addEventListener("mousemove", e => {
				if (e.timeStamp < this.timeout) {
					return;
				}
				if (e.shiftKey === true) {
					var perso = new Perso(null, e.clientX, e.clientY);
					app.appendChild(perso.html);
					this.timeout = e.timeStamp + Math.random() * this.delaiAjout;
				}
			});
		});
		document.getElementById("app").addEventListener("mousemove", e => {
			this.souris = e;
		});
		window.addEventListener("keydown", e => {
			if (e.key === "p") {
				var largeur = app.clientWidth;
				var hauteur = app.clientHeight;
				for (let i = 0; i < 100; i += 1) {
					var perso = new Perso(null, Math.floor(Math.random() * largeur), Math.floor(Math.random() * hauteur));
					app.appendChild(perso.html);
				}
			} else if (e.key === "f") {
				app.querySelectorAll(".perso").forEach(perso => {
					perso.obj.fuire();
				});
			} else if (e.key === "a") {
				app.querySelectorAll(".perso").forEach(perso => {
					perso.obj.attirer();
				});
			}
		});
	}
	static chargerJson(url) {
		return new Promise(resolve => {
			var xhr = new XMLHttpRequest();
			xhr.open("get", url);
			xhr.responseType = "json";
			xhr.addEventListener("load", e => {
				resolve(e.target.response); // Retourne les données
			});
			xhr.send();
		});
	}
	static piger(tableau) {
		return tableau[Math.floor(Math.random() * tableau.length)];
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

