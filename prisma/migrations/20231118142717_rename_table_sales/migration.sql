/*
  Warnings:

  - You are about to drop the `Sale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductSale" DROP CONSTRAINT "ProductSale_PRS_SaleId_fkey";

-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_SLE_buyer_fkey";

-- DropTable
DROP TABLE "Sale";

-- CreateTable
CREATE TABLE "sales" (
    "SLE_SaleId" SERIAL NOT NULL,
    "SLE_DateSale" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "SLE_Value" INTEGER NOT NULL,
    "SLE_buyer" INTEGER NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("SLE_SaleId")
);

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_SLE_buyer_fkey" FOREIGN KEY ("SLE_buyer") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_PRS_SaleId_fkey" FOREIGN KEY ("PRS_SaleId") REFERENCES "sales"("SLE_SaleId") ON DELETE RESTRICT ON UPDATE CASCADE;
