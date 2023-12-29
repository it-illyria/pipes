import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleraComponent } from './elera.component';

describe('EleraComponent', () => {
  let component: EleraComponent;
  let fixture: ComponentFixture<EleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
