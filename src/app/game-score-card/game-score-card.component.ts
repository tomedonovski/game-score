import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameDetailsDialogComponent } from '../game-details-dialog/game-details-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-game-score-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './game-score-card.component.html',
  styleUrls: ['./game-score-card.component.scss']
})
export class GameScoreCardComponent {

  constructor(private dialog: MatDialog) {}

  openDetails(): void {
    this.dialog.open(GameDetailsDialogComponent, {
      width: '450px',
      data: {
        possession: { arsenal: '55%', manCity: '45%' },
        shots: { arsenal: 10, manCity: 8 },
        fouls: { arsenal: 12, manCity: 15 }
      }
    });
  }
}
