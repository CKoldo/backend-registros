import e, { Request, Response } from "express";
import Producto from "../models/producto";

export const getProducts = async (req: Request, res: Response) => {
  const listProducts = await Producto.findAll();

  res.json({
    listProducts,
  });
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Producto.findByPk(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      msg: `No se encontro un registro con el id :  ${id} `,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Producto.findByPk(id);

  if (!product) {
    res.status(404).json({
      msg: `No se encontro un registro con el id :  ${id} `,
    });
  } else {
    await product.destroy();
    res.json({
      msg: "El registro con id: " + id + " fue eliminado",
    });
  }
};

export const postProduct = (req: Request, res: Response) => {
  const { body } = req;

  try {
    // Usamos await para esperar que la creación se complete
    Producto.create(body);
    res.json({
      msg: "Producto agregado con éxito",
    });
  } catch (error) {
    console.log(error);

    // Devolver una respuesta de error al cliente
    res.status(500).json({
      msg: "Error al agregar el producto",
      error, // Enviar el mensaje de error real para más contexto
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const product = await Producto.findByPk(id);

    if (product) {
      await product.update(body);
      res.json({
        msg: "El producto con id: " + id + " fue actualizado",
      });
    } else {
      res.status(404).json({
        msg: `No se encontro un registro con el id :  ${id} `,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Error al agregar el producto",
    });
  }

  //console.log(body);
};
