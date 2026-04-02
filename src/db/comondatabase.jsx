export const Category = [
  { name: "Electronics", path: "/electronics" },
  { name: "Clothing", path: "/clothes" },
  { name: "Gifts", path: "/gifts" },
  { name: "Toys", path: "/toys" },
  { name: "Books", path: "/books" },
  { name: "Home & Kitchen", path: "/home-kitchen" },
  { name: "Sports", path: "/sports" },
  { name: "Beauty & Personal Care", path: "/beauty" },
];

export const Price = [0, 100, 200, 300, 500, 1000, 10000];


export const Profile = [
  { name: "My Account", path: "/profile" },
  { name: "Orders", path: "/orders" },
  {
    name: "Logout",
    action: () => {
      // alert("Logged out!");
      window.location.href = "/";
      localStorage.setItem("isLoggedIn", "false");
    }
  }
];

// for the redux of the wishlist 

export
  const initialState = {
    userid: 1,
    wishlistItems: [
      {
        id: 100,
        productID: 100,
        title: "Essence Mascara Lash Princess",
        price: 9.99,
        image: "data:image/jpeg;base64,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"
      },
      {
        id: 200,
        productID: 200,
        title: "Eyeshadow Palette with 12 Colors",
        price: 19.99,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8JPHDk-MiMQmfspjIE4foHO3wufYBdLUbKH0dNN4jIY--IzcZowtfj4BHmJRmXZLHuiyzqonNiQ2BW6jI9zGJaL1IwJwHQlhTrywKdr2__tFOQKypKk-Us8uu"
      },
      {
        id: 300,
        productID: 300,
        title: "Powder Canister",
        price: 14.99,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfLXLtdW5eDFKRDJV92IhrgRilFyx9OOJ2YzPTqVxi-hN2geA2opopmAPQMJYygSp3xtKvxjdzokGKSgylr2AZEcCxkBJW7Q"
      }
    ],
  };