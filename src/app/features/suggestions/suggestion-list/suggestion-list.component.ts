import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent {
  suggestions: Suggestion[] = [
    { id: 1, title: 'Exemple 1', description: 'Desc 1', category: 'Cat', date: new Date(), status: 'en_attente', nbLikes: 0 },
    { id: 2, title: 'Exemple 2', description: 'Desc 2', category: 'Cat', date: new Date(), status: 'acceptee', nbLikes: 2 }
  ];
}
