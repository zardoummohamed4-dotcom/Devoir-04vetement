import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { ActivatedRoute,Router } from '@angular/router';
import { VetementService } from '../services/vetement.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-update-vetement',
standalone: true,
imports: [FormsModule, CommonModule],
templateUrl: './update-vetement.html',
styles: ``
})
export class UpdateVetementComponent implements OnInit {
currentVetement = new Vetement();
constructor(private activatedRoute: ActivatedRoute,
private router :Router,
private vetementService: VetementService) { 
  
}
ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.currentVetement =
this.vetementService.consulterVetement(this.activatedRoute.snapshot.
params['id']);
console.log(this.currentVetement);
}


updateVetement()
{ //console.log(this.currentVetement);
this.vetementService.updateVetement(this.currentVetement);
this.router.navigate(['vetements']);
}
}