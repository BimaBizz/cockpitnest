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

    const renderLinks = (links) => {
      return (
        <ul className="menu menu-horizontal px-1">
          {links.map((link, index) => (
            link.active && (
              <li key={index} tabIndex={0} className="dropdown dropdown-hover">
                {link.children && link.children.length > 0 ? (
                  <>
                    <label tabIndex={0} className="btn btn-ghost">
                      {link.title} <svg className="fill-current ml-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                    </label>
                    <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      {link.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link href={child.url.route || child.url}>
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={link.url.route || link.url} className="btn btn-ghost">
                    {link.title}
                  </Link>
                )}
              </li>
            )
          ))}
        </ul>
      );
    };

    return (
      <div className="navbar bg-base-100 fixed z-10 shadow-md">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="w-full flex">
            <div className="dropdown flex items-center relative">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box shadow-lg w-52 p-2 absolute z-10 top-10">
                {renderLinks(navData)}
              </ul>
              <Link href={'/'} className="btn btn-ghost text-xl">
                {settings.seo.title}
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            {renderLinks(navData)}
          </div>
          <div className="navbar-end w-full flex justify-end">
            {theme && <ThemeButton />}
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
