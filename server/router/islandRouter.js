const controller = require("../controller");
const authUser = require("../middlewares/authUser");
const upload = require("../middlewares/uploadImage");
const express = require("express");
const islandRouter = express.Router();

// 사용자 인증
islandRouter.use("/", authUser);

// island 업로드
islandRouter.post("/upload", controller.createFeed);

// island 조회
islandRouter.get("/:id", controller.readIsland);

// island 수정
islandRouter.patch("/:id", controller.updateIsland);

// island 삭제
islandRouter.delete("/:id", controller.deleteIsland);

// island 댓글 추가
islandRouter.post("/:id/comment", controller.createIslandComment);

// island 댓글 삭제
islandRouter.delete("/:id/comment", controller.deleteIslandComment);

// island 댓글 수정
islandRouter.patch("/:id/comment", controller.updateIslandComment);

// island 댓글 조회
islandRouter.get("/:id/comment", controller.readIslandComment);

// island - 이미지 추가
islandRouter.post("/:id/uploadImg", controller.createIslandImage);

// island - 오디오 추가
islandRouter.post("/:id/uploadAudio", controller.createIslandAudio);

// island - 글 추가
islandRouter.post("/:id/uploadStory", controller.createIslandStory);

// island 좋아요 개수 수정
islandRouter.patch("/:id/like", controller.updateIslandLike);

// island 참여 개수 수정
islandRouter.patch("/:id/add", controller.updateIslandAdd);

// island - 추가 이미지 수정
// island - 추가 이미지 삭제
// island - 추가 글 수정
// island - 추가 글 삭제
// island - 추가 오디오 수정
// island - 추가 오디오 삭제

module.exports = islandRouter;