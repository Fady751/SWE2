import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinelistComponent } from './machinelist.component';

describe('MachinelistComponent', () => {
  let component: MachinelistComponent;
  let fixture: ComponentFixture<MachinelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
