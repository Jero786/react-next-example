import React from 'react';
import {expect} from 'chai';
import {mount, render, shallow} from 'enzyme';
import sinon from 'sinon';
import HomePage from 'pages/home';

describe('HomePage', () => {

  it('should exist', () => {
    expect((<HomePage/>)).to.exist;
  });

	it('should has properly classname', function () {
		const wrapper = render(<HomePage/>);

		 expect(wrapper.hasClass('home-page')).to.be.true;
	});
});
