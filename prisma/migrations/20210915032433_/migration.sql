/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `companies` ADD COLUMN `user_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `companies_user_id_unique` ON `companies`(`user_id`);

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
