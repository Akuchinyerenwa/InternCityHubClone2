import "./AppLinks.css";

export function AppLinks({ title, contents, isSocialLinks }) {
  return (
    <div className="dummy-cantact">
      <h4>{title}</h4>
      {isSocialLinks ? (
        <div className="social-links">
          {contents.map(({ href, value }, index) => (
            <a key={index} href={href}>
              <img src={value} alt="social link" className="size-[20px]" />
            </a>
          ))}
        </div>
      ) : (
        <ul>
          {contents.map(({ href, value }) => (
            <li key={value}>
              <a href={href}>{value}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
