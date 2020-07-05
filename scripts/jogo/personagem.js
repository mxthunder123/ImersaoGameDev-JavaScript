class Personagem extends Animacao{
  constructor(matriz,imagem,x,variacaoY,largura,altura,larguraSprite,alturaSprite){
    super(matriz,imagem,x,variacaoY,largura,altura,larguraSprite,alturaSprite)
    
      this.variacaoY=variacaoY   
      this.yInicial=height - this.altura-this.variacaoY
      this.y=this.yInicial
      this.velocidadeDoPulo=0
      this.gravidade=10
      this.alturaDoPulo=-50
      this.jumps=0
      this.jumpsLimit=3
      this.invencivel=false
  }
  
  pula(){
    if(this.jumps<this.jumpsLimit){
      this.velocidadeDoPulo=this.alturaDoPulo
      this.jumps++
    }
    
  }
    
  aplicaGravidade(){
      this.y=this.y+this.velocidadeDoPulo
      this.velocidadeDoPulo=this.velocidadeDoPulo+this.gravidade
      if(this.y>this.yInicial){
        this.y=this.yInicial
        this.jumps=0

        }
      }
  tornarInvencivel(){
    this.invencivel=true
    setTimeout(()=>{
      this.invencivel=false
    
    },1000)
  }
  estaColidindo(inimigo){
    if(this.invencivel){
      return false;
    }
    const precisao=.7
    const colisao=collideRectRect(
      this.x,
      this.y,
      this.largura*precisao,
      this.altura*precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura*precisao,
      inimigo.altura*precisao
    )
    
    return colisao
  }
    
}
  
  
  
  
  
  
  
  
  
  
  
  
