import { Github } from 'lucide-react';

function Details() {
  return (
    <div className='flex gap-3 items-center mx-auto w-fit'>
      <Github className='w-4 h-4' />
      <a
        href='https://github.com/luis-tenorio-code/MotionNumber'
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:underline text-sm'
      >
        github.com/luis-tenorio-code/MotionNumber
      </a>
    </div>
  );
}

export default Details;
