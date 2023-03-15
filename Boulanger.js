class Boulanger {
    prenom;
    fabrication;
    constructor(prenom) {
        this.prenom = prenom;
        this.fabrications = [];
        console.log(`${this.nom} est un boulanger`);
    }
    fabriquer(produit, quantite) {
        this.fabrications.push(new Fabrication(produit, quantite));
        console.log(`${this.prenom} fabrique ${quantite} ${produit.nom}`);
    }
    blian(){
        console.log(` Fabrication de ${this.prenom} :`);
        for (let fabrication of this.fabrications){
            console.log(` ${fabrication.quantite} ${fabrication.produit.nom}`);

        }
    }
}