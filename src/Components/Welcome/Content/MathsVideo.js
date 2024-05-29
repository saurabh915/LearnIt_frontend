import React, { useState } from 'react';
import './MathsVideo.css';
import { Navigate } from 'react-router-dom';

const MathsVideo = () => {
  // Sample videos and descriptions for each lesson
  const lessons = [
    {
      id: 1,
      videoUrl: 'https://www.youtube.com/embed/1jXC7fdHg-I?si=C1gDotmMb1y7kwei" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Rational and Irrational numbers',
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/embed/97HpHx1JoWU?si=uNUTVj37SgXtAIde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Parallel lines and transversal.',
    },
    {
      id: 3,
      videoUrl: 'https://www.youtube.com/embed/3lg3GN4dQ-Y?si=ppqt8REwDe2GCn95" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Indices and Cube root ',
    },
    {
      id: 4,
      videoUrl: 'https://www.youtube.com/embed/1KSDm7CGUrY?si=9R7kep2ShYcP89AF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Altitudes and Medians of a triangle ',
    },
    {
      id: 5,
      videoUrl: 'https://www.youtube.com/embed/lwXo_eFaYJ0?si=qFEls6vd94s5ad7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Expansion formulae',
    },
    {
      id: 6,
      videoUrl: 'https://www.omegalearn.org/thebookofformulas?gad_source=1&gclid=CjwKCAjwuJ2xBhA3EiwAMVjkVMx1SvwZ4b1iPEsp1gd9oyBEibao78L4K6P4fF9pyM9urDcm-LOruBoCwqsQAvD_BwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'IMP formula book',
    },
    // Add more lessons as needed
  ];

  // State to track the selected lesson
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  // State to manage video playback
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle lesson selection
  const selectLesson = (lesson) => {
    setSelectedLesson(lesson);
    setIsPlaying(false); // Pause video when switching lessons
  };

  return (
    <div className="maths-video-container">
      <div className="lessons-container">
        <h2>Lessons</h2>
        <div className="lesson-buttons-container">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => selectLesson(lesson)}
              className={lesson.id === selectedLesson.id ? 'active' : ''}
            >
              {lesson.id === 6 ? 'Additional Student Material' : `Lesson ${lesson.id}`}
            </button>
          ))}
        </div>
      </div>
      <div className="video-description-container">
        <div className="video-container">
          <iframe
            title={`Lesson ${selectedLesson.id}`}
            width="560"
            height="315"
            src={selectedLesson.videoUrl}
            frameBorder="0"
            allowFullScreen
            className="video-player"
          />
        </div>
        <div className="description-container">
          <h2>Description</h2>
          <p>{selectedLesson.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MathsVideo;
