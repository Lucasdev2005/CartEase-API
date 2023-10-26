/*
  Warnings:

  - You are about to drop the column `SLE_Seller` on the `Sale` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_SLE_Seller_fkey";

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "SLE_Seller";
