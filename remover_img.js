// Função para substituir imagens por texto alternativo
function replaceImages() {
  document.querySelectorAll('img').forEach(img => {
    let altText = img.alt ? document.createTextNode(img.alt) : document.createTextNode('No alt text');
    img.parentNode.replaceChild(altText, img);
  });
}

// Substituir imagens quando a página carrega
replaceImages();

// Substituir imagens que são carregadas dinamicamente
const observer = new MutationObserver(replaceImages);
observer.observe(document.body, {childList: true, subtree: true});