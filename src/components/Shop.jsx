import Nav from './nav';
import { useState, useEffect } from "react";
import './Shop.css';
import Card from './Card';
  const useProdInfo = () => {
  const [prodInfo, setProdInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
            fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (response.status >= 400) {
                throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => {
                setProdInfo(response);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
        }, []);
        return { prodInfo, error, loading };
        };
    function Shop() {
    const { prodInfo, error, loading } = useProdInfo();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;
    return(
        <div>
            <Nav/>
            <p className='title'>Shop Products</p>
            <div className='items-div'>
                {prodInfo.map((prod) => (
                <Card key={prod.id} title={prod.title} url={prod.image} price={prod.price} />
                ))}
            </div>
        </div>
    )
}

export default Shop;