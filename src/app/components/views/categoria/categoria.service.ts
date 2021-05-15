import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  //referente a url da API que está injetado do 'environment.ts'
  baseUrl: String = environment.baseUrl;

  constructor(private Http: HttpClient) { }

  findAll():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias` 

    return this.Http.get<Categoria[]>(url)
  }
}
