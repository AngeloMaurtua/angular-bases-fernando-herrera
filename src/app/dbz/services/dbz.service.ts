import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Angelo',
    power: 10000
  },{
    id: uuid(),
    name: 'Porras',
    power: 700
  },{
    id: uuid(),
    name: 'Gordo',
    power: 800
  }];

  addCharacter(character: Character): void {
    // console.log('Main Page');
    // console.log(character);

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);

    console.log(this.characters);

  }

  // onDeleteCharacter(index: number) {
  //   console.log(index);
  //   //debugger;
  //   this.characters.splice(index, 1);

  //   console.log(this.characters);
  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
