import React from 'react';
import { IonTitle } from '@ionic/react';
import Product from './Product';

interface IProps {
    products: {
        name: string;
        category: string;
        price: string;
        stocked: boolean;
    }[],
    name: string
}

const CategoryContainer: React.FC<IProps> = props => {
    const categoryProducts = props.products.filter(product => product.category === props.name);

    return (
        <div>
            <IonTitle>{props.name}</IonTitle>
            {
                categoryProducts.map((prod, i) => <Product key={i} data={prod}/>)
            }
        </div>
    );
}

export default CategoryContainer;