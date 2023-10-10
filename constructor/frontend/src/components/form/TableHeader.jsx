import React from "react"

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">П\П</th>
        <th scope="col">Менеджер площадки</th>
        <th scope="col">Наименование клиента</th>
        <th scope="col">ИНН</th>
        <th scope="col">Регион</th>
        <th scope="col">Статус заявителя</th>
        <th scope="col">Мера поддержки, запрашиваемая клиентом</th>
        <th scope="col">Вид положительного решения</th>
        <th scope="col">Вид отрицательного решения</th>
        <th scope="col">Платежесп-ть</th>
        <th scope="col">Деловая активность</th>
        <th scope="col">Вид активов</th>
        <th scope="col">Стадия рассмотрения</th>
        <th scope="col">Контрольная точка</th>
      </tr>
    </thead>
  )
}

export default TableHeader
