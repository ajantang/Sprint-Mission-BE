import { ProductData, ProductDetailData } from "../../types/product-types";

export function ProductMapper(data: ProductData | ProductDetailData) {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price,
    favoriteCount: data.favoriteCount,
    images: data.ProductImage?.map((imgObj) => imgObj.image),
    ownerId: data.User?.id,
    ownerImage: data.User?.image,
    ownerNickname: data.User?.nickname,
    isFavorite: !!data.FavoriteProduct?.length,
    createdAt: data.createdAt,
  };
}

export function ProductDetailMapper(data: ProductDetailData) {
  return {
    ...ProductMapper(data),
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

type ProductMapperReturnType = ReturnType<typeof ProductMapper>;

export function ProductListMapper({
  count,
  ProductList,
}: {
  count: number;
  ProductList: ProductData[];
}) {
  const mappedProducts: ProductMapperReturnType[] =
    ProductList.map(ProductMapper);
  return { totalCount: count, Products: mappedProducts };
}
