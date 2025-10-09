import { ColumnWithoutStatus, ColumnToDo, ColumnInWork, ColumnTesting, ColumnReady } from "../column/Column"

export const Main = ({ cards }) => {
  // let filteredCardsWebDesign = cards.filter(card => card.topic === "Web Design");
  // let filteredCardsResearch = cards.filter(card => card.topic === "Research");
  // let filteredCardsCopywriting = cards.filter(card => card.topic === "Copywriting");

  let filteredCardsWithoutStatus = cards.filter(card => card.status === "Без статуса");
  let filteredCardsToDo = cards.filter(card => card.status === "Нужно сделать");
  let filteredCardsImWork = cards.filter(card => card.status === "В работе");
  let filteredCardsTesting = cards.filter(card => card.status === "Тестирование");
  let filteredCardsReady = cards.filter(card => card.status === "Готово");


  return (
    <main className="main">
      <div className="container">

        <div className="main__block">
          <div className="main__content">
            <ColumnWithoutStatus filteredCardsWithoutStatus={filteredCardsWithoutStatus} />
            <ColumnToDo filteredCardsToDo={filteredCardsToDo} />
            <ColumnInWork filteredCardsImWork={filteredCardsImWork} />
            <ColumnTesting filteredCardsTesting={filteredCardsTesting} />
            <ColumnReady filteredCardsReady={filteredCardsReady} />
          </div>
        </div>
      </div>
    </main>
  )
}