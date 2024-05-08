-- CreateTable
CREATE TABLE "user" (
    "Id" INTEGER NOT NULL,
    "userName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Role" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_Id_key" ON "user"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "user_Email_key" ON "user"("Email");
