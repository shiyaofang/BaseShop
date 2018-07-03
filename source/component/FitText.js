
'use strict';

import React from 'react';
import {Text} from 'react-native';

const FitText=(props)=>{
	return(
		<Text {...props} allowFontScaling={false}>
			{props.children}
		</Text>
	);
};


export default FitText;