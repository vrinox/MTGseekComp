import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'contador',
  styleUrl: 'contador.scss',
  shadow: true
})

export class ContadorComponent {
  @Prop() count:any;
  @Event() cambio: EventEmitter;
  colores :String[] = [];
  rand: String;
  determinarColor(){
    this.colores = ["red","blue","pink","purple","green","brown"];
    this.rand = this.colores[Math.floor(Math.random() * this.colores.length)];
    this.count = {
      nombre:"Poison counter",
      numero:2
    };
  }

  add(event: UIEvent){
    this.count.numero++;
  }
  remove(event: UIEvent){
    this.count.numero--;
    this.cambio.emit(this.count);
  }
  render() {
    return ([
        <div class="contador">
          <div class={"'numero "+this.rand+"'"}>{this.count.numero}</div>
          <p class="nombre">{this.count.nombre}</p>
          <ion-buttons horizontal="end">
            <ion-button fill="outline" slot="icon-only" onClick={ (event: UIEvent) => this.add(event)}>
              <ion-icon name="add" ></ion-icon>
            </ion-button>
            <ion-button fill="outline" slot="icon-only" onClick={ (event: UIEvent) => this.remove(event)}>
              <ion-icon name="remove"></ion-icon>
            </ion-button>
          </ion-buttons>
          <div class="clear"></div>
        </div>
    ]);
  }
}
