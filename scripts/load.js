function preload() {
  imagemCenario=loadImage('imagens/cenario/floresta.png');
  imagemPersonagem=loadImage('imagens/personagem/correndo.png');
  imagemInimigo=loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande=loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador=loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemTelaInicial=loadImage('imagens/cenario/telaInicial.png');
  imagemVida=loadImage('imagens/assets/coracao.png');
  imagemGameOver=loadImage('imagens/assets/game-over.png');
  fonteTelaInicial=loadFont('imagens/assets/fonteTelaInicial.otf');
  somDoJogo=loadSound('sons/trilha_jogo.mp3');
  somPulo=loadSound('sons/somPulo.mp3');
  somOver=loadSound('sons/som-over.mp3');
  somColisao=loadSound('sons/som-colisao.mp3');
  fita=loadJSON('fita/fita.json');
  
  


}