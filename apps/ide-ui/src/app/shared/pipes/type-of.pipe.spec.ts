import { TypeOfPipe } from './type-of.pipe';

describe('TypeOfPipe', () => {
  it('create an instance', () => {
    const pipe = new TypeOfPipe();
    expect(pipe).toBeTruthy();
  });
  it('should recognize strings and arrays', () => {
    const pipe = new TypeOfPipe();
    expect(pipe.transform('thisis')).toBe('string');
    expect(pipe.transform(['thisis','anarray'])).toBe('array');
  });
});
