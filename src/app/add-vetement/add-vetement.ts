import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { Router } from '@angular/router';
import { Tyype } from '../model/type.model';

@Component({
  selector: 'app-add-vetement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-vetement.html',
  
})
export class AddVetementComponent {

  newVetement: Vetement = new Vetement();
  types!: Tyype[];
  newIdType!: number;
  newType!: Tyype;
  message! : string;

  constructor(private vetementService: VetementService,private router :Router,) {}


   ngOnInit() {
     this.types = this.vetementService.listeTypes();
   }

   addVetement() {
     this.newType = this.vetementService.consulterType(this.newIdType);
     this.newVetement.type = this.newType;
     this.vetementService.ajouterVetement(this.newVetement);
     this.router.navigate(['vetements']);
   }

}


