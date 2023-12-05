import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import deskBg from '@/assets/images/desk-bg.jpeg';

const EMAIL = 'contact@inkforgedagency.com';

const Home = () => (
  <div className='mx-auto flex min-h-full max-w-[1600px] grid-cols-1 grid-rows-[1fr,auto,1fr] flex-col bg-white lg:grid lg:grid-cols-[max(55%,36rem),1fr]'>
    <main className='flex w-full grow flex-col items-center justify-center px-6 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:grow-0 lg:items-start lg:justify-start lg:px-8'>
      <div className='max-w-xl'>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-emerald-800 sm:text-5xl xl:text-6xl'>Under Construction</h1>
        <p className='mb-8 mt-10 text-base leading-7 xl:text-2xl'>Thank you for your interest in Ink Forged Agency!</p>

        <p className='mb-2 leading-7 tracking-wide xl:text-lg'>Our new site is currently being built.</p>
        <p className='mb-8 leading-7 tracking-wide xl:text-lg'>
          In the meantime, please send us an email to inquire about our services.
        </p>

        <Link
          href={`mailto:${EMAIL}`}
          className='flex items-center justify-start gap-2 tracking-wider text-emerald-800 hover:cursor-pointer hover:underline xl:text-lg'
        >
          <EnvelopeIcon className='mt-[2px] h-4 w-4' />
          {EMAIL}
        </Link>
      </div>
    </main>

    <footer className='w-full self-end lg:col-span-1 lg:col-start-1 lg:row-start-3'>
      <div className='border-t border-gray-100 bg-gray-100 py-4'>
        <p className='text-center text-xs text-gray-500'>Copyright &copy; 2023 Ink Forged Agency, LLC.</p>
      </div>
    </footer>

    <div className='hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block'>
      <Image src={deskBg} alt='' className='absolute inset-0 h-full w-full object-cover' />
    </div>
  </div>
);

export default Home;
