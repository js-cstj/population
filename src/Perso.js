import App from "./App.js";
export default class Perso {
    constructor(id, x = 0, y = 0, direction = null) {
        this.id = id;
        if (this.id === null) {
            this.id = App.piger(Perso.persos);
        }
        this.direction = direction;
        if (this.direction === null) {
            this.direction = Math.floor(Math.random() * 4);
        }
        this.x = x;
        this.y = y;
        this.dom = null;
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
		//perso.style.backgroundPositionY = Math.floor(Math.random() * 2) * -1 + "em";
		var citation = App.piger(App.citations);
		perso.appendChild(this.html_bulle(citation));
        perso.obj = this;
        this.dom = perso;
        var directions = [{x:0, y:-5},{x:5, y:0},{x:0, y:5},{x:-5, y:0}];
        this.timeoutDirection = 0;
        window.setInterval(() => {
            if (perso.style.backgroundPositionY === "0em") {
                perso.style.backgroundPositionY = "-1em";
            } else {
                perso.style.backgroundPositionY = "0em";
            }
            this.x += directions[this.direction].x;
            this.y += directions[this.direction].y;
            perso.style.left = this.x + "px";
            perso.style.top = this.y + "px";
            if (new Date().getTime() > this.timeoutDirection) {
                this.direction = Math.floor(Math.random() * 4);
                perso.style.backgroundPositionX = this.direction * -1 + "em";
                this.timeoutDirection = new Date().getTime() + Math.floor(Math.random() * 2000);
            }
        }, Math.floor(Math.random() * 200) + 100);
		return perso;
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