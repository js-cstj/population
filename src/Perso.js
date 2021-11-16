import App from "./App.js";
export default class Perso {
    constructor(id, x = 0, y = 0, angle = null, vitesse = null) {
        this.fuite = false;
        this.id = id;
        if (this.id === null) {
            this.id = App.piger(Perso.persos);
        }
        this.angle = angle;
        if (this.angle === null) {
            this.angle = Math.floor(Math.random() * 360);
        }
        this.vitesse = vitesse;
        if (this.vitesse === null) {
            this.vitesse = Math.floor(Math.random() * 10 + 10);
        }
        this.x = x;
        this.y = y;
        this.dom = null;
    }
    get direction() {
        if (this.angle < 45 || this.angle >= 315) {
            return 1;
        }
        if (this.angle >= 45 && this.angle < 135) {
            return 2;
        }
        if (this.angle >= 135 && this.angle < 225) {
            return 3;
        }
        if (this.angle >= 225 && this.angle < 315) {
            return 0;
        }
    }
    get html() {
        if (this.dom) {
            return this.dom;
        }
		var perso = document.createElement("div");
		perso.classList.add("perso");
		perso.style.left = this.x + "px";
		perso.style.top = this.y + "px";
		perso.style.backgroundImage = "url(images/last-guardian-sprites/" + this.id + ".png)";
        perso.style.backgroundPositionX = this.direction * -1 + "em";
		var citation = App.piger(App.citations);
		perso.appendChild(this.html_bulle(citation));
        perso.obj = this;
        this.dom = perso;
        this.timeoutDirection = 0;
        window.setInterval(() => {
            if (this.fuite) {
                this.angle = ((Math.atan2(this.y - App.souris.y, this.x - App.souris.x)/Math.PI*180)+360)%360;
            }
            if (this.attrait) {
                this.angle = ((Math.atan2(App.souris.y - this.y, App.souris.x - this.x)/Math.PI*180)+360)%360;
            }
            this.deplacer();
            if (new Date().getTime() > this.timeoutDirection) {
                this.angle = Math.floor(Math.random() * 360);
                this.timeoutDirection = new Date().getTime() + Math.floor(Math.random() * 2000);
            }
        }, 200);
        perso.addEventListener("mousemove", e => {
            if (e.ctrlKey) {
                this.fuire();
            }
            if (e.altKey) {
                this.attirer();
            }
        });
		return perso;
    }
    fuire() {
        this.fuite = true;
        this.attrait = false;
        this.dom.style.boxShadow = "0 0 1em rgba(255,255,0,.5)"
        window.setTimeout(() => {
            this.fuite = false;
            this.dom.style.removeProperty("box-shadow");
        }, Math.floor(Math.random() *5000)+3000);
    }
    attirer() {
        this.fuite = false;
        this.attrait = true;
        this.dom.style.boxShadow = "0 0 1em rgba(255,0,0,.5)"
        window.setTimeout(() => {
            this.attrait = false;
            this.dom.style.removeProperty("box-shadow");
        }, Math.floor(Math.random() *5000)+3000);
    }
    deplacer() {
        if (this.dom.style.backgroundPositionY === "0em") {
            this.dom.style.backgroundPositionY = "-1em";
        } else {
            this.dom.style.backgroundPositionY = "0em";
        }
        this.dom.style.backgroundPositionX = this.direction * -1 + "em";
        this.x += Math.cos(this.angle * Math.PI / 180) * this.vitesse;
        this.y += Math.sin(this.angle * Math.PI / 180) * this.vitesse;
        this.dom.style.left = this.x + "px";
        this.dom.style.top = this.y + "px";   
    }
    html_bulle(citation) {
		var bulle = document.createElement("div");
		bulle.classList.add("bulle");
		bulle.innerHTML = citation;
		return bulle;
	}
    static init() {
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
    }
}
Perso.init();