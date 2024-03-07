import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Gato Cano';
  public age: number = 36;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Rocky';
  }

  changeAge(): void {
    this.age = 40;
  }

  resetForm(): void {
    this.name = 'Gato Cano';
    this.age = 36;
  }
}
