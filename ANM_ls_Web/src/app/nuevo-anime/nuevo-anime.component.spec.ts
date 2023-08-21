import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAnimeComponent } from './nuevo-anime.component';

describe('NuevoAnimeComponent', () => {
  let component: NuevoAnimeComponent;
  let fixture: ComponentFixture<NuevoAnimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoAnimeComponent]
    });
    fixture = TestBed.createComponent(NuevoAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
