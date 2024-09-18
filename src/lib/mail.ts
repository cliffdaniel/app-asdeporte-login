import { Resend } from 'resend';

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export const sendEmailVerification = async (email: string, token: string) => {
    try {
        await resend.emails.send({
            from: 'asdeporte login app <jdaniel.arenas@gmail.com>',
            to: email,
            subject: 'Verifica tu correo electrónico',
            html: `
                <html>
                <body style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
                    <h2 style="color: #0070f3;">Verificación de Correo Electrónico</h2>
                    <p style="font-size: 16px;">Haz clic en el enlace de abajo para verificar tu correo electrónico:</p>
                    <p>
                        <a href="${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}"
                           style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #0070f3; text-decoration: none; border-radius: 5px;">
                           Verificar correo electrónico
                        </a>
                    </p>
                    <p style="font-size: 14px; color: #666;">Si no solicitaste esta verificación, por favor ignora este correo.</p>
                </body>
                </html>
            `,
        });

        return {
            success: true,
        };
    } catch (error) {
        console.log(error);
        return {
            error: true,
        };
    }
};
