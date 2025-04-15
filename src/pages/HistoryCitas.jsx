import React, { useEffect, useState } from "react";
import { Container, List, ListItem, Typography } from "@mui/material";
import CardCita from "../componets/CardCita";

const Historycitas = () => {
  const [listHistory, setListHistory] = useState([]);

  const getAllHistory = () => {
    try {
      const valueLocal = localStorage.getItem("list");
      if (valueLocal) {
        const parsed = JSON.parse(valueLocal);
        if (Array.isArray(parsed)) {
          setListHistory(parsed);
        }
      }
    } catch (error) {
      console.error("Error al leer historial de frases:", error);
    }
  };

  useEffect(() => {
    getAllHistory();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Historial de Frases
      </Typography>

      {listHistory.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No hay frases almacenadas todavía.
        </Typography>
      ) : (
        <List>
          {listHistory.map((item, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <CardCita phrase={item.q} autor={item.a} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Historycitas;
