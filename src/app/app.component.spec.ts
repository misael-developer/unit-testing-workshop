import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VowelConsonantComponent } from './components/vowel-consonant/vowel-consonant.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, VowelConsonantComponent],
      imports: [FormsModule],
      providers: []
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
