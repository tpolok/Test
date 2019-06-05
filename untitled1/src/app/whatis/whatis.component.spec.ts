import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatisComponent } from './whatis.component';

describe('WhatisComponent', () => {
  let component: WhatisComponent;
  let fixture: ComponentFixture<WhatisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
