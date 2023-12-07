import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {
  slideToggleValue: boolean = false
}
