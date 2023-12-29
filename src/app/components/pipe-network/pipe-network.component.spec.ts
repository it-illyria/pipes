import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeNetworkComponent } from './pipe-network.component';

describe('PipeNetworkComponent', () => {
  let component: PipeNetworkComponent;
  let fixture: ComponentFixture<PipeNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeNetworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
