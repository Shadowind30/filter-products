const products: {
    name: string;
    category: string;
    price: string;
    stocked: boolean;
  }[] = [
      { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
      { category: "Sporting Goods", price: "$79.99", stocked: false, name: "Wooden baseball bat" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Baseball Glove" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Golf ball" },
      { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
      { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
      { category: "Electronics", price: "$999.99", stocked: true, name: "MacBook Pro 2015" },
      { category: "Electronics", price: "$129.99", stocked: false, name: "LG Volt" },
      { category: "Households", price: "$129.99", stocked: false, name: "Wooden Chair" },
      { category: "Households", price: "$129.99", stocked: true, name: "Wool tape" },
    ];

    const categoryArr = products.map(p => p.category);
    const categorySet: string[] = Array.from(new Set(categoryArr));

    const productData = {
        products,
        categories: categorySet
    }

    export default productData;