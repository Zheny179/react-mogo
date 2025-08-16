import './styles.scss'

export default function Statistics() {
  const stats = [
    {count: 42, text: "Web design projects"},
    {count: 123, text: "happy client"},
    {count: 15, text: "award winner"},
    {count: 99, text: "cup of coffee"},
    {count: 24, text: "members"}
  ];

  return (
    <div className='statistics'>
      <div className='container'>
        <div className='stat'>
          {stats.map((stat, index) => (
            <div
              className='stat__item'
              key={index}
            >
              <div className='stat__count'>{stat.count}</div>
              <div className='stat__text'>{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}