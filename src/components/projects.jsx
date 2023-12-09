import React, { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './projects.css';

const Projects = () => {
  // 현재 선택된 카테고리 상태
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 프로젝트 목록 (예시 데이터)
  const projects = [
    { id: 1, title: 'S2S(SoundToShow)', category: 'javascript', imageUrl: 'img/projects/s2s.svg' },
    { id: 2, title: 'Face Manager.', category: 'react', imageUrl: 'img/projects/facemanager.svg' },
    { id: 3, title: 'Facebook-Issues', category: 'react', imageUrl: 'img/projects/facebook.svg' },
    { id: 4, title: 'My Portfolio', category: 'react', imageUrl: 'img/projects/myportfolio.svg' }
    // 추가 프로젝트...
  ];

  // 카테고리에 따라 프로젝트 필터링
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

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
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.imageUrl} alt={project.title} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;