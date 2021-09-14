import React from 'react'
import '../AppMap.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function RoadMap(){
    return (

<div class="col-12">
    <div class="container ">
        <div class="row ">
                <div className="espacoDiv"/>
                    <div style={{textAlign:'center'}}>
                        <p className="textCinza">ROADMAP</p>
                        <h1 style={{color:'#717171'}}>Fique por dentro dos nossos passsos</h1>
                    </div>
            <div id="containerMap" class="container ">
                <div className="espaco"/>
                    <section id="sectionMap">
                    <div className="content " style={{textAlign:'right'}}>
                        <p className="textGold" >Agosto </p>
                        <p className="textGold" >2021 </p>
                    </div>
                    <div className="circleA"></div>
                    <div className="content" >
                        <p className="textCinzaEscuro">Alguma coisa </p>
                        <p className="textCinza">Alguma outra coisa </p>
                    </div>
                </section>
                <section className="separator">
                <hr id="hr"/>
                </section>
                <section id="sectionMap">
                    <div className="content" style={{textAlign:'right'}} >
                        <p className="textCinzaEscuro">Alguma coisa </p>
                        <p className="textCinza">Alguma outra coisa </p>
                    </div>
                    <div className="circle"></div>
                    <div className="content">
                        <p className="textGold" >Setembro </p>
                        <p className="textGold" >2021 </p>
                    </div>
                </section>
                <section className="separator">
                <hr id="hr"/>
                </section>
                <section id="sectionMap">
                    <div className="content" style={{textAlign:'right'}}>
                        <p className="textGold" >Outubro </p>
                        <p className="textGold" >2021 </p>
                    </div>
                    <div className="circle"></div>
                    <div className="content"  >
                        <p className="textCinzaEscuro">Alguma coisa </p>
                        <p className="textCinza">Alguma outra coisa </p>
                    </div>
                </section>
                <section className="separator">
                <hr id="hr"/>
                </section>
                <section id="sectionMap">
                    <div className="content" style={{textAlign:'right'}}>
                        <p className="textCinzaEscuro">Alguma coisa </p>
                        <p className="textCinza">Alguma outra coisa </p>
                    </div>
                    <div className="circle"></div>
                    <div className="content">
                        <p className="textGold" >Novembro </p>
                        <p className="textGold" >2021 </p>
                    </div>
                </section>
                <section className="separator">
                <hr id="hr"/>
                </section>
                <section id="sectionMap">
                    <div className="content" style={{textAlign:'right'}}>
                        <p className="textGold" >Dezembro</p>
                        <p className="textGold" >2021 </p>
                    </div>
                    <div className="circle"></div>
                    <div className="content" >
                        <p className="textCinzaEscuro">Alguma coisa </p>
                        <p className="textCinza">Alguma outra coisa </p>
                    </div>
                </section>
                <div className="espaco"/>
            </div>
        </div>
    </div>
</div>
    );
}

export default RoadMap;