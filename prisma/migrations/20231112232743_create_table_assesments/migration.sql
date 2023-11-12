-- CreateTable
CREATE TABLE "Assessment" (
    "ASS_AssesmentId" SERIAL NOT NULL,
    "ASS_UserId" INTEGER NOT NULL,
    "ASS_Rating" INTEGER NOT NULL DEFAULT 0,
    "ASS_Description" TEXT NOT NULL,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("ASS_AssesmentId")
);

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_ASS_UserId_fkey" FOREIGN KEY ("ASS_UserId") REFERENCES "users"("USR_UserId") ON DELETE RESTRICT ON UPDATE CASCADE;
