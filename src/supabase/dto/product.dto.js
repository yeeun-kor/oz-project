import { supabase } from "../client";

const getAllProducts = async () => {
  const states = await supabase.from("products").select(`
  *,
  categories(name),
  brands(name)
`);
  states.data = states.data || [];

  return states;
};

export const sbProductsObject = {
  getAllProducts,
};
