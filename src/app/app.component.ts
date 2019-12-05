import { Component, OnInit } from '@angular/core';
import { AlphabetService } from './services/alphabet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'unit-testing-workshop';
  searchTerm = '';
  foundVowels: string[] = [];
  foundConsonants: string[] = [];

  constructor(private alphabetService: AlphabetService) {}

  ngOnInit() {}

  search() {
    this.foundVowels = this.getVowelsFromString(this.searchTerm);
    this.foundConsonants = this.getConsonantsFromString(this.searchTerm);
  }

  getConsonantsFromString(search: string): string[] {
    let searchedConsonants: string[] = [];
    const consonants = this.alphabetService.getAllConsonants();

    for (let position = 0; position < search.length; position++) {
      if (consonants.includes(search.charAt(position))) {
        searchedConsonants = [...searchedConsonants, search.charAt(position)];
      }
    }

    return searchedConsonants;
  }

  getVowelsFromString(search: string): string[] {
    let searchedVowels: string[] = [];
    const vowels = this.alphabetService.getAllVowels();

    for (let position = 0; position < search.length; position++) {
      if (vowels.includes(search.charAt(position))) {
        searchedVowels = [...searchedVowels, search.charAt(position)];
      }
    }

    return searchedVowels;
  }
}
