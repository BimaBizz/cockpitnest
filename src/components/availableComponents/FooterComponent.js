import React from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';

const FooterComponent = ({ data, lang }) => {

  const locale = lang

  return (
    <footer className="footer bg-base-100 text-base-content p-10">
      <div className="w-full max-w-7xl mx-auto grid md:grid-flow-col">
        <aside>
          <Image src={process.env.NEXT_ASSETS_URL+data.logo.path} alt={data.logo.title} width={data.logo.width} height={data.logo.height} className='h-20 w-20'/>
          <div className='prose-base prose-h3:font-semibold mt-5'>
            <h3>
              {data.title}
            </h3>
            <p>
              {data.subTitle}
            </p>
          </div>
        </aside>
        {data.Menu.map((menu, index) => (
          <nav key={index} className='prose'>
            <h4 className="footer-title">{menu.menuTitle}</h4>
            <div className='grid'>
              {menu.subMenu.map((subMenu, subIndex) => (
                <a key={subIndex} className="link link-hover" href={`/${locale+subMenu.link}`}>
                  {subMenu.subMenuTitle}
                </a>
              ))}
            </div>
          </nav>
        ))}
      </div>
    </footer>
  );
};

export default FooterComponent;
