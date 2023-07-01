-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PUBLISHED', 'PRIVATE', 'DRAFT');

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "serving" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PUBLISHED',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
