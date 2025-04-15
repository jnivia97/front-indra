import React from 'react';
import { Card, CardContent, Typography, Button } from "@mui/material";

const CardCita = ({ phrase, autor }) => {
  
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      `Frase: "${phrase}" - Autor: ${autor}`
    )}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <Card sx={{ minWidth: 275, mt: '1rem', mb: '1rem' }}>
      <CardContent>
        <Typography variant="h5">
          "{phrase}"
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {autor}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={shareOnFacebook}
          sx={{ mt: 2 }}
        >
          Compartir en Facebook
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardCita;
