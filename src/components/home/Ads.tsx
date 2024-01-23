import { ads } from '#/menu';
import Image from 'next/image';

const Ads = () => {
  return (
    <div className='max-w-[72rem] flex flex-col'>
      {ads.map((ad, index) => (
        <div key={index} className='flex items-center rounded-md space-x-12'>
          <div className='w-[725px] h-[500px] object-contain relative rounded-lg'>
            <Image src={`/ads/${ad.image}`} alt='' fill className='object-contain absolute rounded-lg' />
          </div>
          <div className='w-4/12 space-y-6'>
            <h2 className='text-3xl font-extrabold'>{ad.title}</h2>
            <p className='text-sm'>{ad.description}</p>
            <p className='text-xs font-extralight'>{ad.terms}</p>
            <button className='min-w-max rounded-md border border-mcdy-600 bg-mcdy-500 px-6 py-2 text-lg text-slate-950 shadow-md hover:bg-mcdy-400'>
              {ad.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ads;