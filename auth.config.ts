import { db } from '@/lib/db';
import { loginSchema } from '@/lib/zod';
// import { nanoid } from 'nanoid';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
// import { sendEmailVerification } from '@/lib/mail';

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

                    // const token = nanoid();

                    // await db.verificationToken.create({
                    //     data: {
                    //         identifier: user.email,
                    //         token,
                    //         expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
                    //     },
                    // });

                    // await sendEmailVerification(user.email, token);

                    // throw new Error(
                    //     'Por favor, revisa tu correo para la verificación'
                    // );
                }

                return user;
            },
        }),
    ],
} satisfies NextAuthConfig;
