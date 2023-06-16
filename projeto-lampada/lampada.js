const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const turnPink = document.getElementById ( 'turnPink' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    } 
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg'
    }
}

function lampPink () {
    if ( !isLampBroken () ) {
        lamp.src = './img/rosa.jpg.jpg';
    } 
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function changeColor () {
    lamp.src = './img/rosa.jpg.jpg'
}


turnOn.addEventListener( 'click', lampOn );
turnOff.addEventListener( 'click', lampOff );
turnPink.addEventListener( 'click', lampPink );
lamp.addEventListener( 'mouseover', changeColor );
lamp.addEventListener( 'mouseleave', lampOff );
lamp.addEventListener( 'dblclick', lampBroken );