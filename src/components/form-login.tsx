import React from 'react';

interface FormLoginProps {
    isVerified: boolean;
    OAuthAccountNotLinked: boolean;
}

const FormLogin = ({ isVerified, OAuthAccountNotLinked }: FormLoginProps) => {
    console.log(isVerified, OAuthAccountNotLinked);
    return <div>FormLogin</div>;
};

export default FormLogin;
