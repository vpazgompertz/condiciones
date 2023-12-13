function checkStickers() {
    const stickerA = parseInt(document.getElementById('sticker-a').value) 
    const stickerB = parseInt(document.getElementById('sticker-b').value) 
    const stickerC = parseInt(document.getElementById('sticker-c').value) 

    const totalP = document.querySelector("#total")
    const messageP = document.querySelector("#message")
    
    const addStickers = stickerA + stickerB + stickerC
    
    if (addStickers <= 10) {
        totalP.innerHTML = `Llevas ${addStickers} stickers.`
    } else {
        messageP.innerHTML = 'Llevas demasiados stickers.'
        totalP.innerHTML = ''
    }
}
