import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  name: string;
  type: string;
  tipo?: string[]; // <--- Adicione esta linha
}

@Component({
  selector: 'app-button-pesquisar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './button-pesquisar.component.html',
  styleUrl: './button-pesquisar.component.scss'
})
export class ButtonPesquisarComponent {
  searchTerm: string = '';
  selectedType: string = '';

  pokemons: Pokemon[] = [
    { name: 'Normal', type: 'normal' },
    { name: 'Fire', type: 'fire' },
    { name: 'Water', type: 'water' },
    { name: 'Electric', type: 'electric' },
    { name: 'Grass', type: 'grass' },
    { name: 'Ice', type: 'ice' },
    { name: 'Fighting', type: 'fighting' },
    { name: 'Poison', type: 'poison' },
    { name: 'Ground', type: 'ground' },
    { name: 'Flying', type: 'flying' },
    { name: 'Psychic', type: 'psychic' },
    { name: 'Bug', type: 'bug' },
    { name: 'Rock', type: 'rock' },
    { name: 'Ghost', type: 'ghost' },
    { name: 'Dragon', type: 'dragon' },
    { name: 'Dark', type: 'dark' },
    { name: 'Steel', type: 'steel' },

  ];

  get filteredPokemons(): Pokemon[] {
    return this.pokemons.filter(pokemon => {
      const matchesName = pokemon.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase().trim());
      
      const matchesType = this.selectedType 
        ? pokemon.type.toLowerCase() === this.selectedType.toLowerCase() 
        : true;

      return matchesName && matchesType;
    });
  }
}