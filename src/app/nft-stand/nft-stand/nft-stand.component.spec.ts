import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftStandComponent } from './nft-stand.component';

describe('NftStandComponent', () => {
  let component: NftStandComponent;
  let fixture: ComponentFixture<NftStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftStandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
