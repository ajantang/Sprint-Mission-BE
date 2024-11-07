import { PostData, PostDetailData } from "../../types/post-types";

export function postMapper(data: PostData) {
  return {
    id: data.id,
    name: data.name,
    content: data.content,
    favoriteCount: data.favoriteCount,
    images: data.PostImage?.map((imgObj) => imgObj.image),
    ownerId: data.User?.id,
    ownerImage: data.User?.image,
    ownerNickname: data.User?.nickname,
    isFavorite: !!data.FavoritePost?.length,
    createdAt: data.createdAt,
  };
}

export function postDetailMapper(data: PostDetailData) {
  return {
    ...postMapper(data),
    comments: data.PostComment,
  };
}

type PostMapperReturnType = ReturnType<typeof postMapper>;

export function postListMapper({
  count,
  postList,
}: {
  count: number;
  postList: PostData[];
}) {
  const mappedPosts: PostMapperReturnType[] = postList.map(postMapper);
  return { totalCount: count, posts: mappedPosts };
}
