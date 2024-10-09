"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield producto_1.default.findAll();
    res.json({
        listProducts,
    });
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No se encontro un registro con el id :  ${id} `,
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield producto_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `No se encontro un registro con el id :  ${id} `,
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: "El registro con id: " + id + " fue eliminado",
        });
    }
});
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => {
    const { body } = req;
    try {
        // Usamos await para esperar que la creación se complete
        producto_1.default.create(body);
        res.json({
            msg: "Producto agregado con éxito",
        });
    }
    catch (error) {
        console.log(error);
        // Devolver una respuesta de error al cliente
        res.status(500).json({
            msg: "Error al agregar el producto",
            error, // Enviar el mensaje de error real para más contexto
        });
    }
};
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = yield producto_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: "El producto con id: " + id + " fue actualizado",
            });
        }
        else {
            res.status(404).json({
                msg: `No se encontro un registro con el id :  ${id} `,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Error al agregar el producto",
        });
    }
    //console.log(body);
});
exports.updateProduct = updateProduct;
