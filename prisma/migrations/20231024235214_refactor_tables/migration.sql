-- CreateTable
CREATE TABLE "shoppingCart" (
    "SHP_ShoppingCartId" SERIAL NOT NULL,
    "SHP_UserID" INTEGER NOT NULL,
    "SHP_ProductId" INTEGER NOT NULL,

    CONSTRAINT "shoppingCart_pkey" PRIMARY KEY ("SHP_ShoppingCartId")
);

-- AddForeignKey
ALTER TABLE "shoppingCart" ADD CONSTRAINT "shoppingCart_SHP_ShoppingCartId_fkey" FOREIGN KEY ("SHP_ShoppingCartId") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shoppingCart" ADD CONSTRAINT "shoppingCart_SHP_ProductId_fkey" FOREIGN KEY ("SHP_ProductId") REFERENCES "products"("PRD_ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;
