/**
 * Media player recibe como parámetros un objeto que contiene: el video que va a controlar
 * y funcionalidades especificas relacionadas con el control del elemento
 * @param {object} config objeto de configuración
 * @param {HTMLVideoElement} config.el elemento de video que sera manejado por el modulo 
 * @param {object} config.plugins funciones especificas relacionadas con el AutoPlay 
 */
function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
}

/**
 * Esta función incializa todos los plugins pasados por parámetro
 */
MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    })
}

/**
 * Esta función reproduce el elemento
 */
MediaPlayer.prototype.play = function() {
    this.media.play()
}

/**
 * Esta función pausa el elemento
 */
MediaPlayer.prototype.pause = function() {
    this.media.pause()
}

/**
 * Esta función alterna la reproducción o pausa del elemento
 * dependiendo del estado en que este se encuentre.
 */
MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}

/**
 * Esta función silencia el elemento.
 */
MediaPlayer.prototype.mute = function() {
    this.media.muted = true
}

/**
 * Esta función regresa el audio al elemento.
 */
MediaPlayer.prototype.unmute = function() {
    this.media.muted = false
}

/**
 * La declaración export se utiliza al crear módulos de JavaScript p
 * ara exportar funciones, objetos o tipos de dato primitivos del módulo
 * para que puedan ser utilizados por otros programas con la sentencia import.
 */
export default MediaPlayer
