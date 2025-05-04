import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Placeholder from 'react-bootstrap/Placeholder';
import './../styles/components/pages/Home.css';

function Home(props) {
    return (
        <main>
            <div className='principal'>
                < img src='/image/novedades/info.png' alt='info' />
                <h2>Núcleo Web: </h2>
                <h3>Transformando Ideas en Realidad Digital</h3>
                <p>En el corazón de la innovación tecnológica, nació Núcleo Web, una empresa dedicada a transformar ideas en realidades digitales,
                    se ha convertido en un referente en el mundo del desarrollo web.<hr />Hoy, Núcleo Web sigue creciendo y evolucionando, siempre con la mirada puesta en el futuro.
                    Con una base sólida de clientes satisfechos y un equipo talentoso y dedicado, la empresa está lista para enfrentar nuevos desafíos y seguir transformando ideas en realidades digitales.</p>
            </div>

            <div className="home">
                <Carousel>
                    {/* Primera imagen */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/image/body/body1.jpg"
                            alt="Primera imagen"
                        />
                        <Carousel.Caption>
                            <h3>Desarrollo & Hosting Web</h3>
                            <p>Brindamos Diseños a medida y Almacenamineto</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* Segunda imagen */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/image/logo/Logo1.png"
                            alt="Segunda imagen"
                        />
                        <Carousel.Caption>
                            <h3>Diseños de Logos</h3>
                            <p>Tambien Brindamos Diseños de Logos</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* Tercera imagen */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/image/novedades/1.jpg"
                            alt="Tercera imagen"
                        />
                        <Carousel.Caption>
                            <h3>Diseños Planos </h3>
                            <p>Brindamos Diseños de Planos en 3D</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* Cuarta imagen */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/image/body/body0.jpg"
                            alt="Cuarta imagen"
                        />
                        <Carousel.Caption>
                            <h3>Diseño Pagina </h3>
                            <p>Desarrollamos tu Web</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/*noticias */}
            <div className="d-flex justify-content-around">
                {/* Primera tarjeta */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/image/Logo-3D/L2.png" />
                    <Card.Body>
                        <Card.Title>Desarrolladores Web</Card.Title>
                        <Card.Text>
                            Este espacio está disponible para aquella empresa que desee publicitar y aparecer en nuestra página con un costo muy bajo y fijo.
                        </Card.Text>
                        {/* Botón para iniciar WhatsApp */}
                        <Button
                            variant="success"
                            href="https://wa.me/2664860525?text=Hola,%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web."
                            target="_blank"
                        >
                            Contactar por WhatsApp
                        </Button>
                    </Card.Body>
                </Card>
                {/* Segunda tarjeta con Placeholder */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/image/noticias/Musk.jpg" />
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                </Card>
            </div>

        </main>
    );
}

export default Home;
