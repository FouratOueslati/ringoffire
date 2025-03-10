import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-player-dialog',
  standalone: true,
  templateUrl: './add-player-dialog.component.html',
  styleUrls: ['./add-player-dialog.component.scss'],
  imports: [
    MatDialogModule,
    MatButtonModule,      // Import MatButtonModule to style your buttons
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class AddPlayerDialogComponent {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<AddPlayerDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
