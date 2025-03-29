-- CreateTable
CREATE TABLE "PersonalInfo" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcademicInfo" (
    "id" TEXT NOT NULL,
    "personalInfoId" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "board" TEXT NOT NULL,
    "yearOfPassing" TEXT NOT NULL,
    "percentage" TEXT NOT NULL,
    "collegeName" TEXT,
    "degree" TEXT,
    "collegeYear" TEXT,
    "collegePercentage" TEXT,
    "examName" TEXT,
    "rollNumber" TEXT,
    "examYear" TEXT,
    "score" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AcademicInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramInfo" (
    "id" TEXT NOT NULL,
    "personalInfoId" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "programLevel" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "specialization" TEXT,
    "academicYear" TEXT NOT NULL,
    "intake" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProgramInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_email_key" ON "PersonalInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AcademicInfo_personalInfoId_key" ON "AcademicInfo"("personalInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "ProgramInfo_personalInfoId_key" ON "ProgramInfo"("personalInfoId");

-- AddForeignKey
ALTER TABLE "AcademicInfo" ADD CONSTRAINT "AcademicInfo_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "PersonalInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramInfo" ADD CONSTRAINT "ProgramInfo_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "PersonalInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
