
import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceCrudService , Usuarios } from '../service-crud.service';

@Component({
  selector: 'app-read-crud',
  standalone: true,
  imports: [CommonModule , FormsModule  ] ,
  templateUrl:'./read-crud.component.html',
  styleUrl: './read-crud.component.css'
})
export class ReadCrudComponent implements OnInit {
  
  usuario: Usuarios | null=null;
  name_update=""
  actualizarmostrar: boolean = false;

  mostrar_actualizar: boolean = false;
  constructor (public service: ServiceCrudService){}


  nname=''
  nusername=''
  ncorreo=''
  npassword=''

  ngOnInit(): void {
    this.service.getname_user(this.name_update).subscribe(usuario => {
      this.usuario = usuario;
      this.name_update="";
    });
  }

  delete_user():void{
    if (this.usuario) {
      this.service.delete_user(this.usuario.id);
      this.usuario = null; 
    }
  }

  actualizar(): void {
    if (this.usuario) {
      this.service.update_user(
        this.usuario.id,
        this.nname,
        this.nusername,
        this.ncorreo,
        this.npassword
      );
      this.actualizarmostrar = false;
        this.nname="",
        this.nusername=''
        this. ncorreo='';
        this. npassword='';
    }
  }
  
  mostrar(){
    this.mostrar_actualizar=true;
  }
  
}

