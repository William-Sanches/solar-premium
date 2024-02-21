import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPanelComponent } from './adm-panel.component';

describe('AdmPanelComponent', () => {
  let component: AdmPanelComponent;
  let fixture: ComponentFixture<AdmPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmPanelComponent]
    });
    fixture = TestBed.createComponent(AdmPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
