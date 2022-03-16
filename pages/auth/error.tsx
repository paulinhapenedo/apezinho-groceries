import { useRouter } from 'next/router';
import Link from 'next/link';

import PageWrapper from '@components/PageWrapper';

const errors: { [key: string]: string } = {
  Signin: 'Try signing with a different account.',
  OAuthSignin: 'Try signing with a different account.',
  OAuthCallback: 'Try signing with a different account.',
  OAuthCreateAccount: 'Try signing with a different account.',
  EmailCreateAccount: 'Try signing with a different account.',
  Callback: 'Try signing with a different account.',
  OAuthAccountNotLinked: 'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin: 'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
  AccessDenied: 'Esse app é pessoal e, por enquanto, o acesso está restrito.',
};

const SignInError = () => {
  const router = useRouter();
  const error = router.query.error as string;

  const errorMessage = error && (errors[error] ?? errors.default);
  return (
    <PageWrapper>
      <main className="grid place-items-center h-screen">
        <div className="sm:max-4/12 pl-4 pr-4 grid">
          <h1 className="text-5xl mb-3 whitespace-pre-line">Oops 🙈</h1>
          <p className="text-base">{errorMessage}</p>
          <Link href="/">
            <a className="text-left text-sm py-2 mt-3 underline">Voltar para a tela inicial</a>
          </Link>
        </div>
      </main>
    </PageWrapper>
  );
};

export default SignInError;
