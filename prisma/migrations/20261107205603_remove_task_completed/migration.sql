/*
  Warnings:

  - You are about to drop the column `completed` on the `Task` table. All the data in the column will be lost.

*/

UPDATE "Task" SET "status" = 'done' WHERE "completed" = true AND "status" <> 'done'

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "completed";
