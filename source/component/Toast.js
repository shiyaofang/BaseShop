'use strict';



import SimpleToast from 'react-native-simple-toast';


let lastToastTime=0;


let Toast={
	show: function(message,duration){
		let currentTime = new Date().getTime();
        if(currentTime-lastToastTime>2000){
            SimpleToast.show(message, duration);
            lastToastTime=currentTime
        }
	}
}


export default Toast;