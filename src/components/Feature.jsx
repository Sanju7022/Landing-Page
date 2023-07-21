import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/one.png';
import featureimage1 from '../images/two.png';
import featureimage2 from '../images/three.png';

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
          <FeatureBox image={featureimage} title='Development Course' />
          <FeatureBox image={featureimage1} title='Money Saving Services' />
          <FeatureBox image={featureimage2} title='Usability Services' />
        </div>
    </div>
  )
}

export default Feature