import { expect, test } from "@playwright/test";
import { executeGetPostsByIdRequest, executePostPostsRequest } from "../../utils/api/posts.api-utils";
import { PostDto } from "../../dto/PostDto";
import { generatePost } from "../../factory/generatePost";

test("GET /posts/{postId} should return post details", async () => {
    const postId = 1;
    const response = await executeGetPostsByIdRequest(postId);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(postId);
});

test("POST /posts should create a new post", async () => {
    // manually set userId to demonstrate custom value injection in object generation
    const userId = 1;
    const post: PostDto = generatePost({ userId: userId });

    const response = await executePostPostsRequest(post);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject({
        title: post.title,
        body: post.body,
        userId: post.userId,
    });
});