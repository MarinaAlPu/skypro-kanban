import { ColumnReady, ColumnTesting, ColumnInWork, ColumnToDo, ColumnWithoutStatus } from "../column/Column"

export const Main = () => {
  return (
    <main class="main">
      <div class="container">

        <div class="main__block">
          <div class="main__content">
            <ColumnWithoutStatus />
            <ColumnToDo />
            <ColumnInWork />
            <ColumnTesting />
            <ColumnReady />


          </div>
        </div>
      </div>
    </main>
  )
}