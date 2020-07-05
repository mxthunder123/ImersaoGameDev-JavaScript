class Pontuacao{
  constructor(){
    this.pontos=0
    
  }
  exibe (){
    textAlign(RIGHT)
    fill('#fff')
    textSize(50)
    text(parseInt(this.pontos),width - 40,40)
  }
  
  adicionarPonto(){
    this.pontos=this.pontos+0.2
  }
}