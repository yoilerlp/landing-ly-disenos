import React, {
  type PropsWithChildren,
  useActionState,
  useEffect,
  useState,
} from 'react';
import TresEllipseWithTresAros from '@/assets/icons/TresEllipseWithTresAros.svg';

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

    // const url =
    //   'https://script.google.com/macros/s/AKfycbwLIYd8Q3wNKn7ClRKIRssCWJg5HNOUbmVj5ON_V90eBdK-ab7wEJs7fTkxfxkHRkI9uw/exec';

    // URL Form Alex
    const url =
      'https://script.google.com/macros/s/AKfycbxDz6lWZ_toISH6kfN4kdKpf7GkRLGTkATo2ICieWdPk4F_iz6TAFq5qefy52wFRxk/exec';

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

    result = { succest: true, error: null };
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
    error: '',
  });

  const [showMessage, setShowMessage] = useState(true);

  // reset form
  useEffect(() => {
    if (state.succest || state.error) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [state.succest, state.error]);

  if (pending) {
    return (
      <div className='flex justify-center items-center'>
        <div className='size-36 border-4 border-secondary border-t-transparent rounded-full animate-spin'></div>
      </div>
    );
  }

  if (state.error && showMessage) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <img src={TresEllipseWithTresAros.src} alt='Error icon' />
        <h2 className='text-red-800 text-3xl font-bold mt-4 '>{texts.error}</h2>
      </div>
    );
  }

  if (state.succest && showMessage) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <img src={TresEllipseWithTresAros.src} alt='Success icon' />
        <h2 className='text-secondary text-4xl font-bold mt-4 '>
          {texts.success}
        </h2>
      </div>
    );
  }

  return <form action={action}>{children}</form>;
};

export default ContactFormWrapper;

