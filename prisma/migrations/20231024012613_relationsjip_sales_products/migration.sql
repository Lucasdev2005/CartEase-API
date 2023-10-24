-- CreateTable
CREATE TABLE "Sale" (
    "SLE_SaleId" SERIAL NOT NULL,
    "SLE_DateSale" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "SLE_buyer" INTEGER NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("SLE_SaleId")
);

-- CreateTable
CREATE TABLE "_salesProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_salesProducts_AB_unique" ON "_salesProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_salesProducts_B_index" ON "_salesProducts"("B");

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_SLE_buyer_fkey" FOREIGN KEY ("SLE_buyer") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_salesProducts" ADD CONSTRAINT "_salesProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("PRD_ProductId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_salesProducts" ADD CONSTRAINT "_salesProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Sale"("SLE_SaleId") ON DELETE CASCADE ON UPDATE CASCADE;
