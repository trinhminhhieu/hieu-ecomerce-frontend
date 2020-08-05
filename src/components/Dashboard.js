import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from './ConfirmEmailMessage';

const Dashboard = ({isConfirmed}) => (
	<div>
	{!isConfirmed && <ConfirmEmailMessage />}
	</div>
);

Dashboard.propTypes = {
       isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		isConfirmed: !!state.user.confirm
	}
}

export default connect(mapStateToProps)(Dashboard);