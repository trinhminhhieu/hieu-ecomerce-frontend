import React from "react";
import PropTypes from 'prop-types';

const ThongBaoLoi = ({text}) => <span style={{color: '#ae5856'}}>{text}</span>
 ThongBaoLoi.propTypes = {
 	text : PropTypes.string.isRequired
 };

export default ThongBaoLoi;

