class Jogo{
  constructor(){
    this.indice=0;
    this.mapa=fita.mapa
    
  }
  setup(){
    createCanvas(windowWidth, windowHeight);
  cenario=new Cenario(imagemCenario,3);
  pontuacao= new Pontuacao()
  vida=new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial)
  personagem=new Personagem(matrizPersonagem,imagemPersonagem,0,30,110,135,220,270);
  const inimigo=new Inimigo(matrizInimigo,imagemInimigo,width-52,30,52,52,104,104,10);
  const inimigoGrande= new Inimigo(matrizInimigoGrande,
                                  imagemInimigoGrande,width     ,0,200,200,400,400,15);
  const inimigoVoador= new Inimigo(matrizInimigoVoador,
                                  imagemInimigoVoador,width    ,240,100,75,200,150,10);
  
  inimigos.push(inimigo)
  inimigos.push(inimigoGrande)
  inimigos.push(inimigoVoador)
    
   somDoJogo.loop();
    
  
  }
  keyPressed(key){
    if(key === 'ArrowUp' || 'Space'){
    personagem.pula()
    somPulo.play();
    }
  }
  draw(){
  cenario.exibe();
  cenario.move();
    
  vida.draw();
  
  pontuacao.exibe()
  pontuacao.adicionarPonto()
  
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  
  const linhaAtual=this.mapa[this.indice]
  const inimigo=inimigos[linhaAtual.inimigo];
  const inimigoVisivel= inimigo.x < -inimigo.largura;
  inimigo.velocidade=linhaAtual.velocidade
    
  inimigo.exibe();
  inimigo.move();
  
  
  if(inimigoVisivel){
    this.indice++
    inimigo.aparece();
    if(this.indice > this.mapa.length-1){
      this.indice=0;
    }
    
  }
  
  
    if(personagem.estaColidindo(inimigo)){
    somColisao.play()
    vida.perdeVida()
    personagem.tornarInvencivel()
    if(vida.vidas<0){
    noLoop()
    somPulo.stop();
    image(imagemGameOver,width/2-220,height/2)
    somDoJogo.stop();
    
    somOver.loop()
    }
    
  }
    
    
  }
}
    
  
  
  
  
  
 
 
  


    
  