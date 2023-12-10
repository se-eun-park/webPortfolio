import React, { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'animate.css';
import './projects.css';

const Projects = () => {
  // 현재 선택된 카테고리 상태
  const [selectedCategory, setSelectedCategory] = useState('all');
  // 마우스 감지
  const [hoveredProject, setHoveredProject] = useState(null);

  // 프로젝트 목록
  const projects = [
    { id: 1, title: 'S2S(SoundToShow)', category: 'javascript',language: 'Bootstrap / Python', imageUrl: 'img/projects/s2s.svg', 
    subtitle: '경증 청각장애인을 위한 배리어프리 서비스',
    description: '이 프로젝트는 블라블라블라오아ㅏㅇ와아아앙아아아아아앙아아아아아아아아아아아아아우우우우dhdhdhdhdhdhdhdhdhdh',
    images: [] },

    { id: 2, title: 'Face Manager.', category: 'react',language: 'React JS / Python', imageUrl: 'img/projects/facemanager.svg',
    subtitle: '경증 청각장애인을 위한 배리어프리 서비스',
    description: '이 프로젝트는 블라블라블라오아ㅏㅇ와아아앙아아아아아앙아아아아아아아아아아아아아우우우우',
    images: [] },

    { id: 3, title: 'Facebook-Issues', category: 'react',language: 'React JS', imageUrl: 'img/projects/facebook.svg',
    subtitle: '경증 청각장애인을 위한 배리어프리 서비스',
    description: '이 프로젝트는 블라블라블라오아ㅏㅇ와아아앙아아아아아앙아아아아아아아아아아아아아우우우우',
    images: [] },

    { id: 4, title: 'My Portfolio', category: 'react',language: 'React JS', imageUrl: 'img/projects/myportfolio.svg',
    subtitle: '경증 청각장애인을 위한 배리어프리 서비스',
    description: '이 프로젝트는 블라블라블라오아ㅏㅇ와아아앙아아아아아앙아아아아아아아아아아아아아우우우우',
    images: [] }
  ];

  // 카테고리에 따라 프로젝트 필터링
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  const [selectedProject, setSelectedProject] = useState(null);

    // 상세보기
  const learnMore = (id) => {
    const project = projects.find(p => p.id === id);
    setSelectedProject(project); 
  };

  return (
    <div className='projectsBackground'>
      {/* 네비게이션 바 */}
      <div className='projectsNavContainer'>
        <nav className='projectsNav'>
          <div className={`projectSkill ${selectedCategory === 'all' ? 'selected' : ''}`} onClick={() => setSelectedCategory('all')}>&nbsp;&nbsp;&nbsp;&nbsp;ALL&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className={`projectSkill ${selectedCategory === 'react' ? 'selected' : ''}`} onClick={() => setSelectedCategory('react')}>&nbsp;&nbsp;&nbsp;&nbsp;REACT-JS&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className={`projectSkill ${selectedCategory === 'javascript' ? 'selected' : ''}`} onClick={() => setSelectedCategory('javascript')}>&nbsp;&nbsp;&nbsp;&nbsp;JAVASCRIPT&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </nav>
      </div>

      {/* 필터링된 프로젝트 표시 */}
      <div className='projects'>
      <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 0.3 }}
              className='projectCard'
              onMouseEnter={() => setHoveredProject(project.id)} // 마우스 오버 상태 설정
              onMouseLeave={() => setHoveredProject(null)}     // 마우스 아웃 상태 설정
            >
              <img src={project.imageUrl} alt={project.title} />
              <div className='projectInfo'>
                <div className={`projectTextContainer ${hoveredProject === project.id ? 'fadeInDown' : ''}`}>
                  <div className='projectTitle'>{project.title}</div>
                  <div className='projectLanguage'>{project.language}</div>
                </div>
                <button className={`learnMoreButton ${hoveredProject === project.id ? 'fadeInUp' : ''}`} onClick={() => learnMore(project.id)}>LEARN MORE</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {selectedProject && (
          <div className='projectDetails'>
            <span className='projectDetailsBackground'></span>
            <h2 className='projectDetailsTitle'>{selectedProject.title}</h2>
            <p className='projectDetailsSubtitle'>{selectedProject.subtitle}</p>
            <p className='projectDetailsDescription'>{selectedProject.description}</p>
            {/* {selectedProject.images.map((image, index) => (
              <img key={index} src={image} alt={`Project Image ${index + 1}`} />
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;