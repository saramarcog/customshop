import type { Product } from "../types";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

/*interface ProductDetailProps {
    product: Product;
    onClose?: () => void;
}*/

export function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    return (
        <div className="product-detail">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className={`stock ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}>
                {product.stock > 0 ? `En Stock - ${product.stock} unidades` : "Sin Stock- 0 unidades"}
            </p>
            <button onClick={() => navigate('/')}>Volver al catálogo</button>
        </div>
    );
}