import React, { type PropsWithChildren, useActionState } from 'react';
import TresEllipseWithTresAros from '@/assets/icons/TresEllipseWithTwoAros.svg';

type Props = PropsWithChildren<{
  texts: {
    error: string;
    success: string;
  };
}>;

type ActionState = {
  succest: boolean;
  error: string | null;
};

const saveForm = async (oldState: ActionState, data: FormData) => {
  let result: ActionState;

  try {
    const body = Object.fromEntries(data);

    const url =
      'https://script.google.com/macros/s/AKfycbwLIYd8Q3wNKn7ClRKIRssCWJg5HNOUbmVj5ON_V90eBdK-ab7wEJs7fTkxfxkHRkI9uw/exec';

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    });

    if (!res.ok) {
      throw new Error('Error sending form');
    }

    result = { succest: false, error: null };
  } catch (error) {
    result = {
      succest: false,
      error: 'Error sending form',
    };
  }

  return result;
};

const ContactFormWrapper = ({ children, texts }: Props) => {
  const [state, action, pending] = useActionState(saveForm, {
    succest: false,
    error: null,
  });

  if (pending) {
    return (
      <div className='flex justify-center items-center'>
        <div className='size-36 border-4 border-secondary border-t-transparent rounded-full animate-spin'></div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <img
          src={TresEllipseWithTresAros.src}
          alt='Error icon'
          className='size-60'
        />
        <h2 className='text-red-800 text-3xl font-bold mt-4 '>{texts.error}</h2>
      </div>
    );
  }

  if (state.succest) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <img
          src={TresEllipseWithTresAros.src}
          alt='Success icon'
          className='size-60'
        />
        <h2 className='text-secondary text-4xl font-bold mt-4 '>
          {texts.success}
        </h2>
      </div>
    );
  }

  return <form action={action}>{children}</form>;
};

export default ContactFormWrapper;

