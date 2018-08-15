import { shallowMount } from '@vue/test-utils';
import NavBar from '../';

describe('NavBar', () => {
  it('renders', () => {
    const wrapper = shallowMount(NavBar);
    expect(wrapper).toMatchSnapshot();
  });
});
