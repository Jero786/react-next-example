import './HomePage.scss';
import React from 'react';
import PropTypes from 'prop-types';
import SimpleComponent from 'components/simple-component/SimpleComponent';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <section className="home-page">
				Brisa Home page
				<SimpleComponent/>
			</section>
    );
  }
}

HomePage.propTypes = {

};
