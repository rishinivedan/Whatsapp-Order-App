-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "meshSize" TEXT NOT NULL,
    "depth" TEXT NOT NULL,
    "selvage" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "pieceWeight" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "orderNo" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
