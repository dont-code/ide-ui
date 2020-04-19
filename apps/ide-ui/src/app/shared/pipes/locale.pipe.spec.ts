import { LocalePipe } from './locale.pipe';
import { LocaleService } from '../text/services/locale.service';

describe('LocalePipe', () => {
  it('create an instance', () => {
    const pipe = new LocalePipe(new LocaleService());
    expect(pipe).toBeTruthy();
  });
});
