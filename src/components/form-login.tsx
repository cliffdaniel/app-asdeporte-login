'use client';

import { loginSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { loginAction } from '@/actions/auth-action';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface FormLoginProps {
    isVerified: boolean;
    OAuthAccountNotLinked: boolean;
}

const FormLogin = ({ isVerified, OAuthAccountNotLinked }: FormLoginProps) => {
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        setError(null);
        startTransition(async () => {
            const response = await loginAction(values);
            if (response.error) {
                setError(response.error);
            } else {
                router.push('/dashboard');
            }
        });
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg sm:max-w-md md:max-w-md lg:max-w-lg w-full mx-auto">
            <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                Iniciar Sesión
            </h1>
            {isVerified && (
                <p className="text-center text-green-600 mb-4 text-sm">
                    Correo verificado, ahora puedes iniciar sesión.
                </p>
            )}
            {OAuthAccountNotLinked && (
                <p className="text-center text-red-600 mb-4 text-sm">
                    Para confirmar tu identidad, inicia sesión con la misma
                    cuenta que utilizaste originalmente.
                </p>
            )}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">
                                    Correo Electrónico:
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ingresa tu correo electrónico"
                                        type="email"
                                        {...field}
                                        className="border-gray-300 rounded-md shadow-sm focus:border-brand-8 focus:ring focus:ring-brand-8 focus:ring-opacity-50 text-primary"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">
                                    Contraseña:
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ingresa tu contraseña"
                                        type="password"
                                        {...field}
                                        className="border-gray-300 rounded-md shadow-sm focus:border-brand-8 focus:ring focus:ring-brand-8 focus:ring-opacity-50 text-primary"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {error && (
                        <FormMessage className="text-red-600">
                            {error}
                        </FormMessage>
                    )}
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-brand-8 text-white py-2 px-4 rounded-md hover:bg-brand-9 focus:outline-none focus:ring-2 focus:ring-brand-8 focus:ring-opacity-50"
                    >
                        {isPending ? 'Cargando...' : 'Iniciar Sesión'}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default FormLogin;
