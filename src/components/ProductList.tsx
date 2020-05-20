import React from 'react';
import Product from './Product';
import { IonTitle } from '@ionic/react';
import CategoryContainer from './CategoryContainer';
interface IProps {
    products: {
        name: string;
        category: string;
        price: string;
        stocked: boolean;
    }[],
    categories: string[]
}
const ProductList: React.FC<IProps> = props => {

    return (
        <React.Fragment>
            {
                props.categories.map((category, i) => {
                    return (
                        <CategoryContainer key={i} products={props.products} name={category} />
                    )
                }
                )
            }
        </React.Fragment>
    );
}

export default ProductList;