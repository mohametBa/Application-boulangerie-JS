class patissier extends Boulanger {
    constructor(prenom){
        super(prenom);
        console.log(`${this.prenom} est aussi un patissier`);
}
fabriquer(produit,quantite){
    this.fabrications.push(new fabrication(produit, quantite));
    console.log(`En ${produit instanceof Patisserie ? "patisserie": "boulangerie"}, ${this.prenom} fabrique ${quantite} ${produit.nom}`);
}
}