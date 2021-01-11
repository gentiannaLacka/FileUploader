import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, Subscriber } from 'rxjs';
import { UploadService } from '../_services/upload.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
 
  it('shouldnt get products from the Upload service', ()=>{
    let fixture= TestBed.createComponent(ProductComponent);
    let app= fixture.debugElement.componentInstance;
    let uploadService = fixture.debugElement.injector.get(UploadService);
    let spy= spyOn(uploadService, 'getProducts')
    .and.returnValues();
    fixture.detectChanges();
    expect(app.products).toBe(undefined);
  });

});
