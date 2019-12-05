import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vowel-consonant',
  templateUrl: './vowel-consonant.component.html',
  styleUrls: ['./vowel-consonant.component.css']
})
export class VowelConsonantComponent implements OnInit {
  @Input() vowels: string[];
  @Input() consonants: string[];

  constructor() {}

  ngOnInit() {}
}
