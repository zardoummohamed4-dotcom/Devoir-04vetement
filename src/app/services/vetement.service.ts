import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';

@Injectable({
  providedIn: 'root'
})
export class VetementService {
  vetements : Vetement[]; //un tableau de Vetement
  vetement! : Vetement;
  constructor() {
    this.vetements = [
      { idVetement : 1,  nomVetement : "T-shirt Nike", prixVetement : 80,  taille : "M",  couleur : "Noir",  dateCreation : new Date("01/14/2024")},
{ idVetement : 2,  nomVetement : "Jean Adidas",  prixVetement : 150, taille : "L",  couleur : "Bleu",  dateCreation : new Date("12/17/2023")},
{ idVetement : 3,  nomVetement : "Veste Zara",   prixVetement : 220, taille : "XL", couleur : "Rouge", dateCreation : new Date("02/20/2024")}
    ];
   }

    listeVetements():Vetement[] {
      return this.vetements;
    }

    ajouterVetement( prod: Vetement){
      this.vetements.push(prod);
    }
  supprimerVetement(prod: Vetement) {
    //supprimer le vetement prod du tableau vetements
    const index = this.vetements.indexOf(prod, 0);
    if (index > -1) {
      this.vetements.splice(index, 1);
    }
    //ou Bien
    /* this.vetements.forEach((cur, index) => {
    if(prod.idVetement === cur.idVetement) {
    this.vetements.splice(index, 1);
    }
    }); */
  }
  consulterVetement(id:number): Vetement{
    return this.vetement = this.vetements.find(p => p.idVetement == id)!;
        
    }

  updateVetement(prod: Vetement) {
    //chercher le vetement prod du tableau vetements
    const index = this.vetements.indexOf(prod, 0);
    if (index > -1) {
      this.vetements.splice(index, 1); //supprimer l'ancien éléments
      this.vetements.splice(index, 0, prod); // insérer le nouvel élément

    }
}

  }