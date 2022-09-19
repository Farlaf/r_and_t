import { Loader } from "./components/Loader";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";
import { ErrorLoading } from "./components/Error";
import { Modal } from "./components/Modal";

function App() {
    const { error, loading, products } = useProducts();

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {error && <ErrorLoading er={error} />}
            {loading && <Loader />}
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}

            <Modal />
        </div>
    );
}

export default App;
