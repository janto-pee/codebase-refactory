import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div marginRight='1' className='flex items-center'>
      <span >
        <FaArrowAltCircleLeft onClick={() => scrollPrev()} cursor='pointer' className='hidden md:block text-2xl' />
      </span>
    </div>
  );
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div marginRight='1' className='flex items-center'>
        <span>
        <FaArrowAltCircleRight onClick={() => scrollNext()} cursor='pointer' className='hidden md:block text-2xl' />
        </span>
    </div>
  );
}

export default function HorizontalScrollMenu({ photos }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}  >
      {photos.map((item, i) => (
        <div className='w-96' key={i} overflow='hidden' p='1' >
          <img placeholder="blur" blurDataURL={item} src={item} alt={'header image'} className='w-full'  />
        </div>
      ))}
    </ScrollMenu>
  );
}
