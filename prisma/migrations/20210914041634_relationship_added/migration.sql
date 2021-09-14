/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile` ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `profile_userId_unique` ON `profile`(`userId`);

-- AddForeignKey
ALTER TABLE `profile` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
