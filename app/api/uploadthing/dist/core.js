"use strict";
// import { auth } from "@clerk/nextjs";
// import { createUploadthing, type FileRouter } from "uploadthing/next";
exports.__esModule = true;
exports.ourFileRouter = void 0;
// const f = createUploadthing();
// const handleAuth=()=> {
//     const{userId}=auth();
//     if(!userId) throw new Error("unauthorized");
//     return{userId};
// }
// export const ourFileRouter = {
//  courseImage:f({image:{maxFileSize:"4MB",maxFileCount:1}})
//  .middleware(()=>handleAuth())
//  .onUploadComplete(()=>{}),
//  courseAttachment:f(["text","image","video","audio","pdf"])
//  .middleware(()=>handleAuth())
//  .onUploadComplete(()=>{}),
//  chapterVideo:f({video:{maxFileCount:1,maxFileSize:"512GB"}})
//  .middleware(()=>handleAuth())
//  .onUploadComplete(()=>{}),
// } satisfies FileRouter;
// export type OurFileRouter = typeof ourFileRouter;
var nextjs_1 = require("@clerk/nextjs");
var next_1 = require("uploadthing/next");
var f = next_1.createUploadthing();
var handleAuth = function () {
    var userId = nextjs_1.auth().userId;
    if (!userId)
        throw new Error("unauthorized");
    return { userId: userId };
};
exports.ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(function () { return handleAuth(); })
        .onUploadComplete(function () { }),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(function () { return handleAuth(); })
        .onUploadComplete(function () { }),
    chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
        .middleware(function () { return handleAuth(); })
        .onUploadComplete(function () { })
};
