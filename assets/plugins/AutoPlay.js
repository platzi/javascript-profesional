
/**
 * Maneja la reproducción automática del elemento.
 */
function AutoPlay() {}

/**
 * Esta función pausa el elemento para evitar errores cuando la pagina carga
 * y después lo reproduce automáticamente.
 */
AutoPlay.prototype.run = function(player) {
    player.mute()
    player.play()
}

export default AutoPlay
