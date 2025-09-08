import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="bg-gray-100 p-2">
      <nav aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li><a href="/" className="text-blue-500">Home</a></li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={index} className="ml-2">
                <span className="text-gray-500">/</span>
                {isLast ? (
                  <span className="text-gray-700">{name}</span>
                ) : (
                  <a href={routeTo} className="text-blue-500">{name}</a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;