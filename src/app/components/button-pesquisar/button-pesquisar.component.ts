import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-pesquisar',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './button-pesquisar.component.html',
  styleUrl: './button-pesquisar.component.scss'
})
export class ButtonPesquisarComponent {
  searchTerm: string = '';
  selectedType: string = 'Type';

  pokemons = [
    { name: 'Charizard', type:'fire'},
    { name: 'Pikachu', type:'electr'},
    { name: 'Beedrill', type:'Bug'},
  ];

  get filteredPokemons() {
    return this.pokemons.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedType ? p.type === this.selectedType : true)
    );
  }
}
