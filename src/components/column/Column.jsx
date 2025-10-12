import { Card } from "../card/Card";


export const Column = ({ title, cardsByStatus }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {
          cardsByStatus[title].map((card) => {
            return (
              <div className="cards__item" key={card.id}>
                <Card
                  topic={card.topic}
                  title={card.title}
                  date={card.date}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
