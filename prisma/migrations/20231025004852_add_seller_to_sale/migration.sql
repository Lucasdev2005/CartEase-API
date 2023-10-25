/*
  Warnings:

  - Added the required column `SLE_Seller` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SLE_Value` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "SLE_Seller" INTEGER NOT NULL,
ADD COLUMN     "SLE_Value" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_SLE_Seller_fkey" FOREIGN KEY ("SLE_Seller") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;
