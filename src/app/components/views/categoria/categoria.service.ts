import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  //referente a url da API que está injetado do 'environment.ts'
  baseUrl: String = environment.baseUrl;

  constructor(private Http: HttpClient, private _snackBar: MatSnackBar) { }

  //servico-buscando categoria
  findAll():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`
    return this.Http.get<Categoria[]>(url)
  }


  //servico-buscando categoria por id p/ 'delete'

  findById(id: String): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.Http.get<Categoria>(url)
  }


  //servico-criando categoria
  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`
    return this.Http.post<Categoria>(url, categoria)
  }



  //deletando categoria
  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.Http.delete<void>(url);
  }


  //atualizando categoria
 update(categoria: Categoria):Observable<void> {
    const url = `${this.baseUrl}/categorias/${categoria.id}`
    return this.Http.put<void>(url, categoria)
 }


  //mensagem-criando categoria com sucesso
  mensagem(str: String): void {
    this._snackBar.open(`${str}`, 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }




}
