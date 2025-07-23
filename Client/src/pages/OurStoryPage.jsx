import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OurStoryPage = () => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pages/our-story")
      .then(res => setStory(res.data));
  }, []);

  if (!story) return <p>Loading...</p>;

  return (
    <section className="container py-5 mt-5">
      <h2 className="fw-bold mb-4">{story.title}</h2>
      {story.content.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </section>
  );
};

export default OurStoryPage;
