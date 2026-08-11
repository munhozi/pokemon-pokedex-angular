import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PokemonTypeComponent } from "../pokemon-type/pokemon-type.component";

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, PokemonTypeComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() label!: string;
  @Input() tipo: string[] = [];
  @Input() number!: string;
  @Input() src!: string;
  
  // ADICIONE ESTA LINHA:
  @Input() viewMode: 'grid' | 'list' = 'grid';

  typeColors: Record<string, string> = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390f0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
  };

  get primaryColor(): string {
    if (!this.tipo || this.tipo.length === 0) return '#6c5ce7';
    const mainType = String(this.tipo[0]).toLowerCase().trim();
    return this.typeColors[mainType] || '#6c5ce7';
  }
}