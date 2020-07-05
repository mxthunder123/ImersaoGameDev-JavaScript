class GameOver{
  constructor(imagemG){
    this.imagemG=imagemG;
    this.x2=0;
    
  }
  exibe(){
    image(this.imagemG,this.x2,0,width,height);                                   
  }
}