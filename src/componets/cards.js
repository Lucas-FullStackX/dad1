import React from "react";
import style from "./cards.module.css";
export default function cards() {
  return (
    <div className={style.card}>
      <h2 className={style.title}>EL MEJOR PADRE DE LA GALAXIA</h2>
      <p>
        Feliz día a esa figura de fuerza ingenio y lealtad que es mi padre un
        gran persona en la cual puedo confiar plenamente y que me ha demostrado
        que la importancia del conocimiento y los valores en este mundo, esa
        persona que siempre consideraré un superhéroe con la fuerza de Hulk el
        poder de Silver Surfer y la gran sabiduría del maestro yoda, pero con el
        temperamento de Dark Vader, me ha pasado un legado el cual sé que vivirá
        en mí, gracias a un ejemplo de una de las mejores figuras que he tenido
        en mi vida y sé que cuando caiga siempre él estará ahí y cuando esté en
        lo más alto con él viajaré y le mostraré los frutos de su esfuerzo.
      </p>
      <p className={style.by}>-Lucas Leguizamo</p>
      <img
        alt="pa"
        src="https://i.pinimg.com/564x/a3/7d/20/a37d2081c419f7b2880e59765c669abb.jpg"
      />
    </div>
  );
}
