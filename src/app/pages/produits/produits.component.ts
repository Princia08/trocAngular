import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProduitService} from "../../services/produit.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {

  constructor(private router: Router, private produitService: ProduitService) {
  }

  products : any;

  ngOnInit() {
    this.getallProducts();
  }

  seeDetails(id: string) {
    this.router.navigate(['/home/details-produit', id]);
  }

  getallProducts() {
    this.produitService.getAllProducts().subscribe({
      next: res => {
        this.products = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
