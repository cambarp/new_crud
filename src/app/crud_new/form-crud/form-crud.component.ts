
import { Component, OnInit , } from '@angular/core';
import { ServiceCrudService } from '../service-crud.service';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuarios } from '../service-crud.service';
import { ReadCrudComponent } from '../read-crud/read-crud.component';



@Component({
  selector: 'app-form-crud',
  standalone: true,
  imports: [FormsModule,CommonModule ,ReadCrudComponent],
  templateUrl: './form-crud.component.html',
  styleUrl: './form-crud.component.css'
})
export class FormCrudComponent  implements OnInit {
  id=1;
 
  name=''
  username=''
  email=''
  password=''

  usuarios: Usuarios[] = [];

  constructor(public service:ServiceCrudService ){
   
  }
  
  ngOnInit(){
     this.service.usuarios$.subscribe(usuarios =>{
        this.usuarios=usuarios 
     });
    }

  addUser():void{
    this.service.creacte_user(this.name , this.username , this.email , this.password)
    this.name=''
    this.username=''
    this.email=''
    this.password=''
    
  }

}
  

