const TXT_PALABRA = document.getElementById('TXT_PALABRA')
const BTN_INVERTIR_TEXTO = document.getElementById('BTN_INVERTIR_TEXTO')
BTN_INVERTIR_TEXTO.addEventListener('click' , revertirPalabra)

function revertirPalabra()
{
    const PALABRA = TXT_PALABRA.value
    const NUMERO_DE_CARACTERES_PALABRA = PALABRA.length
    let palabraInvertida = ''
    for(let i=NUMERO_DE_CARACTERES_PALABRA - 1 ; i >= 0; i--)
    {
        palabraInvertida = palabraInvertida + PALABRA.charAt(i)
    }
    TXT_PALABRA.value = palabraInvertida
}
