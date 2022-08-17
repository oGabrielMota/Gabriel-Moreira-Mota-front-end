import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LivrosOutput } from '../outputs/livros-output';
import { Observable } from 'rxjs';
import { LivrosInput } from '../inputs/livros-input';

const URL = environment.URL_API + 'livros';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private http: HttpClient) {}

  buscaLivros(user: LivrosOutput): Observable<LivrosOutput[]> {
    return this.http.get<LivrosOutput[]>(URL);
  }

  cadastraLivro(user: LivrosInput): Observable<LivrosOutput> {
    return this.http.post<LivrosOutput>(URL, user);
  }

  alterar(id: number, user: LivrosOutput): Observable<LivrosOutput> {
    return this.http.put<LivrosOutput>(URL + '/' + id, user);
  }

  excluir(id: any): Observable<void> {
    return this.http.delete<void>(URL + '/' + id);
  }
}
