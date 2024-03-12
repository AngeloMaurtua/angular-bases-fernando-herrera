import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Gordo',
    power: 950
  }];

  @Output()
  // public onDeleteId: EventEmitter<number> = new EventEmitter();
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   // Emitir el INDEX del usuario
  //   this.onDeleteId.emit(index);
  // }

  onDeleteCharacter(id?: string): void {
    // Emitir el ID del usuario
    if( !id ) return;
    console.log({id});
    this.onDeleteId.emit(id);
  }
}
