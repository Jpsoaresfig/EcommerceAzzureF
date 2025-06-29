import React from 'react';
import { useEffect } from 'react';
import './about.css';
import Header from '../../Components/Header/Header.jsx';


function About() {
    useEffect(() => {
        document.body.classList.add('about-page-body');
        return () => {
            document.body.classList.remove('about-page-body');
        };
    }, []);


    return (
        <div className="about-container">

            <Header />
            <section className="about-section">
                <h1 className="about-title1">Olá, eu sou a Mariana</h1>
                <p>
                    Sou uma <strong>mulher de 23 anos</strong>, apaixonada pela ideia de <strong>crescimento e evolução</strong>. Meu maior <strong>objetivo</strong> é alcançar minha <strong>independência</strong> e ter <strong>liberdade</strong> para ser plenamente quem eu sou.
                    Acredito que <strong>cada passo</strong> em direção a esse objetivo me <strong>aproxima</strong> da versão mais <strong>autêntica</strong> de mim mesma.
                </p>
                <p>
                    <strong>Azzure</strong> é o nome que escolhi para o meu projeto, inspirado pela <strong>ideia de liberdade e pela imensidão do céu azul infinito</strong>.
                    O azul do céu não tem limites, e assim <strong>como ele</strong>, eu busco uma vida sem fronteiras, onde posso explorar e <strong>conquistar</strong> meus próprios horizontes.
                </p>
                <p>
                    A <strong>liberdade</strong> que busco não é apenas financeira, mas uma liberdade <strong>interna</strong>, uma liberdade para <strong>ser eu mesma</strong>, sem medo de mudar, crescer ou me reinventar.
                </p>
                <p>
                    <strong>Azzure</strong> não é apenas o nome de um projeto, mas o <strong>reflexo</strong> do meu <strong>compromisso</strong> com minha verdade e com o desejo de criar uma vida cheia de <strong>propósito, autenticidade e conquistas</strong>.
                </p>
            </section>

            <h1 className="about-title2">QUEM SOMOS</h1>

            <section className="about-section">
                <p>
                    Na <strong>Azzure</strong>, acreditamos que <strong>estilo</strong> e <strong>durabilidade</strong> caminham juntos.
                    Especializados em acessórios de <strong><u>aço inoxidável</u></strong>, oferecemos peças que combinam elegância, resistência e versatilidade para acompanhar você em todos os momentos.
                </p>
                <p>
                    Nossos acessórios são feitos para durar: <strong>não oxidam, não escurecem</strong> e são <strong>hipoalergênicos</strong>, garantindo beleza e conforto no dia a dia.
                </p>
                <p>
                    Cada peça é cuidadosamente selecionada para refletir personalidade, confiança e autenticidade.
                </p>
                <p className="about-highlight">
                    <strong>Nossos acessórios são mais do que simples detalhes.<br />
                        Eles são uma extensão de quem você é.</strong>
                </p>
                <div className='button_about'>
                <button className="about-button" onClick={() => window.location.href = '/all-products'}>venha viver a experiência Azzure</button>
                </div>
            </section>
        </div>
    );
}

export default About;
