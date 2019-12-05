import { TestBed } from '@angular/core/testing';

import { AlphabetService } from './alphabet.service';

let service: AlphabetService;

describe('AlphabetService Service', () => {
  beforeEach(() => (service = TestBed.get(AlphabetService)));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method: getAllVowels', () => {
    it('should return all vowels in the english alphabet', () => {
      expect(service.getAllVowels().length).toEqual(5);
    });
  });

  describe('Method: isValidVowel', () => {
    it('should return true if a character given is a valid vowel', () => {
      expect(service.isValidVowel('u')).toBeTruthy();
    });

    it('should return false if a character given is not a valid vowel', () => {
      expect(service.isValidVowel('b')).toBeFalsy();
    });

    it('should return false if an empty string is given instead of a character', () => {
      expect(service.isValidVowel('')).toBeFalsy();
    });
  });

  describe('Method: getAllConsonnats', () => {
    it('should return all consonants in the alphabet', () => {
      expect(service.getAllConsonants().length).toEqual(21);
    });
  });

  describe('Method: isValidConsonant', () => {
    it('should return true if a character given is a valid consonant', () => {
      expect(service.isValidConsonant('b')).toBeTruthy();
    });

    it('should return false if a character given is not a valid consonant', () => {
      expect(service.isValidConsonant('e')).toBeFalsy();
    });

    it('should return false if an empty string is given instead of a character', () => {
      expect(service.isValidConsonant('')).toBeFalsy();
    });
  });
});
