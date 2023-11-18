/*
  Warnings:

  - You are about to drop the column `SLE_buyer` on the `sales` table. All the data in the column will be lost.
  - Added the required column `SLE_Buyer` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_SLE_buyer_fkey";

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "SLE_buyer",
ADD COLUMN     "SLE_Buyer" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_SLE_Buyer_fkey" FOREIGN KEY ("SLE_Buyer") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;
