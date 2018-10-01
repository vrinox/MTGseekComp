import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'card-widget',
  styleUrl: 'card-widget.scss',
  shadow: true
})

export class CardWidgetComponent {
  @Prop() card:any;
  @Event() borrar: EventEmitter;
  @Event() mas1: EventEmitter;
  @Element() elemento:HTMLElement;
  activar(){
    let div=this.elemento.querySelector(".card-widget");
    if(!div.classList.contains("active")){
      div.classList.add("active");
    }else{
      div.classList.remove("active");
    }
  }
  sumar(){
    this.card.userMetadata.cantidad++;
    this.mas1.emit(this.card.userMetadata.cantidad);
  }
  restar(){
    this.card.userMetadata.cantidad--;
    if(this.card.userMetadata.cantidad===0){
      this.borrar.emit(this.card.userMetadata.id);
    }
  }
  render() {
    return ([
      <div class="card-widget">
        <button class="mas" onClick={ () => this.sumar()}>
          <ion-icon name="add"></ion-icon>
        </button>
        <button class="menos" onClick={ () => this.restar()}>
          <ion-icon name="remove"></ion-icon>
        </button>
        <div class="img" >
          <img src={"'"+this.card.imageUrl+"''"} onClick={ () => this.activar()}/>
        </div>
        <div class="rigth">
          {this.card.userMetadata.cantidad}
        </div>
      </div>
    ]);
  }
}
