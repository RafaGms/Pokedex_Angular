import { PokemonService } from './../../service/pokemon.service';
import { Component } from '@angular/core';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemon: Pokemon = {} as Pokemon;
  constructor(private pokemonService: PokemonService) { }

  idPokemon: number = 1
  height!:number
  weight!:number
  maxPokemon: number = 905

  ngOnInit(): void { //inicialização do componente
    this.loadPokemon(1);
  }

  mais() {
    if (this.idPokemon >= this.maxPokemon) {
      this.idPokemon = 0
    }
    this.idPokemon += 1
    this.loadPokemon(this.idPokemon)
  }

  menos() {
    if (this.idPokemon <= 1) {
      this.idPokemon = this.maxPokemon + 1
    }
    this.idPokemon -= 1
    this.loadPokemon(this.idPokemon)
  }

  loadPokemon(num: number) {
    this.pokemonService.getPokemon(num).subscribe({
        next: pokemon => this.pokemon = pokemon
      }
    );
    this.pokemonService.getPokemon(num).subscribe(pokemon => {
      this.height = pokemon.height / 10     
      this.weight = pokemon.weight / 10
      console.log(pokemon.height);
    });
  }
  getPokemonPhoto(){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.idPokemon}.png`;
  }
}
