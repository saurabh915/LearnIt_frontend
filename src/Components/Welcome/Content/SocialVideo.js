import React, { useState } from 'react';
import './MathsVideo.css';
const SocialVideo = () => {
  // Sample videos and descriptions for each lesson
  const lessons = [
    {
      id: 1,
      videoUrl: 'https://www.youtube.com/embed/86tBrwPGEdU?si=6rbe_427qjizLdVR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: ' Sources of History ',
      
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/embed/X3vbp_8ReHI?si=3bKCHbhOzx-gFJ3K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',

      description: ' Europe & India',
    },
    {
        id: 3,
        videoUrl: 'https://www.youtube.com/embed/nD7CSDxzK7I?si=ZvhwZ0pI39jhUDrx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      description: 'Social and Religious Reforms',
       
      }, {
        id: 4,
        videoUrl: 'https://www.youtube.com/embed/b5Wkb0boQTo?si=0IlWk9ZrTXugfd83" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        description: 'Structure of Ocean Floor ',
      }, {
        id: 5,
        videoUrl: 'https://www.youtube.com/embed/nD7CSDxzK7I?si=g2rWXD51Tl65geqF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        description: 'Social and Religious Reforms',
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

export default SocialVideo;
