import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPentamentoComponent } from './listar-pentamento.component';

describe('ListarPentamentoComponent', () => {
  let component: ListarPentamentoComponent;
  let fixture: ComponentFixture<ListarPentamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPentamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPentamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
