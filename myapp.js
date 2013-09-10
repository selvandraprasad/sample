// JavaScript Document
function onDOMLoaded(){
	
		document.addEventListener("deviceready", phoneGapAPILoaded, false);
	}

function phoneGapAPILoaded(){
	alert('PhoneGap API loaded successfully');
	}

function beep(){
		navigator.notification.beep(5);
	}
	
function vibrate(){
		navigator.notification.vibrate(3000);
	}
function deviceInfo(){
	var divElt = document.getElementById('deviceInfDiv');
	divElt.innerHTML =
						'Device Details: <br>'+
						'Device Name:  '+ device.name + '<br>'+
						'Phone Gap version:  '+ device.phonegap + '<br>'+
						'Platform:  '+ device.paltform + '<br>'+
						'Device UUID:  '+ device.uuid + '<br>'+
		 				'OS version:  '+ device.version + '<br>';
	}
function checkNetworkConnection(){
	
	var networkstate = navigator.network.connection.type;
	
	var states = {};
	states[Connection.UNKNOWN] = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI] = 'WIFI connection';
	states[Connection.CELL_2G] = '2G connection';
	states[Connection.CELL_3G] = '3G connection';
	states[Connection.CELL_4G] = '4G connection';
	states[Connection.NONE] = 'No connection';
	
	alert('Network connection : '+states[networkstate]);
}

function checkcurrentLocation(){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}
	
function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   position.timestamp          + '<br />';
    }

function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
