import { Tyype } from "./type.model";

export class Vetement {
idVetement? : number;
nomVetement? : string;
prixVetement? : number;
taille? : string;
couleur? : string;
dateCreation? : Date ;
type!:Tyype;
}
