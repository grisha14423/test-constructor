import React, { useEffect, useState } from "react"
import api from "../api"
import TableHeader from "../components/form/TableHeader"
import NumericRow from "../components/form/NumericRow"
import ContentRows from "../components/form/ContentRows"
import { Link } from "react-router-dom"

const RestructerPage = () => {
  const [users, setUsers] = useState()
  let [currentUserId, setCurrentUserId] = useState()

  useEffect(() => {
    api.users.fetchAll().then((data) => {
      setUsers(data)
    })
  }, [])

  const handleGetCurrentUserId = (e) => {
    console.log(e.target.dataset.id)
    setCurrentUserId(e.target.dataset.id)
  }

  return (
    <>
      <div className="row row-centered colored">
        <button className="btn btn-primary w-50 mx-auto m-2 col-sm-4">
          <Link to="/newclient" className="nav-link m-2">
            + Новый клиент
          </Link>
        </button>

        <button
          className="btn btn-primary w-50 mx-auto m-2 col-sm-4"
          disabled={!currentUserId}
        >
          <Link to={"/newclient/" + currentUserId} className="nav-link m-2">
            Редактировать клиента (нажмать на номер в таблице): {currentUserId}
          </Link>
        </button>
      </div>

      {users ? (
        <table className="table">
          <TableHeader />
          <tbody>
            <NumericRow />
            <ContentRows
              users={users}
              handleGetCurrentUserId={handleGetCurrentUserId}
            />
          </tbody>
        </table>
      ) : (
        <h2>Нет данных</h2>
      )}
    </>
  )
}

export default RestructerPage
