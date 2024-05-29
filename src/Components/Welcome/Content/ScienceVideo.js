import React, { useState } from 'react';
import './MathsVideo.css';
const ScienceVideo = () => {
  // Sample videos and descriptions for each lesson
  const lessons = [
    {
      id: 1,
      videoUrl: 'https://www.youtube.com/embed/U35-jiwp_tU?si=AjjEB9Q7_CUtlu1h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Crop Production And Management',
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/embed/MBNpEMlcxcQ?si=X3MUKMadZPkeOHgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',

      description: 'Health and Diseases',
    },
    {
      id: 3,
      videoUrl: 'https://www.youtube.com/embed/S9BBqETkuIw?si=SCKMswH5fYacFf9n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Force & Pressure ',
    }, {
      id: 4,
      videoUrl: 'https://www.youtube.com/embed/bWVBfI0x4KM?si=VaPrFXrsHeXNRuov" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Current electricity and magnetism',
    }, {
      id: 5,
      videoUrl: 'https://www.youtube.com/embed/2BAmb9NT2HU?si=e_rX65hDf1xmYHh5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Inside the Atom ',
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
              Lesson {lesson.id}
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

export default ScienceVideo;
