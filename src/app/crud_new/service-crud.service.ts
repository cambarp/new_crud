import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Usuarios{
  id:number;
  name:string;
  username:any;
  email:any;
  password:any;
};

@Injectable({
  providedIn: 'root'
})


export class ServiceCrudService {
  public stat_new = new BehaviorSubject<Usuarios[]>([]);
  usuarios$ = this.stat_new.asObservable();
  usuario: Usuarios | null = null;
  private nextId = 1;
  constructor() { }

  creacte_user(name:string ,username:any , email:any ,password:any):void{
      const newUser : Usuarios ={
        id:this.nextId++,
        name,
        username,
        email,
        password
      };
      const usuarios= [...this.stat_new.value, newUser];
      this.stat_new.next(usuarios);
  }

  getname_user(name_update: string): Observable<Usuarios> {
    return this.usuarios$.pipe(
      map((usuarios: Usuarios[]) => usuarios.find(usuario => usuario.name === name_update)!)
    );
  }
  
  delete_user(id: number):void{
    const usuarios = this.stat_new.value.filter(usuario => usuario.id !== id);
    this.stat_new.next(usuarios);
  }

  update_user(id: number, name: string, username: any, email: any, password: any): void {
    const usuarios = this.stat_new.value.map((usuario) => {
      if (usuario.id === id) {
        return { ...usuario, name, username, email, password };
      } else {
        return usuario;
      }
    });
    this.stat_new.next(usuarios);
  }
  
}
