-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_entriesId_fkey`;

-- AddForeignKey
ALTER TABLE `entries` ADD CONSTRAINT `entries_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
