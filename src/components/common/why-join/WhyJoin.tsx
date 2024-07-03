import './WhyJoin.scss'

type WhyJoinProps = {
  title: React.ReactNode
  data: {
    key: number
    title: string
    description: string
  }[]
}

export default function WhyJoin({ title, data }: WhyJoinProps) {
  return (
    <div className="why-join-container">
      {title}
      <div className="feature-container">
        {data.map((feature) => (
          <div className="feature-box" key={feature.key}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
