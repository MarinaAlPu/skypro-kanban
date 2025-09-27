import { CardWebDesign, CardResearch, CardCopywriting } from "../card/Card"


export const ColumnWithoutStatus = () => {
  return (
    <div class="main__column column">
      <div class="column__title">
        <p>Без статуса</p>
      </div>
      <div class="cards">
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
    <div class="main__column">
      <div class="column__title">
        <p>Нужно сделать</p>
      </div>
      <div class="cards">
        <CardResearch />
      </div>
    </div>
  )
}

export const ColumnInWork = () => {
  return (
    <div class="main__column">
      <div class="column__title">
        <p>В работе</p>
      </div>
      <div class="cards">
        <CardResearch/>

        <CardCopywriting />

        <CardWebDesign />
      </div>
    </div>
  )
}

export const ColumnTesting = () => {
  return (
    <div class="main__column">
      <div class="column__title">
        <p>Тестирование</p>
      </div>
      <div class="cards">
        <CardResearch />
      </div>
    </div>
  )
}

export const ColumnReady = () => {
  return (
    <div class="main__column">
      <div class="column__title">
        <p>Готово</p>
      </div>
      <div class="cards">
        <CardResearch />
      </div>
    </div>
  )
}