"use strict";
let laGrandeBoulangerie = new Boulangerie("La Grande Boulangerie");
let bernard = new Boulanger("Bernard");
let paul = new Patissier("Paul");
let violaine = new Vendeuse("Violaine");
let virginie = new Vendeuse("Virginie");
let baguette = new Produit("baguette", 0.10, 1.20);
let croissant = new Produit("croissant", 0.15, 1.50);
let painDeMie = new Produit("pain de mie", 0.40, 4.50);
let charlotte = new Patisserie("charlotte", 4.00, 40.00, true);
laGrandeBoulangerie.embaucher(virginie);
laGrandeBoulangerie.embaucher(bernard);
laGrandeBoulangerie.embaucher(violaine);
laGrandeBoulangerie.embaucher(paul);
bernard.fabriquer(baguette, 80);
bernard.fabriquer(croissant, 60);
bernard.fabriquer(painDeMie, 20);
paul.fabriquer(croissant, 20);
paul.fabriquer(charlotte, 5);
violaine.vendre(baguette, 75);
violaine.vendre(croissant, 70);
virginie.vendre(painDeMie, 20);
virginie.vendre(charlotte, 4);
laGrandeBoulangerie.bilan();