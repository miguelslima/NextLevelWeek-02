import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/50017221?s=460&u=473b9095cca4ecde42cb46ec2c32dd274da30a95&v=4" alt="Miguel Lima"/>
      <div>
        <strong>Miguel Lima</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br /><br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.

    </p>

    <footer>
      <p>Preço/hora
      <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt=""/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;