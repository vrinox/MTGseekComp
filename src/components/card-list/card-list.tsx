import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'card-list',
  styleUrl: 'card-list.scss',
  shadow: true
})

export class CardListComponent {
  @Prop() carta: any;
  @Prop() mostrar: string;
  render() {
    let cantidad:string = "",power:string="",imagen:string="";
    if(this.carta.userMetadata.cantidad != 0){
      cantidad = "<div class='cantidad' >"+this.carta.userMetadata.cantidad+"</div>";
    }
    if(this.carta.power ){
      power = "</div><div class='stats' >("
      + this.carta.power + "/" + this.carta.toughness
      + ")</div>";
    }
    if(this.mostrar == 'si'){
        imagen = "<div class='img' >"
          +   "<div class='visor'> "
          +     "<img src'"+this.carta.imageUrl+"' alt='' />"
          +   "</div>"
          + "</div>"
    }
    return ([
      <div class="card-list">
        { imagen }
        <div class="texto-sup">
          {cantidad}
          <div class="nombre">{ this.carta.name }</div>
          <div class="clear"></div>
        </div>
        <div class="texto">{this.carta.type}</div>{power}
        <div class="exp">
          <i class={"'ss ss-"+ this.carta.set +" ss-"+ this.carta.userMetadata.rareza+" ss-grad'"}></i>
        </div>
        <div class="cost">
          {this.carta.userMetadata.costos.map((costo) =>
            <i class={"'ms ms-"+costo+" ms-cost'" } ></i>
          )}
        </div>
      </div>
    ]);
  }
}
