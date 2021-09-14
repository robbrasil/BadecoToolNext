/*
  Warnings:

  - You are about to drop the column `created_at` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `remember_token` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `profile` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `profile.email_unique` ON `profile`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `created_at`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `password`,
    DROP COLUMN `remember_token`,
    DROP COLUMN `updated_at`;
