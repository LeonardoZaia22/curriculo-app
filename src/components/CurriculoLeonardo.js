import React from 'react';
import { Link } from 'react-router-dom';

const CurriculoLeonardo = () => {
  return (
    <div className="container py-4">
      {/* Botão voltar e título */}
      <div className="text-center mb-4">
        <Link to="/" className="btn btn-outline-primary mb-3">
          ← Voltar para Home
        </Link>
        <h1 className="display-5 fw-bold text-primary">Leonardo Zaia Silva</h1>
        <p className="lead">Desenvolvedor Web | Técnico em Informática</p>
      </div>

      <div className="row">
        {/* Foto e informações pessoais */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <div className="mb-3">
                <div className="rounded-circle overflow-hidden mx-auto" style={{ width: '200px', height: '200px' }}>
                  <img 
                    src="/lz.jpg"
                    alt="Leonardo Zaia" 
                    className="img-fluid"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              </div>
              <h4 className="card-title mb-3">Informações Pessoais</h4>
              <p className="mb-2"><strong>Idade:</strong> 16 anos</p>
              <p className="mb-2"><strong>Email:</strong> leonardo.zzaia22@gmail.com</p>
              <p className="mb-2"><strong>Telefone:</strong> (11) 91202-1649</p>
              <p className="mb-2"><strong>Cidade:</strong> São Paulo, SP</p>
              
              <div className="mt-4">
                <h5>Redes Sociais</h5>
                <div className="d-flex justify-content-center gap-2 mt-2">
                  <a href="https://github.com/LeonardoZaia22" target="_blank" rel="noreferrer" 
                     className="btn btn-dark btn-sm">
                    <i className="bi bi-github"></i> GitHub
                  </a>
                  <a href="https://www.instagram.com/zaia_ls/" target="_blank" rel="noreferrer" 
                     className="btn btn-instagram btn-sm" style={{backgroundColor: '#E4405F', color: 'white'}}>
                    <i className="bi bi-instagram"></i> instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informações profissionais */}
        <div className="col-md-8">
          {/* Sobre Mim */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h4 className="card-title text-primary mb-3">
                <i className="bi bi-person-circle me-2"></i>
                Sobre Mim
              </h4>
              <p className="card-text">
                Meu nome é Leonardo Zaia Silva, tenho 16 anos e estou cursando Técnico em Informática na ETEC. 
                Sou uma pessoa adaptável e tenho facilidade em trabalhar em equipe. Estou sempre disposto a me 
                dedicar e aprimorar minhas habilidades em tecnologia, buscando me desenvolver constantemente.
              </p>
            </div>
          </div>

          {/* Experiências */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h4 className="card-title text-primary mb-3">
                <i className="bi bi-briefcase me-2"></i>
                Experiências
              </h4>
              <div className="mb-3">
                <h6><strong>Criação de Site</strong></h6>
                <p className="mb-1">Desenvolvi um site básico em 2024 utilizando HTML e CSS</p>
                <a href="https://github.com/LeonardoZaia22/MeuPrimeiroSite" target="_blank" rel="noreferrer" 
                   className="text-decoration-none">
                  <small>↗ Ver projeto no GitHub</small>
                </a>
              </div>
              
              <div className="mb-3">
                <h6><strong>Curso na Alura</strong></h6>
                <p>Desenvolvimento Web e Programação Visual com Scratch, focando na parte visual e aprendendo a criar interfaces interativas.</p>
              </div>
              
              <div>
                <h6><strong>Estudo na ETEC</strong></h6>
                <p>Estou aprofundando meus conhecimentos em lógica de programação com Python, desenvolvimento de interfaces web e aprendendo sobre gerenciamento de projetos com Kanban, Scrum e BPMN.</p>
              </div>
            </div>
          </div>

          {/* Habilidades e Educação lado a lado */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h4 className="card-title text-primary mb-3">
                    <i className="bi bi-tools me-2"></i>
                    Habilidades
                  </h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>HTML, CSS e JavaScript</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Python básico</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Photoshop e Illustrator</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Metodologias Ágeis</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Trabalho em equipe</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>Adaptabilidade</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h4 className="card-title text-primary mb-3">
                    <i className="bi bi-mortarboard me-2"></i>
                    Educação
                  </h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <h6 className="fw-bold">Ensino Fundamental</h6>
                      <p className="mb-0">Completo – 2023</p>
                    </li>
                    <li className="mb-3">
                      <h6 className="fw-bold">Curso na Alura</h6>
                      <p className="mb-0">Desenvolvimento Web e Scratch</p>
                    </li>
                    <li>
                      <h6 className="fw-bold">Técnico em Informática</h6>
                      <p className="mb-0">ETEC – Cursando</p>
                      <small>Lógica de Programação, Interfaces Web, Gerenciamento de Projetos</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculoLeonardo;