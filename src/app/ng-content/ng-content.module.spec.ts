import { NgContentModule } from './ng-content.module';

describe('NgContentModule', () => {
  let ngContentModule: NgContentModule;

  beforeEach(() => {
    ngContentModule = new NgContentModule();
  });

  it('should create an instance', () => {
    expect(ngContentModule).toBeTruthy();
  });
});
