import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTercerComponenteComponent } from './mi-tercer-componente.component';

describe('MiTercerComponenteComponent', () => {
  let component: MiTercerComponenteComponent;
  let fixture: ComponentFixture<MiTercerComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiTercerComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiTercerComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
