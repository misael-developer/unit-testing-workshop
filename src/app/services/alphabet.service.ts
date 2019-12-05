import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlphabetService {
  private vowels: string[];
  private consonants: string[];

  constructor() {
    this.vowels = ['i', 'a', 'u', 'o', 'e'];
    this.consonants = [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'y',
      'z'
    ];
  }

  getAllVowels(): string[] {
    return this.vowels;
  }

  getAllConsonants(): string[] {
    return this.consonants;
  }

  isValidVowel(character: string): boolean {
    return this.vowels.includes(character);
  }

  isValidConsonant(character: string): boolean {
    return this.consonants.includes(character);
  }
}
