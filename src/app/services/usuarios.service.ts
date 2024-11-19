import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuario } from '../usuarios/usuarios.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    apiUrl = 'http://localhost:8000/api';
    constructor(private http: HttpClient){}

    getusuarios(): Observable<usuario[]>{
        return this.http.get <usuario[]>(`${this.apiUrl}/usuarios`);
    }


    addUsuario(usuario: usuario):  Observable<usuario> {
       return this.http.post<usuario>(`${this.apiUrl}/usuarios`,usuario);
    }

    updateUsuario(usuarioId: number, usuario: usuario):  Observable<usuario> {
        return this.http.put<usuario>(`${this.apiUrl}/usuarios/${usuarioId}`,usuario);
     }


    deleteUsuario(usuarioId: number): Observable<usuario>{
        return this.http.delete<usuario>(`${this.apiUrl}/usuarios/${usuarioId}`);
    }
}