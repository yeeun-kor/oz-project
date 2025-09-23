-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "public"."mpaa_rating" AS ENUM ('G', 'PG', 'PG-13', 'R', 'NC-17');

-- CreateTable
CREATE TABLE "public"."actor" (
    "actor_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "actor_pkey" PRIMARY KEY ("actor_id")
);

-- CreateTable
CREATE TABLE "public"."address" (
    "address_id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,
    "district" TEXT NOT NULL,
    "city_id" INTEGER NOT NULL,
    "postal_code" TEXT,
    "phone" TEXT NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "address_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "public"."category" (
    "category_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "public"."city" (
    "city_id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "country_id" INTEGER NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "city_pkey" PRIMARY KEY ("city_id")
);

-- CreateTable
CREATE TABLE "public"."country" (
    "country_id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "country_pkey" PRIMARY KEY ("country_id")
);

-- CreateTable
CREATE TABLE "public"."customer" (
    "customer_id" SERIAL NOT NULL,
    "store_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT,
    "address_id" INTEGER NOT NULL,
    "activebool" BOOLEAN NOT NULL DEFAULT true,
    "create_date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "last_update" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "active" INTEGER,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "public"."film" (
    "film_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "release_year" INTEGER,
    "language_id" INTEGER NOT NULL,
    "original_language_id" INTEGER,
    "rental_duration" SMALLINT NOT NULL DEFAULT 3,
    "rental_rate" DECIMAL(4,2) NOT NULL DEFAULT 4.99,
    "length" SMALLINT,
    "replacement_cost" DECIMAL(5,2) NOT NULL DEFAULT 19.99,
    "rating" "public"."mpaa_rating" DEFAULT 'G',
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "special_features" TEXT[],
    "fulltext" tsvector NOT NULL,

    CONSTRAINT "film_pkey" PRIMARY KEY ("film_id")
);

-- CreateTable
CREATE TABLE "public"."film_actor" (
    "actor_id" INTEGER NOT NULL,
    "film_id" INTEGER NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "film_actor_pkey" PRIMARY KEY ("actor_id","film_id")
);

-- CreateTable
CREATE TABLE "public"."film_category" (
    "film_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "film_category_pkey" PRIMARY KEY ("film_id","category_id")
);

-- CreateTable
CREATE TABLE "public"."inventory" (
    "inventory_id" SERIAL NOT NULL,
    "film_id" INTEGER NOT NULL,
    "store_id" INTEGER NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("inventory_id")
);

-- CreateTable
CREATE TABLE "public"."language" (
    "language_id" SERIAL NOT NULL,
    "name" CHAR(20) NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "language_pkey" PRIMARY KEY ("language_id")
);

-- CreateTable
CREATE TABLE "public"."payment" (
    "payment_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "staff_id" INTEGER NOT NULL,
    "rental_id" INTEGER NOT NULL,
    "amount" DECIMAL(5,2) NOT NULL,
    "payment_date" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("payment_date","payment_id")
);

-- CreateTable
CREATE TABLE "public"."rental" (
    "rental_id" SERIAL NOT NULL,
    "rental_date" TIMESTAMPTZ(6) NOT NULL,
    "inventory_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "return_date" TIMESTAMPTZ(6),
    "staff_id" INTEGER NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rental_pkey" PRIMARY KEY ("rental_id")
);

-- CreateTable
CREATE TABLE "public"."staff" (
    "staff_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "address_id" INTEGER NOT NULL,
    "email" TEXT,
    "store_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "username" TEXT NOT NULL,
    "password" TEXT,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "picture" BYTEA,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("staff_id")
);

-- CreateTable
CREATE TABLE "public"."store" (
    "store_id" SERIAL NOT NULL,
    "manager_staff_id" INTEGER NOT NULL,
    "address_id" INTEGER NOT NULL,
    "last_update" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "store_pkey" PRIMARY KEY ("store_id")
);

-- CreateIndex
CREATE INDEX "idx_actor_last_name" ON "public"."actor"("last_name");

-- CreateIndex
CREATE INDEX "idx_fk_city_id" ON "public"."address"("city_id");

-- CreateIndex
CREATE INDEX "idx_fk_country_id" ON "public"."city"("country_id");

-- CreateIndex
CREATE INDEX "idx_fk_address_id" ON "public"."customer"("address_id");

-- CreateIndex
CREATE INDEX "idx_fk_store_id" ON "public"."customer"("store_id");

-- CreateIndex
CREATE INDEX "idx_last_name" ON "public"."customer"("last_name");

-- CreateIndex
CREATE INDEX "film_fulltext_idx" ON "public"."film" USING GIST ("fulltext");

-- CreateIndex
CREATE INDEX "idx_fk_language_id" ON "public"."film"("language_id");

-- CreateIndex
CREATE INDEX "idx_fk_original_language_id" ON "public"."film"("original_language_id");

-- CreateIndex
CREATE INDEX "idx_title" ON "public"."film"("title");

-- CreateIndex
CREATE INDEX "idx_fk_film_id" ON "public"."film_actor"("film_id");

-- CreateIndex
CREATE INDEX "idx_store_id_film_id" ON "public"."inventory"("store_id", "film_id");

-- CreateIndex
CREATE INDEX "idx_fk_inventory_id" ON "public"."rental"("inventory_id");

-- CreateIndex
CREATE UNIQUE INDEX "idx_unq_rental_rental_date_inventory_id_customer_id" ON "public"."rental"("rental_date", "inventory_id", "customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "idx_unq_manager_staff_id" ON "public"."store"("manager_staff_id");

-- AddForeignKey
ALTER TABLE "public"."address" ADD CONSTRAINT "address_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "public"."city"("city_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."city" ADD CONSTRAINT "city_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "public"."country"("country_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."customer" ADD CONSTRAINT "customer_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "public"."address"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."customer" ADD CONSTRAINT "customer_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."store"("store_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."film" ADD CONSTRAINT "film_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "public"."language"("language_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."film" ADD CONSTRAINT "film_original_language_id_fkey" FOREIGN KEY ("original_language_id") REFERENCES "public"."language"("language_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."film_actor" ADD CONSTRAINT "film_actor_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "public"."actor"("actor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."film_actor" ADD CONSTRAINT "film_actor_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "public"."film"("film_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."film_category" ADD CONSTRAINT "film_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."film_category" ADD CONSTRAINT "film_category_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "public"."film"("film_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."inventory" ADD CONSTRAINT "inventory_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "public"."film"("film_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."inventory" ADD CONSTRAINT "inventory_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."store"("store_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."rental" ADD CONSTRAINT "rental_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."rental" ADD CONSTRAINT "rental_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "public"."inventory"("inventory_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."rental" ADD CONSTRAINT "rental_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("staff_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."staff" ADD CONSTRAINT "staff_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "public"."address"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."staff" ADD CONSTRAINT "staff_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."store"("store_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."store" ADD CONSTRAINT "store_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "public"."address"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

