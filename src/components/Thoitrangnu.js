import React from 'react';

class Thoitrangnu extends React.Component {
	render(){
    const { title, price, img } = this.props.productwomen;
  return (
    <div className="dib w-20  mr-top col-9 mx-auto col-md-6 col-lg-3 my-3">
    <div className="card">
    <div className="dib img-container p-4">
      <img alt='Thoitrangnu'  src={img} className="card-img-top" />
      <div className="dib mt2">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      </div>
      </div>
    </div>
  );
}
}
//tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5
//col-9 mx-auto col-md-6 col-lg-3 my-3
export default Thoitrangnu;