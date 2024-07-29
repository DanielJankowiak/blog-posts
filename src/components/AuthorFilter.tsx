import React from 'react';
import useAuthors from '../hooks/useAuthors';
import './AuthorFilter.css';

type Props = {
  setSelectedAuthor: (id: number | null) => void;
};

const AuthorFilter = ({ setSelectedAuthor }: Props ) => {
  const { authors, loading, error } = useAuthors();

  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error loading authors: {error}</p>;

  return (
    <div className="selectContainter">
    <select onChange={(e) => setSelectedAuthor(Number(e.target.value) || null)}>
      <option value="">All Authors</option>
      {authors.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
      ))}
    </select>
    </div>
  );
};

export default AuthorFilter;