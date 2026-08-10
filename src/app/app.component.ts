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

  public pokemonList: ListaSimples[] = [];
  public pokemonListaCompleta: Pokemon[] = [];

  constructor(
    private httpService: HttpService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadPokemons();
  }

  async loadPokemons(): Promise<void> {
    try {
      const data = await this.httpService.get<ListaSimples>('pokemon?limit=2000');
      const basicList = data.results;

      basicList.forEach(async (p: any) => {
        const details = await this.httpService.get<Pokemon>(`pokemon/${p.name}`);
        this.pokemonListaCompleta.push(details)
       
      })

    } catch (error) {
      console.error('Erro ao carregar Pokémons:', error);
    }
  }
}
