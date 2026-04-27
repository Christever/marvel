export default function Button({color,click, children }) {
  return <button className={`button`} onClick={click}>{children}</button>;
}
