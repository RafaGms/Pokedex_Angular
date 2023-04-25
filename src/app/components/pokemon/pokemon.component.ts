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

  ngOnInit(): void { //inicialização do componente
    this.loadPokemon(1);
  }

  mais() {
    if(this.idPokemon >= 905){
      this.idPokemon = 0
    }
    this.idPokemon += 1
    this.loadPokemon(this.idPokemon)
  }

  menos(){
    if(this.idPokemon <= 1){
      this.idPokemon = 906
    }
    this.idPokemon -= 1
    this.loadPokemon(this.idPokemon)
  }

  loadPokemon(num: number) {

    this.pokemonService.getPokemon(num).subscribe(
      {
        next: pokemon => this.pokemon = pokemon
      }
    );
  }
}
