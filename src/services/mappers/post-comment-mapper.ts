import { PostCommentData } from "../../types/post-comment-types";

export function postCommentMapper(data: PostCommentData) {
  return {
    id: data.id,
    content: data.content,
    ownerId: data.User?.id,
    ownerImage: data.User?.image,
    ownerNickname: data.User?.nickname,
    createdAt: data.createdAt,
  };
}

type PostCommentMapperReturnType = ReturnType<typeof postCommentMapper>;

export function postCommentListMapper({
  count,
  postList,
}: {
  count: number;
  postList: PostCommentData[];
}) {
  const mappedPostCommentList: PostCommentMapperReturnType[] =
    postList.map(postCommentMapper);
  return { totalCount: count, posts: mappedPostCommentList };
}
