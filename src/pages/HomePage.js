import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Container className="text-center">
        <h1>Welcome to the Arithmetic Calculator</h1>
      </Container>
    </div>
  );
}

export default HomePage;
