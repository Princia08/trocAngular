import { Routes } from '@angular/router';
import { LoginComponent } from './pages/authentification/login/login.component';
import {InscriptionComponent} from "./pages/authentification/inscription/inscription.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProduitsComponent} from "./pages/produits/produits.component";
import {AddProduitComponent} from "./pages/produits/add-produit/add-produit.component";
import {DetailsProduitComponent} from "./pages/produits/details-produit/details-produit.component";
import {UpdateProduitComponent} from "./pages/produits/update-produit/update-produit.component";
import {MesProduitsComponent} from "./pages/produits/mes-produits/mes-produits.component";
import {HistoriqueComponent} from "./pages/historique/historique.component";
import {homeGuard} from "./services/guard/home.guard";
import {authGuard} from "./services/guard/auth.guard";

export const routes: Routes = [
    { path : '', component : LoginComponent, canActivate: [authGuard] },
    { path : 'login', component : LoginComponent },
    { path : 'signup', component : InscriptionComponent },
    {
      path : 'home',
      component : HomeComponent,
      canActivate: [homeGuard],
      children : [
        { path : '', component : ProduitsComponent },
        { path : 'produits', component : ProduitsComponent },
        { path : 'historique', component : HistoriqueComponent },
        { path : 'mes-produits', component : MesProduitsComponent },
        { path : 'addProduit', component : AddProduitComponent },
        { path : 'login', component : LoginComponent },
        { path : 'details-produit/:id', component : DetailsProduitComponent },
        { path : 'update-produit/:id', component : UpdateProduitComponent },
      ]
    }
];
