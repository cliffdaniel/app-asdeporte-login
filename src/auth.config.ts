import { db } from '@/lib/db';
import { loginSchema } from '@/lib/zod';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
    providers: [
        Credentials({
            authorize: async (credentials) => {
                const { data, success } = loginSchema.safeParse(credentials);

                if (!success) {
                    throw new Error('Credenciales inválidas');
                }

                const user = await db.user.findUnique({
                    where: {
                        email: data.email,
                    },
                });

                if (!user || !user.password) {
                    throw new Error('Usuario no encontrado');
                }

                const isValid = data.password === user.password;

                if (!isValid) {
                    throw new Error('Contraseña incorrecta');
                }

                if (!user.emailVerified) {
                    const verifyTokenExits =
                        await db.verificationToken.findFirst({
                            where: {
                                identifier: user.email,
                            },
                        });

                    if (verifyTokenExits?.identifier) {
                        await db.verificationToken.delete({
                            where: {
                                identifier: user.email,
                            },
                        });
                    }
                }

                return user;
            },
        }),
    ],
} satisfies NextAuthConfig;
