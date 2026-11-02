import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuitarraCard } from './guitarra-card';

describe('GuitarraCard', () => {
  let component: GuitarraCard;
  let fixture: ComponentFixture<GuitarraCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuitarraCard],
    }).compileComponents();

    fixture = TestBed.createComponent(GuitarraCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
