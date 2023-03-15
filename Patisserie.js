class Patisserie extends produit {
    charlotte;
    constructor(nom, charlotte = true){
        super(nom);
        this.charlotte = charlotte;
        this.croissant = croissant;
        console.log(`${this.nom} est une patisserie ${this.charlotte ? " au beurre ": ''}`);

    }
}