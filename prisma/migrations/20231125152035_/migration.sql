/*
  Warnings:

  - You are about to drop the `Assessment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSale` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shoppingCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Assessment" DROP CONSTRAINT "Assessment_ASS_UserId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSale" DROP CONSTRAINT "ProductSale_PRS_ProductId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSale" DROP CONSTRAINT "ProductSale_PRS_SaleId_fkey";

-- DropForeignKey
ALTER TABLE "shoppingCart" DROP CONSTRAINT "shoppingCart_SHP_ProductId_fkey";

-- DropForeignKey
ALTER TABLE "shoppingCart" DROP CONSTRAINT "shoppingCart_SHP_ShoppingCartId_fkey";

-- DropTable
DROP TABLE "Assessment";

-- DropTable
DROP TABLE "ProductSale";

-- DropTable
DROP TABLE "shoppingCart";

-- CreateTable
CREATE TABLE "product_sales" (
    "PRD_ProductSaleId" SERIAL NOT NULL,
    "PRS_SaleId" INTEGER NOT NULL,
    "PRS_ProductId" INTEGER NOT NULL,
    "PRS_Quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "product_sales_pkey" PRIMARY KEY ("PRD_ProductSaleId")
);

-- CreateTable
CREATE TABLE "shopping_cart" (
    "SHP_ShoppingCartId" SERIAL NOT NULL,
    "SHP_UserID" INTEGER NOT NULL,
    "SHP_ProductId" INTEGER NOT NULL,
    "SHP_Quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "shopping_cart_pkey" PRIMARY KEY ("SHP_ShoppingCartId")
);

-- CreateTable
CREATE TABLE "assesment" (
    "ASS_AssesmentId" SERIAL NOT NULL,
    "ASS_UserId" INTEGER NOT NULL,
    "ASS_Rating" INTEGER NOT NULL DEFAULT 0,
    "ASS_Description" TEXT NOT NULL,
    "ASS_ProductId" INTEGER NOT NULL,

    CONSTRAINT "assesment_pkey" PRIMARY KEY ("ASS_AssesmentId")
);

-- AddForeignKey
ALTER TABLE "product_sales" ADD CONSTRAINT "product_sales_PRS_ProductId_fkey" FOREIGN KEY ("PRS_ProductId") REFERENCES "products"("PRD_ProductId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_sales" ADD CONSTRAINT "product_sales_PRS_SaleId_fkey" FOREIGN KEY ("PRS_SaleId") REFERENCES "sales"("SLE_SaleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_cart" ADD CONSTRAINT "shopping_cart_SHP_ShoppingCartId_fkey" FOREIGN KEY ("SHP_ShoppingCartId") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_cart" ADD CONSTRAINT "shopping_cart_SHP_ProductId_fkey" FOREIGN KEY ("SHP_ProductId") REFERENCES "products"("PRD_ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assesment" ADD CONSTRAINT "assesment_ASS_UserId_fkey" FOREIGN KEY ("ASS_UserId") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assesment" ADD CONSTRAINT "assesment_ASS_ProductId_fkey" FOREIGN KEY ("ASS_ProductId") REFERENCES "products"("PRD_ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;
