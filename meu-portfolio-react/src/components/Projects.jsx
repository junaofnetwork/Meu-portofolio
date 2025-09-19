import React from 'react';

const projects = [
  {
    title: 'Controle de Gastos',
    description: 'Uma aplicação web para controlar gastos pessoais, categorizando e calculando totais.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: '#',
  },
  {
    title: 'Portfólio Pessoal',
    description: 'Este portfólio, construído com React e Tailwind CSS para uma apresentação profissional.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    link: '#',
  },
  {
    title: 'Calculadora IMC',
    description: 'Uma calculadora simples para calcular o Índice de Massa Corporal.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
