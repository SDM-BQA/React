export default function TabBtn({ children, isSelected, ...props}) {

  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
    </li>
  );
}
