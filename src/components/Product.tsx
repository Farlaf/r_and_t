import { IProduct } from "../models";
import { useState } from "react";

interface ProductProps {
    product: IProduct;
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);

    const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";

    const btnClases = ["py-2 px-4 border", btnBgClassName].join(" ");

    return (
        <div className="border py-2 px-4 rounded flex  flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button
                className={btnClases}
                onClick={() => {
                    setDetails((prev) => !prev);
                }}
            >
                {details ? "Hide details" : "Show details"}
            </button>
            {details && (
                <div className="pt-4">
                    <p>{product.description}</p>
                    <p>
                        Rate:{" "}
                        <span style={{ fontWeight: "bold" }}>
                            {product.rating.rate}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}
