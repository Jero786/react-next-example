import React from 'react';
import {expect} from 'chai';
import {mount, render, shallow} from 'enzyme';
import sinon from 'sinon';
import SimpleComponent from 'components/simple-component/SimpleComponent';

describe('SimpleComponent', () => {

	it('should exist', () => {
		expect((<SimpleComponent/>)).to.exist;
	});


	it('should has properly classname', function () {
		const wrapper = render(<SimpleComponent/>);

		expect(wrapper.hasClass('simple-component')).to.be.true;
	});
});
