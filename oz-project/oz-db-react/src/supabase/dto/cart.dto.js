import { supabase } from "../client";

const getAllProductsFromCart = async () => {
  const states = await supabase.from("cart").select(`
  *,
  products (
    id,
    name,
    price,
    image_url
  )
  `);
  let data;
  if (!states.data) {
    data = [];
  } else {
    data = states.data.map((product) => {
      return {
        id: product.id,
        productId: product.products.id,
        name: product.products.name,
        price: product.products.price,
        quantity: product.quantity,
        imageUrl: product.products.image_url,
      };
    });
  }
  return { ...states, data };
};

const getOneProductFromCart = async (productId) => {
  const states = await supabase
    .from("cart")
    .select("*")
    .eq("product_id", productId)
    .maybeSingle();

  let data = null;
  if (states.data) {
    data = {
      id: states.data?.id,
      productId: states.data.product_id,
      quantity: states.data.quantity,
    };
  }
  return { ...states, data };
};

const postProductToCart = async (productId, quantity, userId = 1) => {
  const states = await supabase.from("cart").insert([
    {
      user_id: userId,
      product_id: productId,
      quantity,
    },
  ]);
  return states;
};

const patchProductFromCart = async (id, key, newValue) => {
  const states = await supabase
    .from("cart")
    .update({ [key]: newValue })
    .eq("id", id);
  return states;
};

const putProductFromCart = async (productId, quantity, userId = 1) => {
  const states = await supabase.from("cart").upsert({
    product_id: productId,
    quantity,
    user_id: userId,
  });
  return states;
};

const deleteProductFromCart = async (cartId) => {
  const states = await supabase.from("cart").delete().eq("id", cartId);
  return states;
};

export const sbCartObject = {
  client: supabase,
  getAllProductsFromCart,
  getOneProductFromCart,
  postProductToCart,
  patchProductFromCart,
  putProductFromCart,
  deleteProductFromCart,
};
