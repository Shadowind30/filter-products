import React from 'react';
import { IonGrid, IonRow, IonCol, IonCheckbox, IonLabel, IonInput, IonItem, IonText } from '@ionic/react';

interface IProps {
    handleInput: Function,
    handleClick:Function,
    inputText: string,
    checked: boolean
}
const FilterComponent: React.FC<IProps> = props => {
    const handleInput = (event: Event) => props.handleInput(event);
    const handleClick = (event: Event) => props.handleClick(event);
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating">Filter by</IonLabel>
                        <IonInput value={props.inputText} onIonChange={handleInput} />
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <p>Filtered By: {props.inputText}</p>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol >
                    <IonCheckbox checked={props.checked} onIonChange={handleClick}/>
                    <IonText>Only show stocked products</IonText>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default FilterComponent;