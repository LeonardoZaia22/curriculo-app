import React from 'react';
import { Link } from 'react-router-dom';

const CurriculoJoao = () => {
  return (
    <div className="container py-4">
      {/* Botão voltar e título */}
      <div className="text-center mb-4">
        <Link to="/" className="btn btn-outline-primary mb-3">
          ← Voltar para Home
        </Link>
        <h1 className="display-5 fw-bold text-primary">João Paulo Souza Azevedo</h1>
        <p className="lead">Desenvolvedor Web | Estudante de Informática</p>
      </div>

      <div className="row">
        {/* Foto e informações pessoais */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <div className="mb-3">
                <div className="rounded-circle overflow-hidden mx-auto" style={{ width: '200px', height: '200px' }}>
                  <img 
                    src="/jp.jpg" 
                    alt="João Paulo" 
                    className="img-fluid"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://ui-avatars.com/api/?name=João+Paulo&background=28a745&color=fff&size=200&bold=true";
                    }}
                  />
                </div>
              </div>
              <h4 className="card-title mb-3">Informações Pessoais</h4>
              <p className="mb-2"><strong>Idade:</strong> 17 anos</p>
              <p className="mb-2"><strong>Email:</strong> joao.p.azevedo2107@gmail.com</p>
              <p className="mb-2"><strong>Endereço:</strong> Rio Grande da Serra, SP</p>
              <p className="mb-2"><strong>Idiomas:</strong> Português e Inglês</p>
              
              <div className="mt-4">
                <h5>Contato</h5>
                <div className="d-flex flex-column gap-2 mt-2">
                  <a href="mailto:joao.p.azevedo2107@gmail.com" 
                     className="btn btn-danger btn-sm">
                    <i className="bi bi-envelope"></i> Gmail
                  </a>
                  <a href="https://github.com/JoaoPaulo2107" target="_blank" rel="noreferrer" 
                     className="btn btn-dark btn-sm">
                    <i className="bi bi-github"></i> GitHub
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
                Meu nome é João Paulo, tenho 17 anos e curso Informática para a Web na ETEC Maria Cristina Medeiros. 
                Tenho noções básicas de HTML, CSS, Python e tenho inglês intermediário. Escolhi a área por gostar de trabalhar 
                no computador e ter interesse em trabalho remoto. Sou apaixonado por webtoons, mangás, manhwas, filmes e jogos.
                Aprendo rápido, tenho boa comunicação e facilidade para interagir com outras pessoas.
              </p>
            </div>
          </div>

          {/* Cursos */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h4 className="card-title text-primary mb-3">
                <i className="bi bi-book me-2"></i>
                Cursos e Formação
              </h4>
              
              <div className="mb-3">
                <h6><strong>LS Idiomas</strong></h6>
                <p className="mb-1">Inglês desde 2022 (3 anos de estudo)</p>
                <small className="text-muted">Nível: Intermediário</small>
              </div>
              
              <div className="mb-3">
                <h6><strong>ETEC Maria Cristina Medeiros</strong></h6>
                <p className="mb-1">Ensino Médio com Habilitação em Informática para Web</p>
                <small className="text-muted">2024 - Atual</small>
              </div>
              
              <div>
                <h6><strong>SESI</strong></h6>
                <p className="mb-0">Ensino Fundamental completo na rede SESI em Ribeirão Pires</p>
              </div>
            </div>
          </div>

          {/* Habilidades lado a lado */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h4 className="card-title text-primary mb-3">
                    <i className="bi bi-heart me-2"></i>
                    Competências Socioemocionais
                  </h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Bom tom de voz</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Boa comunicação</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Sociável</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Proativo</li>
                    <li><i className="bi bi-check-circle text-success me-2"></i>Aprendizagem rápida</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h4 className="card-title text-primary mb-3">
                    <i className="bi bi-code-slash me-2"></i>
                    Capacidades Técnicas
                  </h4>
                  <div className="mb-3">
                    <h6 className="fw-bold">JavaScript</h6>
                    <p className="mb-0 small">Iniciante, desenvolvendo projetos simples com HTML e CSS</p>
                  </div>
                  
                  <div className="mb-3">
                    <h6 className="fw-bold">Photoshop</h6>
                    <p className="mb-0 small">Possui noções básicas de edição de imagens</p>
                  </div>
                  
                  <div className="mb-3">
                    <h6 className="fw-bold">Python</h6>
                    <p className="mb-0 small">Entende laços de repetição e condicionais</p>
                  </div>
                  
                  <div>
                    <h6 className="fw-bold">Inglês</h6>
                    <p className="mb-0 small">Nível intermediário de compreensão e conversação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title text-primary mb-3">
                <i className="bi bi-geo-alt me-2"></i>
                Localização
              </h4>
              <p className="mb-3">Rua Prefeito Francisco Arnoni, Vila Lavínia, 303 – Rio Grande da Serra, SP</p>
              <div className="ratio ratio-16x9">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculoJoao;