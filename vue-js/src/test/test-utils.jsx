import { render as testingLibraryRender } from '@testing-library/vue';
import Wrapper from './Wrapper.vue';

/**
* @param {JSX.Element} TestComponent
* @param {RenderOptions<JSX.Element> | undefined} options
**/
export const render = (TestComponent, options= undefined) => {
  return testingLibraryRender(<Wrapper>{TestComponent}</Wrapper>, options)
}
