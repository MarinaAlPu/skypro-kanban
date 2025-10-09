// import { CardWebDesign, CardResearch, CardCopywriting } from "../card/Card";
// import { cards } from "../../data";
import { Card } from "../card/Card";


export const ColumnWithoutStatus = ({ filteredCardsWithoutStatus }) => {

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>Без статуса</p>
      </div>
      <div className="cards">
        {filteredCardsWithoutStatus.map((card) => {
          return (
            <Card
              id={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
            />
          )
        })}
      </div>
    </div>
  )
}

export const ColumnToDo = ({ filteredCardsToDo }) => {
  // const status = filteredCardsToDo[0].status;

  return (
    <div className="main__column">
      <div className="column__title">
        <p>Нужно сделать</p>
        {/* <p>{status}</p> */}
      </div>
      <div className="cards">
        {filteredCardsToDo.map((card) => {
          return (
            <Card
              id={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          )
        })}
      </div>
    </div>
  )
}

export const ColumnInWork = ({ filteredCardsImWork }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>В работе</p>
      </div>
      <div className="cards">
        {filteredCardsImWork.map((card) => {
          return (
            <Card
              id={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
            />
          )
        })}
      </div>
    </div>
  )
}

export const ColumnTesting = ({ filteredCardsTesting }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Тестирование</p>
      </div>
      <div className="cards">
        {filteredCardsTesting.map((card) => {
          return (
            <Card
              id={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          )
        })}
      </div>
    </div>
  )
}

export const ColumnReady = ({ filteredCardsReady }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Готово</p>
      </div>
      <div className="cards">
        {filteredCardsReady.map((card) => {
          return (
            <Card
              id={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          )
        })}
      </div>
    </div>
  )
}