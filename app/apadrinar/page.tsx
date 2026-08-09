import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ApadrinarPage() {
    return (
        <>
            <Navbar />
            <main className="sponsor-page">
                {/* Breadcrumbs */}
                <div className="sponsor-breadcrumbs">
                    <span>Inicio &gt; Adoptar</span>
                </div>

                {/* Hero Section */}
                <section className="sponsor-hero">
                    <div className="sponsor-hero-left">
                        <h1>Apadrina y cambia una vida</h1>
                        <p>Al apadrinar brindas un apoyo constante a un animal que lo necesita. Tu aporte mensual nos ayuda a cubrir su alimentación, atención médica y cuidados hasta que encuentre su hogar.</p>
                    </div>
                    <div className="sponsor-hero-right">
                        <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80" alt="Puppy" className="sponsor-hero-img" />
                        <div className="sponsor-quote">
                            Con tu apoyo puedo tener mejor mañana.
                        </div>
                    </div>
                </section>

                {/* Impact Areas */}
                <section className="sponsor-impact">
                    <div className="impact-item">
                        <div className="impact-icon"><i className="fa-solid fa-bowl-food"></i></div>
                        <h3>Alimentación</h3>
                    </div>
                    <div className="impact-item">
                        <div className="impact-icon"><i className="fa-solid fa-stethoscope"></i></div>
                        <h3>Atención médica</h3>
                    </div>
                    <div className="impact-item">
                        <div className="impact-icon"><i className="fa-solid fa-house-chimney-dog"></i></div>
                        <h3>Cuidados y Refugios</h3>
                    </div>
                </section>

                {/* Main Bottom Section */}
                <section className="sponsor-bottom-layout">
                    {/* Left Column */}
                    <div className="sponsor-bottom-left">
                        <h2>Conoce los animales que puedes apadrinar</h2>
                        
                        <div className="sponsor-cards-grid">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="sponsor-animal-card">
                                    <img src={`https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&q=80`} alt="Dog" className="sponsor-card-img" />
                                    <div className="sponsor-card-content">
                                        <h4>[NOMBRE / EDAD]</h4>
                                        <p>[DESCRIPCIÓN PEQUEÑA]</p>
                                        <Link href="/donaciones" className="btn-primary-block sponsor-btn">Apadrinar</Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="sponsor-benefits">
                            <h3>Tu apadrinamiento incluye</h3>
                            <div className="benefits-row">
                                <div className="benefit-item">Fotos y noticias</div>
                                <div className="benefit-item">Certificado digital</div>
                                <div className="benefit-item">Impacto real</div>
                                <div className="benefit-item">Eres parte de la familia</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <aside className="sponsor-sidebar">
                        <h2>¿Cómo funciona?</h2>
                        
                        <div className="steps-list">
                            <div className="step-item">
                                <h4>Elige un ahijado</h4>
                                <p>Escoge el animal que desees apadrinar.</p>
                            </div>
                            <div className="step-item">
                                <h4>Aporta mensualmente</h4>
                                <p>Tu apoyo mensual hace la diferencia en su bienestar.</p>
                            </div>
                            <div className="step-item">
                                <h4>Recibe actualizaciones</h4>
                                <p>Te enviaremos fotos e información de tu ahijado.</p>
                            </div>
                            <div className="step-item">
                                <h4>Cambia su futuro</h4>
                                <p>Con tu ayuda tendrán más oportunidades de encontrar un hogar.</p>
                            </div>
                        </div>
                    </aside>
                </section>
            </main>
            <Footer />
        </>
    );
}
