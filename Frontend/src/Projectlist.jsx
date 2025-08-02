import React, { useEffect, useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('${process.env.REACT_APP_API_BASE_URL}/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading projects...</div>;

  return (
    <ul>
      {projects.map(project => (
        <li key={project._id}>
          {project.name} – {project.company} – {project.email} – {project.contactNumber} – {project.idea}
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
