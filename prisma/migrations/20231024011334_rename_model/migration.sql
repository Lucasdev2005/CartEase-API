/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_PRD_Seller_fkey";

-- DropTable
DROP TABLE "Products";

-- CreateTable
CREATE TABLE "products" (
    "PRD_ProductId" SERIAL NOT NULL,
    "PRD_Price" INTEGER NOT NULL,
    "PRD_Name" TEXT NOT NULL,
    "PRD_stock" INTEGER NOT NULL,
    "PRD_Seller" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("PRD_ProductId")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_PRD_Seller_fkey" FOREIGN KEY ("PRD_Seller") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;
