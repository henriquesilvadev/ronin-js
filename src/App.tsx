import React from 'react';
import './css/bootstrap.min.css';
import './css/owl.carousel.min.css';
import './css/magnific-popup.css';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/nice-select.css';
import './css/flaticon.css';
import './css/gijgo.css';
import './css/animate.min.css';
import './css/slick.css';
import './css/slicknav.css';
import './css/style.css';


import logo from './img/logo.png';
import svg_icon_1 from './img/svg_icon/1.svg';
import svg_icon_2 from './img/svg_icon/2.svg';
import svg_icon_3 from './img/svg_icon/3.svg';
import henrique_foto from './img/team/yo.png';
import maria_foto from './img/team/my_cat.png';

function App() {
  return (
    <section>
      <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid p-0">
                    <div className="row align-items-center no-gutters">
                        <div className="col-xl-2 col-lg-2">
                            <div className="logo-img">
                                <a href="#">
                                    <img src={ logo } alt=""/>
                                    <h3 style={{ color: '#FFF'}}>Code School</h3>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="main-menu  d-none d-lg-block text-center">
                                <nav>
                                    <ul id="navigation">
                                        <li><a className="active" href="index.html">Principal</a></li>
                                        <li><a href="#services">Nossos Serviços</a></li>
                                        {/* <li><a href="Portfolio.html">Portfolio</a></li> */}
                                        <li><a href="#">Conheça-nos <i className="ti-angle-down"></i></a>
                                            <ul className="submenu">
                                                <li><a href="#about">Sobre Nós</a></li>
                                                <li><a href="#work">Como Trabalhamos</a></li>
                                                <li><a href="#team">Nosso Time</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog.html">blog</a></li>
                                        <li><a href="#contact">Entre em Contato</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            <div className="log_chat_area d-flex align-items-end">
                                <a href="#" data-scroll-nav="0" className="say_hi">Cursos On-Line</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>

    <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
            <div className="container">
                <div className="row align-items-center justify-content-start">
                    <div className="col-lg-10 col-md-10">
                        <div className="slider_text">
                            <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                              Consultoria de Software, resolvemos problemas complexos com o uso de tecnologia.
                            </h3>
                            <a className="boxed-btn3 wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".2s" href="portfolio.html">Apresentação</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="service_area" id="services">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section_title text-center mb-70">
                        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >Nossos Serviços</h4>
                        <blockquote style={{ fontSize: '20px' }} className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                        Estamos descobrindo maneiras melhores de desenvolver
                        software, fazendo-o nós mesmos e ajudando outros a
                        fazerem o mesmo.</blockquote>
                        <small><a href="https://agilemanifesto.org/">Manifesto para Desenvolvimento Ágil de Software</a></small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".4s">
                        <div className="icon">
                            <img src={ svg_icon_1 } alt="" />
                        </div>
                        <h3>Consultoria em Arquitetura</h3>
                        <p>Projetos multidisciplinares, coordenação e compatibilização de projetos de software,
                          de desenvolvimento e infraestrutura. Recursos alinhados às projeções de investimentos e
                          custos operacionais, assim como a complexidade técnica de cada etapa. Verificações e
                          análises de valor ao longo de todo o ciclo de vida dos projetos.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <div className="icon">
                            <img src={ svg_icon_2 } alt="" />
                        </div>
                        <h3>Desenvolvimento de Software Ágil</h3>
                        <p>O acompanhamento propõe uma discussão sobre as tecnologias abordando
                          o uso dos ferramentas como meio para solução de questões poéticas.
                          Partindo da análise comparativa de obras de software e de paralelos entre
                          produção e acompanhamento tem como objetivo apresentar o universo de
                          dominio da solução ampliando suas possibilidades no mundo atual.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center wow fadeInRight" data-wow-duration="1.2s" data-wow-delay=".4s">
                        <div className="icon">
                            <img src={ svg_icon_3 } alt="" />
                        </div>
                        <h3>Consultoria em Gestão de Backlog</h3>
                        <p>O ritmo da mudança está aumentando.
                          O Scrum é projetado para tornar a inovação a norma,
                          não a exceção. Aumentando a produtividade para que você
                          possa colocar sua criação no mercado mais rapidamente.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="about_area" id="about">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-lg-5 offset-lg-1">
                    <div className="about_info">
                        <div className="section_title white_text">
                            <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Sobre Nós</span>
                            <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">Capacitar indivíduos</h3>
                            <p className="mid_text wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Esse é nosso DNA, compartilhar nosso trabalho bem como criar conteúdo exclusivo, original, relevante e de qualidade para toda a comunidade. Por meio de cursos, eventos, artigos, notícias e vídeos, buscamos unir todos em propósitos em comum, tendo a justiça social e diversidade humana como principais objetos de foco em todas as iniciativas.</p>
                            <p className="last_text wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">“O que fizeram comigo me criou, é um principio básico do universo, que toda ação cria uma reação igual e oposta!". - <small>V de Vingança</small> -</p>
                            {/* <a href="#" className="boxed-btn3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">Cursos On-Line</a> */}
                            <div className="video_watch d-flex align-items-center">
                              <div className="play_btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s"> "Todos nesse país deveriam aprender como programar..." </span>
                                <a href="https://www.youtube.com/watch?v=Z6diqnoDl1Q" className="video_icon popup-video boxed-btn3"> <i className="fa fa-play"></i> </a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <div className="portfolio_image_area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section_title text-center mb-90">
                        <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Featured Works</h3>
                        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">Tour function information without cross action media value quickly maximize timely deliverables.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="single_Portfolio wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <div className="portfolio_thumb">
                            <img src="img/portfolio/1.png" alt="" />
                        </div>
                        <div className="portfolio_hover">
                            <div className="title">
                                <span>App Design</span>
                                    <h3>Colorlib Mobile App</h3>
                                    <a className="boxed-btn3" href="portfolio_details.html">View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_Portfolio wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <div className="portfolio_thumb">
                            <img src="img/portfolio/2.png" alt="" />
                        </div>
                        <div className="portfolio_hover">
                            <div className="title">
                                <span>App Design</span>
                                    <h3>Colorlib Mobile App</h3>
                                    <a className="boxed-btn3" href="portfolio_details.html">View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-lg-4">
                    <div className="single_Portfolio wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                        <div className="portfolio_thumb">
                            <img src="img/portfolio/3.png" alt="" />
                        </div>
                        <div className="portfolio_hover">
                            <div className="title">
                                <span>App Design</span>
                                    <h3>Colorlib Mobile App</h3>
                                    <a className="boxed-btn3" href="portfolio_details.html">View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-lg-4">
                    <div className="single_Portfolio wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                        <div className="portfolio_thumb">
                            <img src="img/portfolio/4.png" alt="" />
                        </div>
                        <div className="portfolio_hover">
                            <div className="title">
                                <span>App Design</span>
                                    <h3>Colorlib Mobile App</h3>
                                    <a className="boxed-btn3" href="portfolio_details.html">View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-lg-4">
                    <div className="single_Portfolio wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                        <div className="portfolio_thumb">
                            <img src="img/portfolio/5.png" alt="" />
                        </div>
                        <div className="portfolio_hover">
                            <div className="title">
                                <span>App Design</span>
                                    <h3>Colorlib Mobile App</h3>
                                    <a className="boxed-btn3" href="portfolio_details.html">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 */}
    <div className="how_we_work_area" id="work">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="work_info">
                        <div className="section_title">
                            <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">Como nós trabalhamos</h3>
                            <p className="mid_text wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">“Trabalhamos com empresas em todas as etapas do processo – da
                            identificação e validação até a efetiva resolução do problema. Temos todos as ferramentas e conhecimentos necessários para co-criar a
                            melhor solução com você, seja ela para uso interno no seu negócio ou para ganhar o mercado.</p>
                        </div>
                        <div className="video_watch d-flex align-items-center">
                          <div className="play_btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                            <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s"> Vamos conversar! </span>
                            <a href="https://www.youtube.com/watch?v=D7tF-cY2M9o" className="video_icon popup-video"> <i className="fa fa-play"></i> </a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="team_area" id="team">
        <div className="container">
            <div className="row justify-content-center" style={{ background: '#000', opacity: 0.8 }}>
                <div className="col-lg-6">
                    <div className="section_title text-center mb-90" style={{ marginTop: '20px' }}>
                        <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style={{ color: '#FFF' }}>Nosso Time</h3>
                        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" style={{ color: '#FFF' }}>“Indivíduos e interações mais que processos e ferramentas”.</p>
                        <small>– <a href="https://agilemanifesto.org/" target="_blank"  rel="noopener noreferrer" style={{ color: '#FFF' }}>Manifesto Ágil</a> -</small>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="single_team wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="team_thumb">
                            <img src={ henrique_foto } alt="" />
                            <div className="team_hover">
                                <div className="hover_inner text-center">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/company/henriquesilvadev" target="_blank"  rel="noopener noreferrer"> <i className="fa fa-linkedin"></i> </a></li>
                                        <li><a href="https://twitter.com/dev_henrique" target="_blank"  rel="noopener noreferrer"> <i className="fa fa-twitter"></i> </a></li>
                                        <li><a href="https://www.instagram.com/henriquesilva_dev/" target="_blank"  rel="noopener noreferrer"> <i className="fa fa-instagram"></i> </a></li>
                                        <li><a href="https://github.com/henriquesilvadev" target="_blank"  rel="noopener noreferrer"> <i className="fa fa-github"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="team_title text-center">
                            <h2>Henrique Silva</h2>
                            <h3>Founder & CEO</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single_team wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <div className="team_thumb">
                            <img src={ maria_foto } alt="" />
                            <div className="team_hover">
                                <div className="hover_inner text-center">
                            <ul>
                                <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                <li><a href="#"> <i className="fa fa-linkedin"></i> </a></li>
                                <li><a href="#"> <i className="fa fa-google-plus"></i> </a></li>
                            </ul>
                    </div>
                  </div>
                </div>
                <div className="team_title text-center">
                  <h2>Maria Chagas</h2>
                  <h3>CFO</h3>
                </div>
              </div>
            </div>
            {/*<div className="col-lg-3 col-md-6">
              <div className="single_team wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                <div className="team_thumb">
                  <img src="img/team/3.png" alt="" />
                  <div className="team_hover">
                    <div className="hover_inner text-center">
                      <ul>
                        <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                        <li><a href="#"> <i className="fa fa-linkedin"></i> </a></li>
                        <li><a href="#"> <i className="fa fa-google-plus"></i> </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team_title text-center">
                  <h3>Roman Solo</h3>
                  <p>Wordpress Developer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single_team wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                <div className="team_thumb">
                  <img src="img/team/4.png" alt="" />
                  <div className="team_hover">
                    <div className="hover_inner text-center">
                      <ul>
                        <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                        <li><a href="#"> <i className="fa fa-linkedin"></i> </a></li>
                        <li><a href="#"> <i className="fa fa-google-plus"></i> </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team_title text-center">
                  <h3>Yeald Kin</h3>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="testimonial_area ">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
               <img src="./img/testmonial/banner2.jpg" />
            </div>
            {/*  <div className="testmonial_active owl-carousel">
                <div className="single_carousel">
                  <div className="single_testmonial text-center">
                    <div className="quote">
                      <img src={ js_logo } alt="" />
                    </div>
                    <p>Como o JavaScript é uma ótima linguagem para iniciantes em codificação, reunimos alguns dos
                      melhores recursos de aprendizado e criamos um curso sobre JavaScript para ajudar os novos
                      desenvolvedores a começar a trabalhar.
                    </p>
                    <div className="testmonial_author">
                      <div className="thumb">
                        <img src={ js_logo } alt="" />
                      </div>
                      <h3>Robert Thomson</h3>
                      <span>Business Owner</span>
                    </div>
                  </div>
                </div>
                <div className="single_carousel">
                  <div className="single_testmonial text-center">
                    <div className="quote">
                      <img src={ node_logo } alt="" />
                    </div>
                    <p>Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos,
                      criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente para os servidores. </p>
                    <div className="testmonial_author">
                      <div className="thumb">
                        <img src="img/testmonial/thumb.png" alt="" />
                      </div>
                      <h3>Robert Thomson</h3>
                      <span>Business Owner</span>
                    </div>
                  </div>
                </div>
                <div className="single_carousel">
                  <div className="single_testmonial text-center">
                    <div className="quote">
                      <img src={ graphql_logo } alt="" />
                    </div>
                    <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br />
                          sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br />
                          Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                    <div className="testmonial_author">
                      <div className="thumb">
                        <img src="img/testmonial/thumb.png" alt="" />
                      </div>
                      <h3>Robert Thomson</h3>
                      <span>Business Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div data-scroll-index="0" className="get_in_tauch_area" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb-90">
                <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Entre em contato conosco</h3>
                <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">Se você gostaria de obter maiores informações sobre nossos serviços,
                  precisa de detalhes sobre os planos de ensino ou tem dúvidas sobre qual é a melhor alternativa para sua empresa, nossa equipe ficará feliz em retornar seu contato,
                  onde um dos nossos consultores fará o possível para ajudá-lo.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="touch_form">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single_input wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <input type="text" placeholder="Nome Social" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_input wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <input type="email" placeholder="Principal endereço de E-mail" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single_input wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                        <input type="email" placeholder="Assunto"/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single_input wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                        <textarea name="" id="" cols={ 30 } placeholder="Descrição" rows={ 10 }></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="submit_btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                        <button className="boxed-btn3" type="submit">Enviar mensagem</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-3">
                <div className="footer_logo wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                  <a href="index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-9">
                <div className="menu_links">
                  <ul>
                    <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".8s" href="#work">Como Trabalhamos</a></li>
                    <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".4s" href="#services">Nossos Serviços</a></li>
                    {/* <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".6s" href="#">Portfolio</a></li> */}
                    {/* <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s" href="#">Blog</a></li> */}
                    <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.1s" href="#team">Nosso Time</a></li>
                    <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s" href="#about">Sobre Nós</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="socail_links">
                  <ul>
                    <li><a className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" href="#"> <i className="fa fa-facebook"></i> </a></li>
                    <li><a className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" href="#"> <i className="fa fa-twitter"></i> </a></li>
                    <li><a className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s" href="#"> <i className="fa fa-instagram"></i> </a></li>
                    <li><a className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" href="#"> <i className="fa fa-google-plus"></i> </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="footer_border"></div>
            <div className="row">
              <div className="col-xl-12">
                <p className="copy_right text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s">

                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default App;
