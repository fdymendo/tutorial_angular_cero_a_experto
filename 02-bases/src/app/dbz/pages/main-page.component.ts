import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get getCharacters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(characterId: string): void {
    this.dbzService.deleteCharacterById(characterId);
  }
  onNewCharacter(character: Character) {
    this.dbzService.newCharacter(character);
  }
}
