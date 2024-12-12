// // src/Player.js

import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Player = ({
  name = "Nom inconnu",
  team = "Équipe inconnue",
  nationality = "Nationalité inconnue",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/150",
}) => {
  const cardStyle = {
    width: "18rem",
    margin: "10px",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // Animation au survol
      whileTap={{ scale: 0.95 }} // Animation au clic
      initial={{ opacity: 0, y: 50 }} // Position initiale
      animate={{ opacity: 1, y: 0 }} // Position finale
      transition={{ duration: 0.5 }} // Durée de l'animation
      style={cardStyle}
    >
      <Card>
        <Card.Img variant="top"
         src={imageUrl} alt={`${name}`}
        style={{ width: 286.4, height: 190.58 }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Équipe :</strong> {team} <br />
            <strong>Nationalité :</strong> {nationality} <br />
            <strong>Numéro :</strong> {jerseyNumber} <br />
            <strong>Âge :</strong> {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

// Définir les types des props
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default Player;
