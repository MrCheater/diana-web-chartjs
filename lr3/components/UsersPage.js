import React from "react";
import { useSelector } from "react-redux";

const UsersPage = () => {
  const users = useSelector(({ users }) => users);

  return (
    <table className="users-table">
      <thead>
        <tr>
          <th>Имя пользователя</th>
          <th>Логин пользователя</th>
          <th>Хеш пароль пользователя</th>
          <th>Возраст пользователя</th>
          <th>Город проживания пользователя</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, login, passwordHash, age, city, isAdmin }, index) => {
          return (
            <tr key={index}>
              <td>
                <input defaultValue={name} id={`name_${index}`} />
              </td>
              <td>
                {login}
              </td>
              <td>{passwordHash}</td>
              <td>
                <input defaultValue={age} id={`age_${index}`}/>
              </td>
              <td>
                <input defaultValue={city} id={`city_${index}`}/>
              </td>
              <td>
                <button
                  disabled={isAdmin}
                  onClick={() =>
                    fetch("/api/users", {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ method: "delete", login }),
                    }).then(()=>{
                      window.location = '/users'
                    })
                  }
                >
                  Удалить
                </button>
                <button
                  disabled={isAdmin}
                  onClick={() =>
                    fetch("/api/users", {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        method: "update",
                        name: document.getElementById(`name_${index}`).value,
                        login,
                        age: document.getElementById(`age_${index}`).value,
                        city: document.getElementById(`city_${index}`).value,
                      }),
                    })
                  }
                >
                  Изменить
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersPage;
