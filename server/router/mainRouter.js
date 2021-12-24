const controller = require("../controller");
const authUser = require("../middlewares/authUser");
const express = require("express");
const mainRouter = express.Router();

// 사용자 인증
mainRouter.use("/", authUser);
// 유저 정보, island, 태그 읽기
mainRouter.get("/", controller.readAllData);
// island 정보 조회
mainRouter.get("/island", controller.readAllIsland);
// 태그 조회
mainRouter.get("/tag", controller.readAllTags);
// 좋아요 island 데이터 읽기
mainRouter.get("/island/like", controller.readAllLikeIslands);
// 참여 island 데이터 읽기
mainRouter.get("/island/add", controller.readAllAddIslands);

module.exports = mainRouter;