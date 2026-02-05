import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component'; // <--- importer ton 404

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirection par défaut
  { path: 'home', component: HomeComponent },
  {
    path: 'suggestions',
    loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
  },
  { path: '**', component: NotfoundComponent } // <--- gérer toutes les URLs inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // <--- optionnel pour Vite
  exports: [RouterModule]
})
export class AppRoutingModule {}
