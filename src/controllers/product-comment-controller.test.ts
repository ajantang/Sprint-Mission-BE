import { Request, Response, NextFunction } from "express";
import productCommentController from "./product-comment-controller";
import productCommentService from "../services/product-comment-service";
import { ProductCommentBaseInfo } from "../types/product-comment-types";

jest.mock("../services/product-comment-service");

describe("Product Comment Controller", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      locals: {
        userId: "1",
      },
    };
    mockNext = jest.fn();
  });

  describe("createProductComment", () => {
    test("createProductComment success : status(201)", async () => {
      const mockProductComment: ProductCommentBaseInfo = {
        id: "1",
        productId: "1",
        content: "test content",
        ownerId: "1",
        ownerImage: "owner profile image url",
        ownerNickname: "tester",
        createdAt: new Date(),
      };

      mockReq.body = {
        productId: "1",
        content: "test content",
      };
      (
        productCommentService.createProductComment as jest.Mock
      ).mockResolvedValue(mockProductComment);

      await productCommentController.createProductComment(
        mockReq as Request,
        mockRes as Response,
        mockNext
      );

      expect(productCommentService.createProductComment).toHaveBeenCalledWith({
        userId: "1",
        productId: "1",
        content: "test content",
      });
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.send).toHaveBeenCalledWith(mockProductComment);
    });
  });
});
