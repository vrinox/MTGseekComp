import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'chat-bubble',
  styleUrl: 'chat-bubble.scss',
  shadow: true
})

export class ChatBubbleComponent {
  @Prop()  mensaje:any;
  render() {
    let estado = "";
    if(this.mensaje.msg.position == 'left'){
      estado ='<span class="'+this.mensaje.estado+">"+this.mensaje.estado+'</span>';
    }
    return ([
      <div class="chatBubble">
        <img class={"'profile-pic "+this.mensaje.msg.position+"'"} src={"'"+this.mensaje.msg.img+"'"}/>
        <div class={"'chat-bubble "+this.mensaje.msg.position+"'"}>
          <div class="message">{this.mensaje.msg.content}</div>
          <div class="message-detail">
              <span >{this.mensaje.msg.senderName} </span>,
              <span>{this.mensaje.msg.time}</span>
              { estado }
          </div>
        </div>
      </div>
    ]);
  }
}
