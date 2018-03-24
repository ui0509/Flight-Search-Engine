import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchTemplateComponent } from './component';


describe('SearchTemplateComponent', () => {
  let component: SearchTemplateComponent;
  
  beforeEach(() => {
    
    component = new SearchTemplateComponent();
  });

  it('should set new message', () => {
    component.setMessage('Testing SearchTemplateComponent');
    expect(component.message).toBe('Testing SearchTemplateComponent');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});