-- DropForeignKey
ALTER TABLE "ProductSale" DROP CONSTRAINT "ProductSale_PRS_ProductId_fkey";

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_PRS_ProductId_fkey" FOREIGN KEY ("PRS_ProductId") REFERENCES "products"("PRD_ProductId") ON DELETE CASCADE ON UPDATE CASCADE;
