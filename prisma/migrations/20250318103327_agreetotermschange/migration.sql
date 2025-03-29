/*
  Warnings:

  - Made the column `phone` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "agreeToTerms" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "phone" SET NOT NULL;
