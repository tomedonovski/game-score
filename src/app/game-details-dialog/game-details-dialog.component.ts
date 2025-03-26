import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-game-details-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './game-details-dialog.component.html',
  styleUrls: ['./game-details-dialog.component.scss']
})
export class GameDetailsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GameDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
