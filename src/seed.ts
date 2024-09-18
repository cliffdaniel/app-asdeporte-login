import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: [
            {
                name: 'John Doe',
                email: 'john.doe@example.com',
                password: 'password123',
                role: 'user',
            },
            {
                name: 'Jane Smith',
                email: 'jane.smith@example.com',
                password: 'password456',
                role: 'admin',
            },
            {
                name: 'Alice Johnson',
                email: 'alice.johnson@example.com',
                password: 'password789',
                role: 'user',
            },
        ],
    });

    await prisma.verificationToken.createMany({
        data: [
            {
                identifier: 'john.doe@example.com',
                token: 'token-for-john',
                expires: new Date(Date.now() + 3600000),
            },
            {
                identifier: 'jane.smith@example.com',
                token: 'token-for-jane',
                expires: new Date(Date.now() + 3600000),
            },
        ],
    });

    console.log('Default records created successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
