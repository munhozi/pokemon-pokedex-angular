import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

export interface PokemonListItem {
type: any;
  name: string;
  url: string;
}

export interface PokeApiResponse {
  count: number;
  results: PokemonListItem[];
}

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

  // Busca os Pokémons filtrados por um tipo específico
  public async getPokemonsByType(type: string): Promise<PokemonListItem[]> {
    if (!type) return this.getPokemons();

    const response = await this.httpService.get<any>(`type/${type.toLowerCase()}`);
    // A PokeAPI retorna os Pokémons do tipo dentro da propriedade 'pokemon'
    return response.pokemon.map((item: any) => item.pokemon);
  }
}
