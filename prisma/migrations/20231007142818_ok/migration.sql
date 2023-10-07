-- CreateTable
CREATE TABLE "users" (
    "USR_UserId" SERIAL NOT NULL,
    "USR_Username" TEXT NOT NULL,
    "USR_Name" TEXT NOT NULL,
    "USR_Password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("USR_UserId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_USR_Username_key" ON "users"("USR_Username");
