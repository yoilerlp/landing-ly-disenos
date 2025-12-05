import { useEffect, useState } from 'react';

function ModalGame() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Abrir modal con evento personalizado
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('openGameModal', handleOpenModal);

    // Cerrar con tecla ESC
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('openGameModal', handleOpenModal);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Bloquear scroll externo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      // Guardar posición actual del scroll
      const scrollY = window.scrollY;
      
      // Bloquear scroll del body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100vh';
    } else {
      // Restaurar scroll cuando se cierra
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      // Restaurar la posición exacta del scroll
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id='modal-game'
      className='fixed inset-0 z-120 flex items-center justify-center bg-bg backdrop-blur-sm'
      onClick={() => setIsOpen(false)}
    >
      <div
        className='relative w-11/12 max-w-4xl h-[90vh] bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm'
          aria-label='Cerrar modal'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 6L18 18M18 6L6 18'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>

        {/* Contenido del iframe */}
        <iframe
          src='https://pacman.davidinformatico.com/'
          className='w-full h-full border-0'
          title='Pac-Man Game'
          allowFullScreen
          sandbox='allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-pointer-lock'
          allow='autoplay; fullscreen; gamepad; keyboard-map *'
          referrerPolicy='no-referrer'
          loading='eager'
        ></iframe>

        {/* Mensaje de ayuda */}
        {/* <div className='absolute bottom-4 left-4 text-white/60 text-sm bg-black/30 px-3 py-2 rounded backdrop-blur-sm'>
          Presiona ESC para cerrar
        </div> */}
      </div>
    </div>
  );
}

export default ModalGame;

