import Link from 'next/link';
import { fetchMenus, fetchSettings } from '@/lib/hook'; // Ganti dengan path ke file lib Anda
import ThemeButton from '../SupportComponents/ThemeButton';

const Navbar = async ({ theme, remove }) => {
  if (remove) {
    return null;
  }

  try {
    const data = await fetchMenus(process.env.NEXT_MENU_NAME);
    const navData = data.links || [];
    const settings = await fetchSettings();

    const renderLinks = (links, isDropdown = false) => {
      return links.map((link, index) => (
        link.active && (
          <li key={index} tabIndex={0} className={isDropdown ? '' : 'dropdown dropdown-hover'}>
            {link.children && link.children.length > 0 ? (
              <>
                <label tabIndex={0} className="flex items-start md:items-center md:btn-ghost my-auto md:h-full font-semibold">
                  {link.title}{' '}
                  <svg
                    className="fill-current ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </label>
                <ul className="md:dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
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
      <div className='w-full fixed z-10 shadow-md'>
        <div className="navbar bg-base-100 mx-auto max-w-7xl">
          <div className="container mx-auto flex items-center justify-between">
            <div className="navbar-start flex items-center w-full">
              <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
                </svg>
              </label>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                {renderLinks(navData, true)}
              </ul>
              </div>
              <Link href="/" className="btn btn-ghost normal-case text-xl">
              {settings.seo.title}
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{renderLinks(navData)}</ul>
            </div>
            <div className={`flex justify-end w-full ${theme ? '' : 'hidden'}`}>
              {theme && <ThemeButton />}
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
