import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcaoComponent } from './porcao.component';

describe('PorcaoComponent', () => {
  let component: PorcaoComponent;
  let fixture: ComponentFixture<PorcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
