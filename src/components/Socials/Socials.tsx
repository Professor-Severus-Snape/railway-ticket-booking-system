import './socials.css';

const Socials = () => {
  const items = [
    { id: 1, title: 'max', href: 'https://max.ru' },
    { id: 2, title: 'vk', href: 'https://vk.ru' },
    { id: 3, title: 'ok', href: 'https://ok.ru/' },
    { id: 4, title: 'rutube', href: 'https://rutube.ru/' },
    { id: 5, title: 'vk-video', href: 'https://vkvideo.ru' },
  ];

  return (
    <ul className="socials">
      {items.map((item) => (
        <li className="socials__item" key={item.id}>
          <a
            className={`socials__link socials__link_${item.title}`}
            href={item.href}
            target="_blank"
            title={item.title}
          ></a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
