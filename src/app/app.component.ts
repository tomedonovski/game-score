import { Component } from '@angular/core';
import { GameScoreCardComponent } from './game-score-card/game-score-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameScoreCardComponent],
  template: `<app-game-score-card></app-game-score-card>`
})
export class AppComponent {}
