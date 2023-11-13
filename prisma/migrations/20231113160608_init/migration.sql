/*
  Warnings:

  - You are about to drop the column `staus` on the `Notes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "staus",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;
