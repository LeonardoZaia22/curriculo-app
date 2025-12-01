import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">Bem-vindo ao Portal de Currículos</h1>
        <p className="lead">Aqui você pode visualizar os currículos profissionais de Leonardo Zaia Silva e João Paulo Souza Azevedo.</p>
        <hr className="my-4" />
        <p>Selecione um dos currículos abaixo para conhecer mais sobre cada profissional:</p>
        
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h2 className="card-title">Leonardo Zaia Silva</h2>
                <p className="card-text">Desenvolvedor Web | Técnico em Informática | 15 anos</p>
                <Link to="/curriculo-leonardo" className="btn btn-primary btn-lg">
                  Ver Currículo Completo
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h2 className="card-title">João Paulo Souza Azevedo</h2>
                <p className="card-text">Desenvolvedor Web | Estudante de Informática | 16 anos</p>
                <Link to="/curriculo-joao" className="btn btn-primary btn-lg">
                  Ver Currículo Completo
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-5">
          <h3>Sobre este Portal</h3>
          <p>Este site foi desenvolvido em React para demonstrar habilidades em desenvolvimento web front-end.</p>
          <p>Os currículos apresentados são de estudantes talentosos da área de tecnologia.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;