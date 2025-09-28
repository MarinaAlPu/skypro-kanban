import { ColumnReady, ColumnTesting, ColumnInWork, ColumnToDo, ColumnWithoutStatus } from "../column/Column"

export const Main = () => {
  return (
    <main className="main">
      <div className="container">

        <div className="main__block">
          <div className="main__content">
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