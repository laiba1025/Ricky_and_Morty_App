// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Profile = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
       <Header/> 
      {character ? (
        <div>
          <h2>{character.name}'s Profile</h2>
          <img src={character.image} alt={character.name} />
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
          <Link to="/">Back to Home</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
