import React from 'react';
import { mount } from 'enzyme';
import Fetch from './Fetch';
import * as fetcher from '../../../utils/FetchJsonAPI/FetchJsonAPI';

jest.mock('../../../utils/FetchJsonAPI/FetchJsonAPI', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality(
    '../FetchJsonAPI/FetchJsonAPI',
  ));

// TOOD: get rid if useLayoutEffect since it's synchronous.
// https://github.com/facebook/react/issues/14050
// Temporary solution: https://github.com/facebook/react/issues/14050#issuecomment-438173736
describe('<Fetch />', () => {
  let fetchWrapper;

  beforeEach(() => {
    fetchWrapper = mount(<Fetch />);
  });

  it('renders the text between the first paragraph', () => {
    const expectedText = 'You have just fetched a TODO!';

    expect(fetchWrapper.find('p').first().text()).toEqual(expectedText);
  });

  it('calls FetchJsonAPI', () => {
    expect(fetcher.fetchJsonAPI).toHaveBeenCalled();
  });

  // TODO: not working properly, receiving the empty array.
  /* describe('test', () => {
    beforeEach(() => {
      fetcher.fetchJsonAPI.mockImplementationOnce(() => ({
        data: {
          title: 'Lorem Ipsum',
        },
      }));
    });

    it('renders the fetched todos', () => {
      expect(fetchWrapper.find('p').at(1).text()).toEqual('asd');
    });
  }); */
});
