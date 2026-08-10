import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpService: HttpService
  ) { }

  public async getPokemons(limit: number =10) {
    const response = await this.httpService.get<any[]>(`pokemon?limit=${limit}`);
    return response;
  }
}
