/*
  Warnings:

  - Added the required column `USR_Address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `USR_Seller` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "USR_Address" TEXT NOT NULL,
ADD COLUMN     "USR_Seller" BOOLEAN NOT NULL;
