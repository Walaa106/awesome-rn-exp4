
// jest.mock('native-base-shoutem-theme', () => {
// 	return {
// 		connectStyle: jest.fn(),
// 		INCLUDE: jest.fn(),
// 		StyleProvider: jest.fn(),
// 		Theme: jest.fn(),
// 		ThemeShape: jest.fn(),
// 		createVariations: jest.fn(),
// 		createSharedStyle: jest.fn()
// 	}
// })


jest.mock('native-base', () => 'native-base');

// jest.mock('react-i18next', () => ({
//   // this mock makes sure any components using the translate HoC receive the t function as a prop
// 	translate: () => (Component) => {
// 		Component.defaultProps = { ...Component.defaultProps, t: () => "" };
//     return Component;
// 	}
// }));

// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() })