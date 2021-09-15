-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `profile_ibfk_1`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `entriesId` INTEGER UNSIGNED;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_entriesId_fkey` FOREIGN KEY (`entriesId`) REFERENCES `entries`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `accounts.compound_id_unique` TO `accounts_compound_id_key`;

-- RenameIndex
ALTER TABLE `sessions` RENAME INDEX `sessions.access_token_unique` TO `sessions_access_token_key`;

-- RenameIndex
ALTER TABLE `sessions` RENAME INDEX `sessions.session_token_unique` TO `sessions_session_token_key`;

-- RenameIndex
ALTER TABLE `users` RENAME INDEX `users.email_unique` TO `users_email_key`;

-- RenameIndex
ALTER TABLE `verification_requests` RENAME INDEX `verification_requests.token_unique` TO `verification_requests_token_key`;
