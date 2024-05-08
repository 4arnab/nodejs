/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "users" (
    "Id" INTEGER NOT NULL,
    "userName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Role" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_Id_key" ON "users"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "users_Email_key" ON "users"("Email");
