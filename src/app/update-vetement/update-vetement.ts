import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { ActivatedRoute,Router } from '@angular/router';
import { VetementService } from '../services/vetement.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tyype } from '../model/type.model';
@Component({
selector: 'app-update-vetement',
standalone: true,
imports: [FormsModule, CommonModule],
templateUrl: './update-vetement.html',
styles: ``
})
export class UpdateVetementComponent implements OnInit {

    types!: Tyype[];
    updatedTypeId!: number;
currentVetement = new Vetement();
constructor(private activatedRoute: ActivatedRoute,
private router :Router,
private vetementService: VetementService) { 
  
}
  ngOnInit() {
    this.types = this.vetementService.listeTypes();
    this.currentVetement =
      this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id']);
    this.updatedTypeId = this.currentVetement.type.idType;   
  }

  updateVetement() {
    this.currentVetement.type =
      this.vetementService.consulterType(this.updatedTypeId);  
    this.vetementService.updateVetement(this.currentVetement);
    this.router.navigate(['vetements']);
  }
}