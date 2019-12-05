import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelConsonantComponent } from './vowel-consonant.component';

describe('VowelConsonantComponent', () => {
  let component: VowelConsonantComponent;
  let fixture: ComponentFixture<VowelConsonantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VowelConsonantComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VowelConsonantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
