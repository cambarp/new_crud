import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormCrudComponent } from './crud_new/form-crud/form-crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormCrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud_sombra';
}
