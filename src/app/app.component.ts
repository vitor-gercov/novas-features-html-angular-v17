import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfComponent } from './components/if/if.component';
import { ForComponent } from './components/for/for.component';
import { SwitchComponent } from './components/switch/switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    IfComponent,
    ForComponent,
    SwitchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
