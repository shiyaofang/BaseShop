
'use strict';

import React from 'react';
import {Text} from 'react-native';

const FixText=(props)=>{
	return(
		<Text {...props} allowFontScaling={false}>
			{props.children}
		</Text>
	);
};


export default FixText;