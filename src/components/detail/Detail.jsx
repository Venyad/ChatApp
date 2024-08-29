import React from 'react'
import "./detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://www.billboard.com/wp-content/uploads/2021/12/bts-courtesy-billboard-japan-1548.jpg?w=942&h=623&crop=1" alt="" />
                <span>photo_2024_2.png</span>

              </div>

              <img src="./download.png" alt="" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://www.billboard.com/wp-content/uploads/2021/12/bts-courtesy-billboard-japan-1548.jpg?w=942&h=623&crop=1" alt="" />
                <span>photo_2024_2.png</span>

              </div>

              <img src="./download.png" alt="" className='icon' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://www.billboard.com/wp-content/uploads/2021/12/bts-courtesy-billboard-japan-1548.jpg?w=942&h=623&crop=1" alt="" />
                <span>photo_2024_2.png</span>

              </div>

              <img src="./download.png" alt="" className='icon' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://www.billboard.com/wp-content/uploads/2021/12/bts-courtesy-billboard-japan-1548.jpg?w=942&h=623&crop=1" alt="" />
                <span>photo_2024_2.png</span>

              </div>

              <img src="./download.png" alt="" className='icon' />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Detail
