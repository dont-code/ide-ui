import { LocaleDescPipe } from './locale-desc.pipe';
import { LocaleService } from '../text/services/locale.service';

describe('LocaleDescPipe', () => {
  it('create an instance', () => {
    const pipe = new LocaleDescPipe(new LocaleService());
    expect(pipe).toBeTruthy();
  });
});
