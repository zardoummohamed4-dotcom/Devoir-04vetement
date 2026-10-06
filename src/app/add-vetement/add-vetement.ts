import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-add-vetement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-vetement.html',
  
})
export class AddVetementComponent {

  newVetement: Vetement = new Vetement();

  message! : string;

  constructor(private vetementService: VetementService ) {}

  addVetement(){
   // console.log(this.newVetement);
   this.vetementService.ajouterVetement(this.newVetement);
   this.message = "Vetement "+this.newVetement.nomVetement +" ajouté avec succès !"
  }



}


