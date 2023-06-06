import React from "react";
import { Button, FormGroup, Typography,
     Container, Grid, Card,
     CardMedia, CardContent } from "@mui/material";

function InCart({cart, handleDelete}){
	const productGroups = cart.reduce((groups, product, index) => {
    if (index % 3 === 0) {
      groups.push([]);
    }
    groups[groups.length - 1].push(product);
    return groups;
  }, []);
  
  return (
    <div>
      <div className="catalogue">
        {productGroups.map((group) => (
          <div className="product-group">
            {group.map((product) => (
              <Card className="card">
            <CardMedia
            component="img"
            alt="Portada"
            height="300"
            image={product.image}
            />
            <CardContent >
              <Typography variant="h5">
                <b>{product.Nombre}</b>
              </Typography>
              <Typography variant="h6" style={{ color: 'green' }}>
                <b>${product.Precio}</b>
              </Typography>
              <Typography component="p">
                Cantidad: {product.Cantidad}
              </Typography>
              <Typography component="p">
                {(product.Disponible)?'Disponible':'No disponible'}
              </Typography>
              <Button onClick={() => handleDelete(product)}>Eliminar del carrito</Button>
            </CardContent>
          </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InCart;