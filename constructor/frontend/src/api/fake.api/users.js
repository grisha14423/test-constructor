export const users = [
  {
    id: 1,
    manager: "Панфилова И. О,",
    clientName: "ООО 'Розочка'",
    INN: "345352342",
    region: "77 г. Москва",
    status: "Кредитор",
    support: "Мировое соглашение",
    positive: "Мировое соглашение",
    negative: "-",
    solvency: "Высокий риск",
    activity: "Средний риск",
    activeType: "Средний риск",
    stage: "Работа завершена",
    point: "25.05.23",
  },
  {
    id: 2,
    manager: "Бойченко К. О,",
    clientName: "ИП Волков А. Р.",
    INN: "3458258916",
    region: "61 Ростовская область",
    status: "Должник",
    support: "Рассрочка",
    positive: "-",
    negative: "-",
    solvency: "Низкий риск",
    activity: "Высокий риск",
    activeType: "Высокий риск",
    stage: "В работе",
    point: "09.10.23",
  },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(users)
    }, 0)
  })

export default {
  fetchAll,
}
