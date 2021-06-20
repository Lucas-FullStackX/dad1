import React from "react";
import style from "./card.module.css";
export default function cards() {
  return (
    <div className={style.card}>
      <h2>EL MEJOR SUEGRITO DE LA GALAXIA</h2>
      <p>
        Feliz día suegrido soy tu fan eres una gran persona te adoro sabes mucho
        tienes un gran hijo y sabes cocinar muy bien y gracias por todas esas
        ocasiones en las que me has colaborado espero pases un gran día y espero
        vernos pronto y par mas tiempo.
      </p>
      <p className={style.by}>-Karen Galindo</p>
      <img
        alt="pa"
        src="https://i.pinimg.com/564x/1f/f9/28/1ff928a372124ca0a33dd5727b822f8a.jpg"
      />
    </div>
  );
}
