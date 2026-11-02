import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Productos2 } from './productos2';

describe('Productos2', () => {
  let component: Productos2;
  let fixture: ComponentFixture<Productos2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productos2],
    }).compileComponents();

    fixture = TestBed.createComponent(Productos2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
