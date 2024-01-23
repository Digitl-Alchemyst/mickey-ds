import { categories, menu } from '#/menu';
import Image from 'next/image';
import Link from 'next/link';

function FullMenu() {
  const renderCategoryItems = (categoryName, category) => (
    <div key={categoryName}>
      <h2>{category.title}</h2>
      {category.items.map((item, index) => (
        <div
          key={index}
          className='flex items-center rounded-md border border-slate-800 px-6 py-4 shadow-md'
        >
          <Link
            href={`/full-menu/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            className='flex items-center gap-x-4'
          >
            <Image
              src={`/menu/items/${item.image}`}
              alt={item.title}
              width={75}
              height={75}
              className=''
            />
            <span>{item.title}</span>
          </Link>
          <span className='text-sm'>{item.price}</span>
          <span className='text-sm'>{item.description}</span>
        </div>
      ))}
    </div>
  );
  return (
    <div className='mx-auto mt-18 max-w-7xl space-y-8 px-8'>
      {/* Category Navigation  */}
      {categories.map((category, index) => (
        <div
          key={index}
          className='flex items-center rounded-md border border-slate-800 px-6 py-4 shadow-md '
        >
          <Link
            href={`/full-menu/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            className='flex items-center gap-x-4'
          >
            <Image
              src={`/menu/categories/${category.image}`}
              alt={category.title}
              width={75}
              height={75}
              className='category-image'
            />
            <span>{category.title}</span>
          </Link>
        </div>
      ))}

    {/* Menu Items  */}
    <div className='mx-auto mt-18 max-w-7xl space-y-8 px-8'>
      {Object.entries(menu).map(([categoryName, category]) =>
        renderCategoryItems(categoryName, category),
      )}
    </div>
    </div>
  );
}

export default FullMenu;
