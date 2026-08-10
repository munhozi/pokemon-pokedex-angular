import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.scss'
})
export class PokemonTypeComponent {
  @Input() type!: string;

  typeColors: Record<string, string> = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390f0',
    electric: '#F7D02C',
    grass: '#7AC74C', // ajuste de tom caso prefira verde
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

  // Getter para garantir busca segura independente de como a string venha ('Fire', 'FIRE', 'fire ')
  get backgroundColor(): string {
    if (!this.type) return '#6c5ce7'; // Cor padrão caso venha vazio
    const formattedType = this.type.toLowerCase().trim();
    return this.typeColors[formattedType] || '#6c5ce7';
  }
}