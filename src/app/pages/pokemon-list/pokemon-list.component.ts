import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { Pokemon } from '../../interface/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemonListaCompleta: Pokemon[] = [];
  @Input() viewMode: 'grid' | 'list' = 'grid';
}