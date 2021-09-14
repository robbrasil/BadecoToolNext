/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `account_type` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profile_photo` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `remember_token` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `account_type`,
    DROP COLUMN `company_id`,
    DROP COLUMN `password`,
    DROP COLUMN `profile_photo`,
    DROP COLUMN `remember_token`,
    ADD COLUMN `email_verified` TIMESTAMP(6),
    ADD COLUMN `image` VARCHAR(255),
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `name` VARCHAR(255),
    MODIFY `email` VARCHAR(255),
    MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `profile` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `company_id` INTEGER,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `account_type` VARCHAR(191) NOT NULL DEFAULT 'subscriber',
    `profile_photo` VARCHAR(191),
    `remember_token` VARCHAR(100),
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    UNIQUE INDEX `profile.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `compound_id` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `provider_type` VARCHAR(255) NOT NULL,
    `provider_id` VARCHAR(255) NOT NULL,
    `provider_account_id` VARCHAR(255) NOT NULL,
    `refresh_token` TEXT,
    `access_token` TEXT,
    `access_token_expires` TIMESTAMP(6),
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `accounts.compound_id_unique`(`compound_id`),
    INDEX `provider_account_id`(`provider_account_id`),
    INDEX `provider_id`(`provider_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `expires` TIMESTAMP(6) NOT NULL,
    `session_token` VARCHAR(255) NOT NULL,
    `access_token` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `sessions.session_token_unique`(`session_token`),
    UNIQUE INDEX `sessions.access_token_unique`(`access_token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification_requests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `identifier` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `expires` TIMESTAMP(6) NOT NULL,
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `verification_requests.token_unique`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
