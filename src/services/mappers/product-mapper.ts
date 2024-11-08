import { ProductData, ProductDetailData } from "../../types/product-types";

export function productMapper(data: ProductData | ProductDetailData) {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price,
    favoriteCount: data.favoriteCount,
    images: data.ProductImage?.map((imgObj) => imgObj.image),
    tags: data.ProductTag?.map((tagObj) => tagObj.tag),
    ownerId: data.User?.id,
    ownerImage: data.User?.image,
    ownerNickname: data.User?.nickname,
    isFavorite: !!data.FavoriteProduct?.length,
    createdAt: data.createdAt,
  };
}

export function productDetailMapper(data: ProductDetailData) {
  return {
    ...productMapper(data),
    comments:
      data.ProductComment?.map((comment) => ({
        id: comment.id,
        content: comment.content,
        createdAt: comment.createdAt,
        User: {
          id: comment.User.id,
          nickname: comment.User.nickname,
          image: comment.User.image || null,
        },
      })) || [],
  };
}

type ProductMapperReturnType = ReturnType<typeof productMapper>;

export function productListMapper({
  count,
  productList,
}: {
  count: number;
  productList: ProductData[];
}) {
  const mappedProducts: ProductMapperReturnType[] =
    productList.map(productMapper);
  return { totalCount: count, products: mappedProducts };
}
