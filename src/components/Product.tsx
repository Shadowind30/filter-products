import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';

interface IProps {
    data: {
        name: string;
        category: string;
        price: string;
        stocked: boolean;
    },
}

const Product: React.FC<IProps> = props => {
    return (
        <React.Fragment>
            
            {<IonCard color={props.data.stocked ? "success" : "danger"}>
                <IonCardHeader>
                    <IonCardTitle>{props.data.name}</IonCardTitle>
                    <IonCardSubtitle>{props.data.price}</IonCardSubtitle>
                </IonCardHeader>
            </IonCard >
            }
        </React.Fragment>
    );
}

export default Product;