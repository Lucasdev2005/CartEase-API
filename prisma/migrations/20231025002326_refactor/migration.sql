/*
  Warnings:

  - You are about to drop the `_salesProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_salesProducts" DROP CONSTRAINT "_salesProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_salesProducts" DROP CONSTRAINT "_salesProducts_B_fkey";

-- DropTable
DROP TABLE "_salesProducts";

-- CreateTable
CREATE TABLE "ProductSale" (
    "PRD_ProductSaleId" SERIAL NOT NULL,
    "PRS_SaleId" INTEGER NOT NULL,
    "PRS_ProductId" INTEGER NOT NULL,

    CONSTRAINT "ProductSale_pkey" PRIMARY KEY ("PRD_ProductSaleId")
);

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_PRS_ProductId_fkey" FOREIGN KEY ("PRS_ProductId") REFERENCES "products"("PRD_ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_PRS_SaleId_fkey" FOREIGN KEY ("PRS_SaleId") REFERENCES "Sale"("SLE_SaleId") ON DELETE RESTRICT ON UPDATE CASCADE;
