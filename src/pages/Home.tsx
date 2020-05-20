import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, ChangeEvent } from 'react';
import './Home.css';
import FilterComponent from '../components/FilterComponent';
import ProductList from '../components/ProductList';
import ProductsData from '../data/products';

const Home: React.FC = () => {

  const productList = ProductsData.products;
  const categories = ProductsData.categories;

  const [matchingProducts, setMatchingProducts] = useState(productList);
  const [inputText, setInputText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const filterProducts = (text: string, checked: boolean, products: {
    name: string;
    category: string;
    price: string;
    stocked: boolean;
  }[]): undefined => {

    let mp = products;

    if (text && checked) {
      mp = products.filter(product => product.name.toLowerCase().includes(text) && product.stocked)
    }

    if (!text && checked) {
      mp = products.filter(product => product.stocked)
    }

    if (text && !checked) {
      mp = products.filter(product => product.name.toLowerCase().includes(text))
    }

    setMatchingProducts(mp);
    return;
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value.toLowerCase().trim();
    setInputText(currentText);
    filterProducts(currentText, isChecked, productList);
  }

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentCheck = e.target.checked;
    setIsChecked(currentCheck);
    filterProducts(inputText, currentCheck, productList);
  }

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Product List </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <FilterComponent handleInput={handleInput} handleClick={handleClick} inputText={inputText} checked={isChecked} />
        <ProductList products={matchingProducts} categories={categories}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
