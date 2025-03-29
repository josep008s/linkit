'use client';

import { FaBook, FaLaptopCode, FaMicrophone, FaChalkboardTeacher, FaCalendarAlt, FaPodcast, FaFileAlt, FaTools } from 'react-icons/fa';
import ProfileHeader from './components/ProfileHeader';
import LinkButton from './components/LinkButton';
import LinkSection from './components/LinkSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="w-full max-w-md mx-auto">
        {/* Encabezado del perfil */}
        <ProfileHeader />
        
        {/* Sección: Contenido Educativo */}
        <LinkSection title="Contenido Educativo" delay={0.2}>
          <LinkButton href="https://ejemplo.com/curso" icon={<FaChalkboardTeacher />}>
            Curso de Acústica Avanzada
          </LinkButton>
          <LinkButton href="https://ejemplo.com/ebook" icon={<FaBook />}>
            E-book: IA para Emprendedores
          </LinkButton>
          <LinkButton href="https://ejemplo.com/webinar" icon={<FaCalendarAlt />}>
            Próximos Webinars
          </LinkButton>
        </LinkSection>
        
        {/* Sección: Herramientas y Recursos */}
        <LinkSection title="Herramientas y Recursos" delay={0.4}>
          <LinkButton href="https://ejemplo.com/calculadora" icon={<FaTools />}>
            Calculadora de Acústica
          </LinkButton>
          <LinkButton href="https://ejemplo.com/plantillas" icon={<FaFileAlt />}>
            Plantillas de Documentación
          </LinkButton>
        </LinkSection>
        
        {/* Sección: Mis Proyectos */}
        <LinkSection title="Mis Proyectos" delay={0.6}>
          <LinkButton href="https://ejemplo.com/podcast" icon={<FaPodcast />}>
            Podcast: Ingeniería y Emprendimiento
          </LinkButton>
          <LinkButton href="https://ejemplo.com/blog" icon={<FaLaptopCode />}>
            Blog Técnico
          </LinkButton>
          <LinkButton href="https://ejemplo.com/portfolio" icon={<FaMicrophone />}>
            Portafolio de Proyectos Acústicos
          </LinkButton>
        </LinkSection>
        
        {/* Pie de página con redes sociales */}
        <Footer />
      </div>
    </div>
  );
}