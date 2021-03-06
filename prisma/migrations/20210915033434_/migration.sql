-- AlterTable
ALTER TABLE `accounts` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `companies` MODIFY `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `entries` MODIFY `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `sessions` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `verification_requests` MODIFY `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);
