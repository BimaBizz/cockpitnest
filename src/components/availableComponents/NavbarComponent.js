import Link from 'next/link';
import { fetchMenus, fetchSettings } from '@/lib/hook';
import ThemeButton from '@/components/SupportComponents/ThemeButton';
import SearchButton from '@/components/SupportComponents/SearchButton';
import LanguageButton from '@/components/SupportComponents/LanguageButton';
import AccountButton from '@/components/SupportComponents/AccountButton';

const Navbar = async ({ theme, remove, search, lang, language, account }) => {
  if (remove) {
    return null;
  }

  try {
    const data = await fetchMenus(process.env.NEXT_MENU_NAME, lang);
    const navData = data.links || [];

    const settings = await fetchSettings(lang);

    const renderLinks = (links, isDropdown = false) => {
      return links.map((link, index) => (
        link.active && (
          <li key={index} tabIndex={0} className={isDropdown ? '' : 'dropdown'}>
            {link.children && link.children.length > 0 ? (
              <>
                <label tabIndex={0} className="flex items-start md:items-center md:btn-ghost my-auto md:h-full font-semibold">
                  {link.title}{' '}
                  <svg
                    className="fill-current ml-1 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </label>
                <ul className="menu menu-sm dropdown-right dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {link.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link href={child.url.route || child.url} className='font-semibold'>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={link.url.route || link.url} className="flex items-start md:items-center md:btn-ghost my-auto md:h-full font-semibold">
                {link.title}
              </Link>
            )}
          </li>
        )
      ));
    };

    return (
      <div className='fixed z-50 bg-base-100 w-full shadow-sm'>
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow">
              {renderLinks(navData, false)}
            </ul>
          </div>
          <Link href="/" className="my-auto font-semibold text-xl">
            {settings.seo.title}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{renderLinks(navData)}</ul>
        </div>
        <div className="navbar-end">
          <div className={`flex justify-end w-full ${!theme && !search ? 'hidden' : ''}`}>
            <div className={`h-full ${theme ? '' : 'hidden'}`}>
              {theme && <ThemeButton />}
            </div>
            <div className={`h-full my-auto ${search ? '' : 'hidden'}`}>
              {search && <SearchButton lang={lang} />}
            </div>
            <div className={`h-full my-auto ${account ? '' : 'hidden'}`}>
              {account && <AccountButton lang={lang} />}
            </div>
            <div className={`h-full my-auto ${language ? '' : 'hidden'}`}>
              {language && <LanguageButton />}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching navigation data:', error);
    return (
      <div>
        <p>Failed to load navigation.</p>
      </div>
    );
  }
};

export default Navbar;