import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonPesquisarComponent } from './components/button-pesquisar/button-pesquisar.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HttpService } from './services/http.service';
import { Pokemon } from './interface/pokemon';
import { ListaSimples } from './interface/lista_simples';
import { PokemonListComponent } from "./pages/pokemon-list/pokemon-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonPesquisarComponent, PokemonCardComponent, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'App-Pokedex';
  searchTerm: string = '';

  public viewMode: 'grid' | 'list' = 'grid';

  public pokemonList: ListaSimples[] = [];
  public pokemonListaCompleta: Pokemon[] = [];

  constructor(
    private httpService: HttpService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadPokemons();
  }

  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }

  async loadPokemons(): Promise<void> {
    try {
      // 1. Busca a lista inicial de Pokémon
      const data = await this.httpService.get<any>('pokemon?limit=151');
      const basicList = data.results;

      // 2. Dispara as requisições em paralelo (ex: os primeiros 50)
      const requests = basicList.slice(0, 50).map((p: any) => 
        this.httpService.get<any>(`pokemon/${p.name}`)
      );

      const detailsList = await Promise.all(requests);

      // 3. Mapeia TODOS os itens tratando a propriedade 'tipo'
      this.pokemonListaCompleta = detailsList.map((details: any) => ({
        ...details,
        tipo: details.types ? details.types.map((t: any) => t.type.name) : []
      }));

    } catch (error) {
      console.error('Erro ao carregar Pokémons:', error);
    }
  }
}