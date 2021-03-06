import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import preload from '../../data';
import Search from '../Search';
import ShowCard from '..ShowCard';

test('Search renders correctly', () => {
	const component = shallow(<Search />);
	expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
	const component = shallow(<Search />);
});

test('Search should render correct amount of shows based on search term', () => {});
