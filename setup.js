import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// jest.mock('native-base', ()=> {
// 	const React = require('react');
// 	return {
// 		Container: () => <span />,
// 		Header: () => <span />,
// 		Left: () => <span />,
// 		Container: () => <span />,
// 		Content: () => <span />,
// 		Header: () => <span />,
// 		Left: () => <span />,
// 		H3: () => <span />,
// 		Button: () => <span />,
// 		Text: () => <span />,
// 		View: () => <span />,
// 	}
// });

jest.mock('react-i18next', () => ({ t: jest.fn((translation) => translation), }));

// jest.mock('native-base-shoutem-theme');