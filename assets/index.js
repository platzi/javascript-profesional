
/**
 * ===================================================================
 * El código esta comentado, coloca el mouse sobre las funciones o
 * módulos o parámetros de la función para que veas su descripción y 
 * puedas entender un poco mejor como funciona el modulo y el plugin.
 * ===================================================================
 */

//importamos el modulo MediaPlayer
import MediaPlayer from './MediaPlayer.js'
//importamos el plugin Autoplay
import AutoPlay from './plugins/AutoPlay.js'
//obtenemos el video que va a ser administrado por nuestro modulo MediaPlayer
const video = document.querySelector('video')
//creamos una instancia de MediaPlayer y pasamos el elemento y los plugins, en este caso AutoPlay
const player = new MediaPlayer({ el: video, plugins: Array(new AutoPlay()) })
//obtenemos un elemento del DOM que usara funcionalidades de nuestro modulo MediaPlayer
const playButton = document.querySelector('#playButton')
//ejecutamos función togglePlay de nuestro modulo MediaPlayer
playButton.onclick = () => player.togglePlay()
//obtenemos otro elemento del DOM para  implementar mas funcionalidades de nuestro modulo
const muteButton = document.querySelector('#muteButton')
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute()
    } else {
        player.mute()
    }
}
