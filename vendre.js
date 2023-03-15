vendre(produit, quantite) {
  if (produit.quantite >= quantite) {
    produit.quantite -= quantite;
    let vente = {
      produit: produit,
      quantite: quantite,
      prixCout: produit.prixCout * quantite,
      prixVente: produit.prixVente * quantite
    };
    this.ventesRealisees.push(vente);
    console.log(`${quantite} ${produit.nom}(s) ont été vendu(s) par ${this.nom}.`);
  } else {
    console.log(`Désolé, il n'y a plus de ${produit.nom} en stock.`);
  }
}
