import { CardWebDesign, CardResearch, CardCopywriting } from "../card/Card"


export const ColumnWithoutStatus = () => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>Без статуса</p>
      </div>
      <div className="cards">
        <CardWebDesign />

        <CardResearch />

        <CardWebDesign />

        <CardCopywriting />

        <CardWebDesign />
      </div>
    </div>
  )
}

export const ColumnToDo = () => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Нужно сделать</p>
      </div>
      <div className="cards">
        <CardResearch />
      </div>
    </div>
  )
}

export const ColumnInWork = () => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>В работе</p>
      </div>
      <div className="cards">
        <CardResearch/>

        <CardCopywriting />

        <CardWebDesign />
      </div>
    </div>
  )
}

export const ColumnTesting = () => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Тестирование</p>
      </div>
      <div className="cards">
        <CardResearch />
      </div>
    </div>
  )
}

export const ColumnReady = () => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Готово</p>
      </div>
      <div className="cards">
        <CardResearch />
      </div>
    </div>
  )
}