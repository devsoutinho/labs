import { renderCSS } from './renderCSS';

describe('renderCSS()', () => {
  describe('when receives a stylesheet with basic styles', () => {
    it('returns it as expected', () => {
      expect(renderCSS({ color: 'red' })).toEqual({ color: 'red' });
    });
    it('if they are responsive, return as expected', () => {
      expect(renderCSS({ color: { xs: 'red', md: 'blue' } })).toMatchSnapshot();
    })
  });
});
