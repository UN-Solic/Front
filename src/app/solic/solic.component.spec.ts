import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicComponent } from './solic.component';

describe('SolicComponent', () => {
  let component: SolicComponent;
  let fixture: ComponentFixture<SolicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
