-- CreateTable
CREATE TABLE "Products" (
    "PRD_ProductId" SERIAL NOT NULL,
    "PRD_Price" INTEGER NOT NULL,
    "PRD_Name" TEXT NOT NULL,
    "PRD_stock" INTEGER NOT NULL,
    "PRD_Seller" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("PRD_ProductId")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_PRD_Seller_fkey" FOREIGN KEY ("PRD_Seller") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;
