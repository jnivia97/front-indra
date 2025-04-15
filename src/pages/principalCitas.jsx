import React, { useEffect, useState } from "react";
import { getAllQuotes } from "../api/ApiGeneral";
import { Container, Typography, Button } from "@mui/material";
import CardCita from '../componets/CardCita';

const PrincipalCitas = () => {
  const [quotes, setQuotes] = useState({});

  const getQuotes = async () => {
    const data = await getAllQuotes();
    setQuotes(data[0]);
  };

  const addHistory = async () => {
    await getQuotes();
  };


  useEffect(() => {
    if (quotes.q && quotes.a) { 
      const valueLocal = localStorage.getItem('list');

      let list = [];

      if (valueLocal !== null) {
        try {
          list = JSON.parse(valueLocal);
        } catch (e) {
          list = [];
        }
      }

      list.push(quotes);
      localStorage.setItem('list', JSON.stringify(list));
    }
  }, [quotes]); 


  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Frases Emotivas</Typography>
      <Button variant="contained" disableElevation onClick={addHistory} sx={{ mb: 2 }}>
        Nueva Frase
      </Button>
      <CardCita phrase={quotes.q} autor={quotes.a} />
    </Container>
  );
};

export default PrincipalCitas;
